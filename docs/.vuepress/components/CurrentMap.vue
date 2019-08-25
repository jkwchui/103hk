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
            mapurl1: 'https://live.staticflickr.com/65535/48616049297_c0b7be90ad_k_d.jpg', // <- MOSTLY EDIT ONLY THIS
            mapurl2: '',
            mapurl3: '',
        }
    }
}
</script>

<style scoped>

</style>
