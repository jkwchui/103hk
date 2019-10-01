<template>
    <div>
        <p>
            <!-- Info between this p tag -->
            
        </p>

        <center>


            <!-- Zone 3 -->

            <a target="_blank" :href="mapurl1">
                <img :src="mapurl1" />
            </a>

            <a target="_blank" :href="mapurl2">
                <img :src="mapurl2" />
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
            mapurl1: 'https://live.staticflickr.com/65535/48824575273_bd71955f2e_k_d.jpg', // <- SSP
            mapurl2: 'https://live.staticflickr.com/65535/48824969862_eca03bdb54_k_d.jpg', // <- WTS
            mapurl3: 'https://live.staticflickr.com/65535/48768021896_2ca2cd2228_k_d.jpg', // MTR
        }
    }
}
</script>

<style scoped>

</style>
