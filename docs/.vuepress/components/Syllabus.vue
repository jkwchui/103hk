<template>
    <div class="button-list">
        <subTopicComponent
            :subtopic="subtopic"
        ></subTopicComponent>
    </div>
</template>
<script>
    import topics from '../public/data/topic'
    import subsubtopics from '../public/data/subsubtopic'
    import subTopicComponent from '../components/Subtopics'

    export default {
        components: {
            subTopicComponent
        },
        data() {
            return {
                topics,
                subsubtopics,
            }
        },
        props: {
            topic: String,
            subtopic: String,
            subsubtopic: String,
            lang: 'en',
            showParent: true,
            showChildren: true
        },
    }
</script>