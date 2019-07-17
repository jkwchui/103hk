<template>
<div>

  <v-chart :options="step" />

</div>
</template>

<script>

import data from '../public/data/dataBookletElements.json'

import ECharts from '../../../node_modules/vue-echarts'
import '../../../node_modules/echarts/lib/chart/line'
import '../../../node_modules/echarts/lib/chart/bar'
// import '../../../node_modules/echarts/lib/chart/stack'
import '../../../node_modules/echarts/lib/component/tooltip'
import '../../../node_modules/echarts/lib/component/toolbox'
import '../../../node_modules/echarts/lib/component/legend'
import '../../../node_modules/echarts/lib/component/dataZoom'


export default {
  components: {
    'v-chart': ECharts
  },
  data () {
      return {
        data: data,
        // select1: 'Calcium',
        // select2: 'Hydrogen'
      }
  },
  props: {
    IE: {
      default: false,
      type: Boolean
    },
    electronegativity: {
      default: false,
      type: Boolean
    },
    electron_affinity: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    step: function () {
      return {
        title: {
            text: 'Periodic Trends'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
        },
        legend: {
            data: [ 
              'IE', 
              'electronegativity', 
              'electron affinity', 
              // 'atomic radii'
              ],
            selected: {
              'IE': this.IE,
              'electronegativity': this.electronegativity,
              'electron affinity': this.electron_affinity,
              // 'atomic radii': false
            }
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 17
            }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },
        // color: ['#0064a6', '#009b90', '#e6a23c', '#ad1644', '#909399', '#741669', '#de6328'],
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
                  name: 'PeriodicTrends',
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
        yAxis: [
            {
              type: 'value',
              name: 'E',
              position: 'left',
              // axisLine: {
              //     lineStyle: {
              //       color: ['#2C3E50']
              //     }
              //   },
              axisLabel: {
                  formatter: '{value} kJ/mol'
              }
            },
            {
              type: 'value',
              name: '𝛘',
              position: 'right',
              axisLine: {
                  lineStyle: {
                    color: ['#de6328']
                  }
                },
              axisLabel: {
                formatter: '{value}'
              }
            },
            // {
            //   type: 'value',
            //   name: 'radius',
            //   position: 'right',
            //   offset: 50,
            //   axisLine: {
            //       lineStyle: {
            //         color: ['#717073']
            //       }
            //     },
            //   axisLabel: {
            //     formatter: '{value} pm'
            //   }
            // }
        ],
        series: [
            {
                name: 'IE',
                type:'line',
                step: 'middle',
                data: this.loadIE(),
                color: ['#0064a6'],
            },
            {
                name: "electronegativity",
                type:'line',
                step: 'middle',
                data: this.loadElectronegativity(),
                color: ['#de6328'],
                yAxisIndex: 1
            },
            {
                name: "electron affinity",
                type:'line',
                step: 'middle',
                data: this.loadElectronAffinity(),
                color: ['#E6A23C'],
                yAxisIndex: 0
            },
            // {
            //     name: "atomic radii",
            //     type:'line',
            //     step: 'middle',
            //     data: this.loadAtomicRadii(),
            //     color: ['#717073'],
            //     yAxisIndex: 1
            // }
        ]
      }
    }
  },
  methods: {
    // loadElement: function(element) {
    //   return this.data.find(obj => {
    //     return obj.name === element
    //   })
    // },

    axisLabels: function () {
      var symbols = []

      var arrayLength = this.data.length;
      for (var i = 0; i < arrayLength; i++) {
          // console.log(myStringArray[i]);
          symbols.push(this.data[i].symbol)
      }
      return symbols
    },

    loadIE: function () {
      var ionization_energies = []

      var arrayLength = this.data.length;
      for (var i = 0; i < arrayLength; i++) {
          // console.log(myStringArray[i]);
          ionization_energies.push(this.data[i].ionization_energy)
      }
      return ionization_energies
    },

    loadElectronegativity: function () {
      var electronegs = []

      var arrayLength = this.data.length;
      for (var i = 0; i < arrayLength; i++) {
          // console.log(myStringArray[i]);
          electronegs.push(this.data[i].electronegativity)
      }
      return electronegs
    },

    loadElectronAffinity: function () {
      var electron_affinitys = []

      var arrayLength = this.data.length;
      for (var i = 0; i < arrayLength; i++) {
          // console.log(myStringArray[i]);
          electron_affinitys.push(this.data[i].electron_affinity)
      }
      return electron_affinitys
    },

    loadAtomicRadii: function () {
      var atomic_radiis = []

      var arrayLength = this.data.length;
      for (var i = 0; i < arrayLength; i++) {
          // console.log(myStringArray[i]);
          atomic_radiis.push(this.data[i].atomic_radii)
      }
      return atomic_radiis
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