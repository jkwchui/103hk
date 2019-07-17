<template>
    <!-- <div class="content"> -->
      <el-button type="info" icon="el-icon-date" size="small" round>
        {{ date | moment("from", "now") }}
      </el-button>
    <!-- </div> -->
</template>

<script>

export default {
  components: { },
  data () {
      return {
      }
  },
  props: {
    date: String
  },

}
</script>

<style scoped>

</style>