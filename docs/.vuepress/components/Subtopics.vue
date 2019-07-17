<template>
    <div class="subtopics">
        <el-tooltip v-for="(item,key) in getSubTopicData" placement="top" :key="key">
            <div slot="content">
                "topicID:{{ item.topic }}/subtopicID:{{ item.ID }}/subsubtopicID:{{ item.subsubtopic }}
            </div>
            <el-button>{{ item.name }}</el-button>
        </el-tooltip>
    </div>
</template>

<script>
    import subtopics from '../public/data/subtopic'
    export default {
        name: "Subtopics",
        data() {
            return {
                subtopics,
            }
        },
        props: {
            subtopic: String,
        },
        computed:{
            getSubTopicData(){
                this.subtopicArr = this.subtopic.split(",");
                return this.subtopicArr.map(item =>{
                    return this.subtopics.find(item1 => {
                        return item == item1.ID
                    });
                });
            }
        }
    }
</script>