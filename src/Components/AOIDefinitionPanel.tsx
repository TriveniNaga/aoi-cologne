// src/Components/AOIDefinitionPanel.tsx
import { useState, useMemo, useEffect } from 'react';
import { fromLonLat } from 'ol/proj';
import { useLocation, useNavigate } from 'react-router-dom';
import AOIDropdown from './AOIDropdown';
import { mapInstance, fitToBBox } from './MapCanvas';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { Style, Stroke, Fill } from 'ol/style';

type BBox = [number, number, number, number];

function exportAOIToGeoJSON(features: any[], filename = 'aoi.geojson') {
  const geojsonObj = new GeoJSON().writeFeaturesObject(features);
  const blob = new Blob([JSON.stringify(geojsonObj, null, 2)], {
    type: 'application/json',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export default function AOIDefinitionPanel() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialQuery: string = (location.state as any)?.initialQuery || '';

  const [searchText, setSearchText] = useState(initialQuery || '');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [outlineApplied, setOutlineApplied] = useState(false);
  const [highlightedFeatures, setHighlightedFeatures] = useState<any[]>([]);

  const vectorLayer = useMemo(() => new VectorLayer({ source: new VectorSource() }), []);

  useEffect(() => {
    if (!mapInstance) return;
    const layers = mapInstance.getLayers().getArray();
    if (!layers.includes(vectorLayer)) {
      mapInstance.addLayer(vectorLayer);
    }
    return () => {
      if (mapInstance) {
        mapInstance.removeLayer(vectorLayer);
      }
    };
  }, [vectorLayer]);

  useEffect(() => {
    if (initialQuery) {
      highlightPlace(initialQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuery]);

  async function geocodePlace(
    place: string
  ): Promise<{ coords: [number, number]; geojson: any; bbox: BBox | null } | null> {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&polygon_geojson=1&q=${encodeURIComponent(place)}`
      );
      const results = await response.json();
      if (Array.isArray(results) && results.length > 0) {
        const { lat, lon, geojson, boundingbox } = results[0];
        let bbox: BBox | null = null;
        if (Array.isArray(boundingbox) && boundingbox.length === 4) {
          bbox = [
            parseFloat(boundingbox[2]),
            parseFloat(boundingbox[0]),
            parseFloat(boundingbox[3]),
            parseFloat(boundingbox[1]),
          ] as BBox;
        }
        return { coords: [parseFloat(lon), parseFloat(lat)], geojson, bbox };
      }
      return null;
    } catch (err) {
      console.error('Geocode error:', err);
      return null;
    }
  }

  async function highlightPlace(place: string) {
    if (!mapInstance) return;
    const result = await geocodePlace(place);
    if (!result) return;

    const { coords, geojson, bbox } = result;
    const center = fromLonLat(coords);

    const features = new GeoJSON().readFeatures(geojson, {
      featureProjection: mapInstance.getView().getProjection(),
      dataProjection: 'EPSG:4326',
    });

    const style = new Style({
      stroke: new Stroke({ color: '#00FFFF', width: 3 }),
      fill: new Fill({ color: 'rgba(0,255,255,0.1)' }),
    });
    features.forEach((f) => f.setStyle(style));

    vectorLayer.getSource()?.clear();
    vectorLayer.getSource()?.addFeatures(features);
    setHighlightedFeatures(features);
    setSelectedArea(place);

    if (bbox) {
      fitToBBox(bbox);
    } else {
      mapInstance.getView().setCenter(center);
      mapInstance.getView().setZoom(8);
    }
  }

  function applyOutlineAsBaseImage() {
    if (!mapInstance || highlightedFeatures.length === 0) return;

    const lightMapLayer = new TileLayer({
      source: new XYZ({
        url: 'https://{a-c}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        attributions: '&copy; OSM &copy; CARTO',
      }),
    });

    const layers = mapInstance.getLayers().getArray();
    if (layers.length > 0) {
      mapInstance.removeLayer(layers[0]); // replace current base
    }
    mapInstance.getLayers().insertAt(0, lightMapLayer);

    setOutlineApplied(true);
  }

  return (
    <div
      className="absolute"
      style={{
        width: '314px',
        height: '979px',
        top: '49px',
        left: '72px',
        backgroundColor: '#FFFFFF',
        zIndex: 10,
      }}
    >
      {/* Back button */}
      <button
        onClick={() => navigate('/')}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          padding: '6px 12px',
          backgroundColor: '#EB965E',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        ⬅ Back
      </button>

      <div className="absolute text-[16px] font-medium text-gray-700" style={{ top: '20px', left: '20px' }}>
        Define Area of Interest
      </div>

      <div
        className="absolute text-gray-700"
        style={{
          width: '249px',
          height: '56px',
          top: '60px',
          left: '20px',
          fontFamily: 'Manrope, sans-serif',
          fontSize: '18px',
          padding: '10px',
          borderRadius: '6px',
          lineHeight: '150%',
        }}
      >
        Search or use vector tool to create your region.
      </div>

      <div
        className="absolute text-gray-700"
        style={{
          top: '125px',
          left: '24.17px',
          fontFamily: 'Manrope',
          fontWeight: 500,
          fontSize: '16px',
        }}
      >
        Search Area
      </div>

      <div
        className="absolute flex items-center"
        style={{
          width: '286px',
          height: '40px',
          top: '164px',
          left: '14px',
          backgroundColor: '#F5E5C3',
          borderRadius: '10px',
          border: '1px solid #D4CEC4',
          paddingLeft: '10px',
        }}
      >
        <span className="text-gray-600 mr-2">🔍</span>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              highlightPlace(searchText);
            }
          }}
          placeholder="city, town, region..."
          className="bg-transparent w-full text-[13px] font-medium text-gray-800 outline-none"
        />
      </div>

      {showDropdown && (
        <AOIDropdown
          onSelect={(val) => {
            setSearchText(val);
            highlightPlace(val);
            setShowDropdown(false);
          }}
        />
      )}

      <button
        disabled={outlineApplied || highlightedFeatures.length === 0}
        className="absolute text-[13px] font-medium text-white"
        style={{
          width: '266px',
          height: '58px',
          top: '220px',
          left: '24.18px',
          background: outlineApplied ? '#D9D9D9' : '#EB965E',
          color: outlineApplied ? '#888' : '#fff',
          borderRadius: '10px',
          border: 'none',
          cursor: outlineApplied ? 'not-allowed' : 'pointer',
        }}
        onClick={applyOutlineAsBaseImage}
      >
        Apply outline as base image
      </button>

           <div
        className="absolute text-[12px] text-gray-600"
        style={{ top: '290px', left: '24px', width: '270px' }}
      >
        You can always change the base image or area later
      </div>

      <button
        disabled={!outlineApplied}
        className="absolute text-[13px] font-medium"
        style={{
          width: '266px',
          height: '62px',
          top: '420px',
          left: '24.18px',
          backgroundColor: outlineApplied ? '#EB965E' : '#D9D9D9',
          color: outlineApplied ? '#fff' : '#888',
          borderRadius: '10px',
          border: 'none',
          cursor: outlineApplied ? 'pointer' : 'not-allowed',
        }}
        onClick={() => {
          if (selectedArea && highlightedFeatures.length > 0) {
            highlightedFeatures.forEach((f) => {
              f.setStyle(
                new Style({
                  stroke: new Stroke({ color: '#00FFFF', width: 3 }),
                  fill: new Fill({ color: 'rgba(0,255,255,0.1)' }),
                })
              );
            });

            exportAOIToGeoJSON(
              highlightedFeatures,
              `${selectedArea.replace(/\s+/g, '_')}.geojson`
            );
          }
        }}
      >
        Confirm Area of Interest
      </button>
    </div>
  );
}
