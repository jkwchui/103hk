<template>
    <div class="content">
      <timeline ref="timeline" :items="items" :groups="groups" :options="options">
    </timeline>
    </div>
</template>
<script>

import { Timeline } from 'vue2vis'

    export default {
        components: { 'timeline': Timeline },
        data() {
            return {
              groups: [{
                id: 0,
                content: 'Group 1'
              }],
              items: [{
                id: 0,
                group: 0,
                start: new Date(),
                content: 'Item 1'
              }],
              options: {
                editable: true,
              }
            }
          },
    }
</script>

<style scoped>
@import "../../../node_modules/vue2vis/dist/vue2vis.css"
</style>
