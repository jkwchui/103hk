<template>
    <div>
        <p>
            <!-- Info between this p tag -->
            
        </p>

        <center>


            <!-- Zone 3 -->

            <!-- <a target="_blank" :href="mapurl2">
                <img :src="mapurl2" />
            </a> -->

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
            mapurl1: 'https://live.staticflickr.com/65535/48768013196_a1f22113af_k_d.jpg', // <- Tuen Mun
            mapurl2: 'https://live.staticflickr.com/65535/48735565191_5c337d9aa8_k_d.jpg', // <- Adm
            mapurl3: 'https://live.staticflickr.com/65535/48768021896_c4f215839a_k_d.jpg', // MTR
        }
    }
}
</script>

<style scoped>

</style>
