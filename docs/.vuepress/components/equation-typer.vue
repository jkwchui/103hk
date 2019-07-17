<template>
    <div>
      <el-input
        placeholder="Chem equation here as LaTeX"
        v-model="input"
        clearable>
        <!-- <el-button @click="show_svg" slot="append" icon="el-icon-download"></el-button> -->
      </el-input>

      <Chem :formula="input" id="output-pic" />

      <!-- <img :src="render"> </img> -->
<!--       
      {{ this.render }} -->

    </div>
</template>
<script>

    export default {
        components: { },
        data () {
            return {
              input: '',
              render: ''
            }
        },
        methods: {
          show_svg: function (event) {
            var svg = document.querySelector('svg');
            var xml = new XMLSerializer().serializeToString(svg);
            // var svg64 = btoa(xml); //for utf8: btoa(unescape(encodeURIComponent(xml)))
            // var b64start = 'data:image/svg+xml;base64,';
            this.render = xml //b64start + svg64;
            return;
          }
        }
    }
</script>

<style scoped>

</style>