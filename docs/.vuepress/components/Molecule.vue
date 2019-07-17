<template>
    <div class="content">
        <div style="height: 600px; width: 600px; position: relative;" class='viewer_3Dmoljs' v-bind:data-cid="cid" v-bind:data-pdb="pdb" v-bind:data-href="url" v-bind:data-type="type" :data-backgroundcolor="bkg" v-bind:data-style="render" :data-surface="surface"></div>
    </div>
</template>

<script>
export default {
  mounted() {
    var body = document.getElementsByTagName("body")[0], script;
    script = document.createElement("script");
    script.src="https://3Dmol.csb.pitt.edu/build/3Dmol-min.js";
    body.appendChild(script);
  },
  data () {
    return {
    // formula: '$$\\ce{H2SO4\\aq{} <=> H+ + HSO4^-} = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$'
      }
  },
  props: {
    pdb: String,
    cid: String,
    url: String,
    type: String,
    render: {
      type: String,
      default: 'stick'
    },
    surface: {
      type: String,
      default: 'opacity:.4;color:white'
    },
    bkg: {
      type: String,
      default: '0x003466'
    }
  }
}

</script>

<style scoped>
.mol-container {
  width: 60%;
  height: 400px;
  position: relative;
}
</style>