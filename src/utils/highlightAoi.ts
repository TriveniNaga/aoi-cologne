// src/utils/highlightAOI.ts

import { fromLonLat } from 'ol/proj';
import { Feature } from 'ol';
import { Circle as CircleGeom } from 'ol/geom';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Style, Stroke } from 'ol/style';

export function highlightCity(map: any, coords: [number, number]) {
  const center = fromLonLat(coords);

  const circleFeature = new Feature({
    geometry: new CircleGeom(center, 1000),
  });

  circleFeature.setStyle(
    new Style({
      stroke: new Stroke({
        color: '#EB965E',
        width: 3,
        lineDash: [10, 10],
      }),
    })
  );

  const vectorLayer = new VectorLayer({
    source: new VectorSource({
      features: [circleFeature],
    }),
  });

  map.addLayer(vectorLayer);
  map.getView().setCenter(center);
  map.getView().setZoom(12);
}
