<template>
    <div>
      <el-row>
        <el-col :span="sizeL">
          <slot name="left"></slot>
        </el-col>
        <el-col :span="sizeR">
          <slot name="right"></slot>
        </el-col>
      </el-row>
    </div>
</template>
<script>

    export default {
        components: { },
        data () {
            return {
            }
        },
        props: {
          sizeL: 8
        },
        computed: {
          sizeR () {
            return (24 - this.sizeL)
          }
        }
    }
</script>

<style scoped>

</style>