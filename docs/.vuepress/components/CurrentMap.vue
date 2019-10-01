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
            mapurl1: 'https://live.staticflickr.com/65535/48824575273_7183617594_k_d.jpg', // <- SSP
            mapurl2: 'https://live.staticflickr.com/65535/48824969862_c2757d117a_k_d.jpg', // <- WTS
            mapur13: 'https://live.staticflickr.com/65535/48824575273_9704dfdd75_k_d.jpg', // <- YMT
            mapurl4: 'https://live.staticflickr.com/65535/48768021896_12684aff05_k_d.jpg', // MTR
        }
    }
}
</script>

<style scoped>

</style>
