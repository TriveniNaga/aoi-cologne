import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';

/**
 * NRW DOP (Digital Orthophotos) WMS layer
 * This provides aerial imagery tiles from the NRW geobasis service.
 */
export const dopWmsLayer = new TileLayer({
  source: new TileWMS({
    url: 'https://www.wms.nrw.de/geobasis/wms_nw_dop',
    params: {
      LAYERS: 'nw_dop_rgb', // Layer name for RGB orthophotos
      TILED: true,
    },
    serverType: 'geoserver',
    crossOrigin: 'anonymous',
  }),
});
