<template>
    <div id="map-wrap">
        <MglMap
        :accessToken="accessToken" 
        :mapStyle="mapStyle"
        :center.sync="center"
        :zoom.sync="zoom"
        @load="onMapLoaded">
            <MglRasterLayer
                :sourceId="rasterSource.id"
                :source="rasterSource"
                layerId="hillshading"
                :layer="rasterLayer"
            />
            <slot>
            
            </slot>
        </MglMap>
        <!-- <div id="map" width="640" height="500"></div> -->
    </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { 
  MglMap, 
  MglRasterLayer,
  // MglMarker, 
  // MglPopup, 
  // MglGeojsonLayer 
  } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglRasterLayer,
    // MglMarker,
    // MglPopup,
    // MglGeojsonLayer
  },
  props: {
    init_center: {
      type: Object,
      default: {lng:20, lat:20}
    },
    init_zoom: {
      type: Number,
      default: 4
    },
    container: {
        type: String,
        default: 'map'
    }
  },
  data() {
    return {
      accessToken: "pk.eyJ1Ijoiamt3Y2h1aSIsImEiOiJpRU1vbDdnIn0.Pko9FI8omzfymX90V_59dg", // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/jkwchui/cjv872vku086d1fo4cp4lstji", // your map style
      center: {},
      zoom: 10.0,
      // markerCoordinates: [35.229489, 31.771858]
      rasterSource: {
        "id": "dem",
        "type": "raster-dem",
        "url": "mapbox://mapbox.terrain-rgb"
      },
      rasterLayer: {
        "id": "hillshading",
        "source": "dem",
        "type": "hillshade"
      }
    };
  },
  methods: {
    onMapLoaded(event) {
    }
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;

    this.center = Object.assign({}, this.init_center)
    this.zoom = this.init_zoom
  }
};
</script>

<style lang="stylus">
// @import url("https://api.tiles.mapbox.com/mapbox-gl-js/v0.54.0/mapbox-gl.css");
@import "../../../node_modules/mapbox-gl/dist/mapbox-gl.css";
#map-wrap {
  position: relative;
  height: 400px;
//   top: 0;
//   left: 0;
  width: 100%;
  overflow: hidden;
}

</style>
