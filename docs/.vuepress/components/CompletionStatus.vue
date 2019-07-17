<template>
    <!-- <div class="content"> -->
      <el-progress :text-inside="false" :stroke-width="18" :percentage="this.percentage" :status=status :color=color></el-progress>
      </el-progress>
    <!-- </div> -->
</template>

<script>

export default {
  components: { },
  data () {
      return {
        color: ''
      }
  },
  props: {
    percentage: {
      type: Number,
      default: 30
    }
  },
  computed: {
    status () {
      if (this.percentage >= 90) {
        return "success"
      } else if (this.percentage >= 60) {
        this.color = "#e6a23c"
        return
      } else {
        return "exception"
      }
    }
  }
}
</script>

<style scoped>

</style>