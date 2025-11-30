import Map from 'ol/Map';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Draw from 'ol/interaction/Draw';
import TileLayer from 'ol/layer/Tile';

/**
 * Initialize an OpenLayers map with given layers and a vector source.
 * @param target - The HTML element to render the map into
 * @param layers - Array of base layers (e.g. WMS, OSM)
 * @param vectorSource - Vector source for drawing features
 */
export function initMap(
  target: HTMLElement,
  layers: TileLayer[],
  vectorSource: VectorSource
) {
  const vectorLayer = new VectorLayer({ source: vectorSource });

  const map = new Map({
    target,
    layers: [...layers, vectorLayer],
    view: new View({
      center: fromLonLat([7.1, 50.9]), // Cologne approx coordinates
      zoom: 12,
    }),
  });

  return map;
}

/**
 * Add a polygon drawing interaction to the map.
 * @param map - The OpenLayers map instance
 * @param source - The vector source to store drawn features
 */
export function addDrawInteraction(map: Map, source: VectorSource) {
  const draw = new Draw({
    source,
    type: 'Polygon',
  });
  map.addInteraction(draw);
  return draw;
}
