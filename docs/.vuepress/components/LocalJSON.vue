<template>
<div>
    <div v-for="i in items">
    <h2>{{i.first_name}} {{i.last_name}}</h2>
    <img :src="i.avatar"/>
</div>
</div>
</template>
<script>
import data from '../public/data/users.json'
export default {
  data () {
      return {
          items: data.data
      }
  }
}
</script>

<style scoped>

</style>