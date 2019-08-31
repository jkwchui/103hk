<template>
    <div>
        <p>
            <!-- Info between this p tag -->
            
        </p>

        <center>
            <a target="_blank" :href="mapurl2">
                <img :src="mapurl2" />
            </a>

            <!-- Zone 3 -->

            <a target="_blank" :href="mapurl3">
                <img :src="mapurl3" />
            </a>

            <!-- Zone 2 - UNCOMMENT AS NEEDED -->

            <a target="_blank" :href="mapurl1">
                <img :src="mapurl1" />
            </a>
            
        </center>
    </div>
</template>
<script>

export default {
    components: { },
    data () {
        return {
            mapurl1: 'https://live.staticflickr.com/65535/48651241488_e2d2cd5cac_k_d.jpg', // <- MOSTLY EDIT ONLY  Sai wan
            mapurl2: 'https://live.staticflickr.com/65535/48651829437_148be080e9_k_d.jpg', //adminralty
            mapurl3: 'https://live.staticflickr.com/65535/48651485078_cc82ab81f9_k_d.jpg', // CWB
        }
    }
}
</script>

<style scoped>

</style>
