<template>
    <div>
      <el-input
        placeholder="Chem ID here"
        v-model="input"
        clearable>
        <!-- <el-button @click="show_svg" slot="append" icon="el-icon-download"></el-button> -->
      </el-input>

      <Molecule v-bind:cid="input" :key="input" />

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
              input: '314'
            }
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>