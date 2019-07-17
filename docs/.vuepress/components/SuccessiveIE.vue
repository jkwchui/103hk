<template>
<div>

  <v-chart :options="step" />

  <el-row>
  <el-col :span="12">
  <el-select v-model="select1" placeholder="Select element 1">
    <el-option
      v-for="item in data"
      :key="item.name"
      :label="item.name"
      :value="item.name">
    </el-option>
  </el-select>
  <br>
    {{ element1.shells }}
  </el-col>

  <el-col :span="12">
  <el-select v-model="select2" placeholder="Select element 2">
    <el-option
      v-for="item in data"
      :key="item.name"
      :label="item.name"
      :value="item.name">
    </el-option>
  </el-select>
  </el-col>
    <br>
    {{ element2.shells }}

  </el-row>


  <!-- <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="name"
      label="Element"
      width="100"
      fixed
      sortable
      >
    </el-table-column>
    <el-table-column
      prop="atomic_mass"
      label="Atomic mass"
      width="120"
      sortable>
    </el-table-column>
    <el-table-column
      prop="melt"
      label="Melting point"
      sortable>
    </el-table-column>
  </el-table> -->

  <!-- {{ tableData }} -->

  <!-- <br>
  {{ select1 }}
  <hr />
  {{ element1.appearance }}

  {{ select2 }}
  <hr />
  {{ element2.appearance }} -->

  <!-- {{ data }} -->

    <!-- <div v-for="i in items">
    <h2>{{i.first_name}} {{i.last_name}}</h2> -->
</div>
</template>

<script>

import data from '../public/data/PeriodicTableJSON.json'

import ECharts from '../../../node_modules/vue-echarts'
import '../../../node_modules/echarts/lib/chart/line'
import '../../../node_modules/echarts/lib/chart/bar'
// import '../../../node_modules/echarts/lib/chart/stack'
import '../../../node_modules/echarts/lib/component/tooltip'
import '../../../node_modules/echarts/lib/component/toolbox'
import '../../../node_modules/echarts/lib/component/legend'


export default {
  components: {
    'v-chart': ECharts
  },
  data () {
      return {
        data: data.elements,
        select1: 'Calcium',
        select2: 'Hydrogen'
      }
  },
  props: {
    scale: {
      default: 'log',
      type: String
    }
  },
  computed: {
    element1: function () {
      // return typeof(data)
      return this.loadElement(this.select1)
    },
    element2: function () {
      // return typeof(data)
      return this.loadElement(this.select2)
    },
    tableData: function () {
      var table = []
      table.push(this.element1)
      table.push(this.element2)

      return table
    },
    step: function () {
      return {
        title: {
            text: 'Successive ionization energies'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:[ this.select1, this.select2]
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                // myTool2: {
                //   show: true,
                //   title: 'Switch log/normal axis',
                //   icon: 'image://http://echarts.baidu.com/images/favicon.png',
                //   onclick: () => {
                //     console.log(this.step.yAxis.type)
                //     if (this.step.yAxis.type === 'log') {
                //       this.step.yAxis.type = 'value'
                //     } else {
                //       this.step.yAxis.type = 'log'
                //     }
                //   }
                // },
                saveAsImage: {
                  name: 'IonizationEnergy',
                  title: 'Save as image'
                },

                // magicType: {
                //     type: ['line', 'bar', 'stack']
                // }
            }
        },
        xAxis: {
            type: 'category',
            data: this.axisLabels()
        },
        yAxis: {
            // type: 'value'
            type: this.scale
        },
        series: [
            {
                name: this.select1,
                type:'line',
                step: 'middle',
                data: this.element1.ionization_energies,
                color: ['#0064a6'],
            },
            {
                name: this.select2,
                type:'line',
                step: 'middle',
                data: this.element2.ionization_energies,
                color: ['#909399'],
            },
            // {
            //     name:'Step End',
            //     type:'line',
            //     step: 'end',
            //     data:[450, 432, 401, 454, 590, 530, 510]
            // }
        ]
      }
    }
  },
  methods: {
    loadElement: function(element) {
      return this.data.find(obj => {
        return obj.name === element
      })
    },

    axisLabels: function () {
      var full = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th']

      var len = Math.max(this.element1.ionization_energies.length, this.element2.ionization_energies.length)

      full.length = len
      return full
    }
  }
}
</script>

<style scoped>
/**
 * The default size is 600px×400px, for responsive charts
 * you may need to set percentage values as follows (also
 * don't forget to provide a size for the container).
 */
.echarts {
  width: 100%;
  /* height: 100%; */
}
</style>