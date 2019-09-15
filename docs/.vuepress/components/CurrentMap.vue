<template>
    <div>
        <p>
            <!-- Info between this p tag -->
            
        </p>

        <center>


            <!-- Zone 3 -->

            <a target="_blank" :href="mapurl2">
                <img :src="mapurl2" />
            </a>

            <a target="_blank" :href="mapurl1">
                <img :src="mapurl1" />
            </a>
            
            

            <a target="_blank" :href="mapurl3">
                <img :src="mapurl3" />
            </a>
        </center>
    </div>
</template>
<script>

export default {
    components: { },
    data () {
        return {
            mapurl1: 'https://live.staticflickr.com/65535/48735026793_70716a1129_k_d.jpg', // <- CWB
            mapurl2: 'https://live.staticflickr.com/65535/48735565191_ea8c4b04fb_k_d.jpg', // <- Adm
            mapurl3: 'https://live.staticflickr.com/65535/48735027008_ffd8b55f1e_k_d.jpg', // MTR
        }
    }
}
</script>

<style scoped>

</style>
