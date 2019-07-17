<template>
    <v-chart :options="treemap" />
</template>

<style>
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

<script>
import ECharts from '../../../../node_modules/vue-echarts'
import '../../../../node_modules/echarts/lib/component/tooltip'
import '../../../../node_modules/echarts/lib/component/legend'
import '../../../../node_modules/echarts/lib/chart/treemap'

export default {
  components: {
    'v-chart': ECharts
  },
  methods: {
    getLevelOption () {
        return [
            {
                color: ['#0064a6', '#009b90', '#e6a23c', '#ad1644', '#909399', '#741669', '#de6328'],
                itemStyle: {
                    normal: {
                        borderColor: '#777',
                        borderWidth: 0,
                        gapWidth: 1
                    }
                }
            },
            {
                itemStyle: {
                    normal: {
                        borderColor: '#555',
                        borderWidth: 5,
                        gapWidth: 1
                    },
                    emphasis: {
                        borderColor: '#ddd'
                    }
                },
                upperLabel: {
                    normal: {
                        show: true
                    }
                }
            },
            {
                // colorSaturation: [0.35, 0.5],
                itemStyle: {
                    normal: {
                        borderWidth: 2,
                        gapWidth: 1,
                        borderColorSaturation: 0.6
                    }
                }
            }
        ];
    }
  },
  data () {
    return {
      treemap: {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c}"
        },
        legend: {
            orient: 'vertical',
            x: 'right',
            data:['Personal \nEngagement','Exploration','Analysis','Conclusion & \n Evaluation','Communication']
        },
        series: [
            {
                name:'IA criteria',
                type:'treemap',
                levels: this.getLevelOption(),
                // [
                //     {
                //         color: ['#0064a6', '#009b90', '#e6a23c', '#ad1644', '#909399', '#741669', '#de6328'],
                //     }
                // ],
                data:[
                    {
                        name:'Personal Engagement', 
                        value: 2,
                        children: [
                            {name: 'PE 1: Independent thinking, Initiative and creativity', value: 0.75},
                            {name: 'PE 2: Personal interest / curiosity', value: 0.5},
                            {name: 'PE3: Personal input', value: 0.75},
                        ] 
                    },
                    {
                        name:'Exploration',
                        value:6, 
                        children: [
                            {name: 'EX1: Research Question', value: 1.25},
                            {name: 'EX2: Background Information', value: 2},
                            {name: 'EX3: Methodology', value: 2},
                            {name: 'EX4: Safety & Environmental Issues', value: 0.75},
                        ]
                    },
                    {
                        name:'Analysis',
                        value:6,
                        children: [
                            {name: 'AN1: Raw data (quant, qual)', value: 1.5},
                            {name: 'AN2: Data Processing', value: 2},
                            {name: 'AN3: Uncertainties', value: 1},
                            {name: 'AN4: Data Interpretation', value: 1.5},
                        ]
                    },
                    {
                        name:'Conclusion & Evaluation',
                        value:6,
                        children: [
                            {name: 'EV1: Relevance to RQ, supported by data', value: 1.75},
                            {name: 'EV2: Relevance to scientific context', value: 1.5},
                            {name: 'EV3: Discussion of Investigation str/weakness', value: 1.5},
                            {name: 'EV4: Proposed Improvements, Extensions', value: 1.25}
                        ]
                    },
                    {
                        name:'Communication',
                        value:4,
                        children: [
                            {name: 'Comm 1: Structure of document', value: 0.75},
                            {name: 'Comm 2: Relevance and Conciseness', value: 0.75},
                            {name: 'Comm 3: Chemistry terminology (incl. unit, sig fig, decimal place usage)', value: 1.25},
                            {name: 'Comm 4: Graphs, tables, images', value: 1.25},
                        ]
                    }
                ]
            }
        ]
      }
    }
  }
}
</script>