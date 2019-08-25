<template>
    <div>
        <p>
            <!-- Info between this p tag -->
            
        </p>

        <center>
            <a target="_blank" :href="mapurl1">
                <img :src="mapurl1" />
            </a>

            <!-- Zone 2 - UNCOMMENT AS NEEDED

            <a target="_blank" :href="mapurl2">
                <img :src="mapurl2" />
            </a>
            
            -->

            <!-- Zone 3

            <a target="_blank" :href="mapurl2">
                <img :src="mapurl2" />
            </a>
            
            -->

        </center>
    </div>
</template>
<script>

export default {
    components: { },
    data () {
        return {
            mapurl1: 'https://live.staticflickr.com/65535/48558444661_792742e649_o_d.jpg', // <- MOSTLY EDIT ONLY THIS
            mapurl2: 'https://live.staticflickr.com/65535/48558444661_792742e649_o_d.jpg',
            mapurl3: 'https://live.staticflickr.com/65535/48558444661_792742e649_o_d.jpg',
        }
    }
}
</script>

<style scoped>

</style>