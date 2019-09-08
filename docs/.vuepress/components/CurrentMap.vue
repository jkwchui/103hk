<template>
    <div>
        <p>
            <!-- Info between this p tag -->
            
        </p>

        <center>


            <!-- Zone 3 -->

            <!-- <a target="_blank" :href="mapurl3">
                <img :src="mapurl3" />
            </a> -->

            <!-- Zone 2 - UNCOMMENT AS NEEDED -->

            <a target="_blank" :href="mapurl1">
                <img :src="mapurl1" />
            </a>
            
            <a target="_blank" :href="mapurl2">
                <img :src="mapurl2" />
            </a>
        </center>
    </div>
</template>
<script>

export default {
    components: { },
    data () {
        return {
            mapurl1: 'https://live.staticflickr.com/65535/48697488216_297cfd29e6_k_d.jpg', // <- MOSTLY EDIT ONLY  airport
            mapurl2: 'https://live.staticflickr.com/65535/48698238427_36a6b7839f_k_d.jpg', // MTR
        }
    }
}
</script>

<style scoped>

</style>
