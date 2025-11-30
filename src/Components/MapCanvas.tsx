// src/Components/MapCanvas.tsx
import { useEffect, useRef } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat, transformExtent } from 'ol/proj';
import { defaults as defaultControls } from 'ol/control';

export let mapInstance: Map | null = null;

export function fitToBBox(bbox: [number, number, number, number]) {
  if (!mapInstance) return;
  const view = mapInstance.getView();
  const transformed = transformExtent(bbox, 'EPSG:4326', view.getProjection());
  view.fit(transformed, {
    size: mapInstance.getSize(),
    padding: [40, 40, 40, 40],
    duration: 300,
  });
}

export default function MapCanvas() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    if (!mapInstance) {
      mapInstance = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
            zIndex: 0,
          }),
        ],
        view: new View({
          projection: 'EPSG:3857',
          center: fromLonLat([6.96, 50.9375]), // Cologne
          zoom: 4,
        }),
        controls: defaultControls({ attribution: false }),
      });
    } else {
      // If already created, retarget to this DOM node
      mapInstance.setTarget(mapRef.current);
    }

    // Cleanup on unmount
    return () => {
      if (mapInstance) {
        mapInstance.setTarget(undefined);
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    />
  );
}
