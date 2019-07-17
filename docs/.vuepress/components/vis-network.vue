<template>
    <div class="content">
      <network ref="mynetwork" :edges="edges" :nodes="nodes" height="600px" :options="options">
    </network>
    </div>
</template>
<script>

import { Network, DataSet } from 'vue2vis'
// import { vis } from 'vis'

// import { * } from 'vue2vis'

    export default {
        components: { 
          'network': Network,
         },
        mounted() {
        },
        data() {
            return {
              DOTstring: 'dinetwork {1 -> 1 -> 2; 2 -> 3; 2 -- 4; 2 -> 1 }',
              nodes: [
                  {id: 1, label: 'Node 1'},
                  {id: 2, label: 'Node 2'},
                  {id: 3, label: 'Node 3'},
                  {id: 4, label: 'Node 4'},
                  {id: 5, label: 'Node 5'}
              ],
              edges: [
                  {from: 1, to: 3},
                  {from: 1, to: 2},
                  {from: 2, to: 4},
                  {from: 2, to: 5}
              ],
              height: '400px',
              options: {
                // height: 400px
              },
              // parsedData: Network.convertDot('dinetwork {1 -> 1 -> 2; 2 -> 3; 2 -- 4; 2 -> 1 }')
            }
          },
        computed: {
          // parsedData: function () {
          //   return vis.network.convertDot(this.DOTstring);
          // } 
        },
    }
</script>

<style scoped>
@import "../../../node_modules/vue2vis/dist/vue2vis.css"
</style>
