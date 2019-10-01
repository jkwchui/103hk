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
            mapurl1: 'https://live.staticflickr.com/65535/48824575273_d850d7a1c4_k_d.jpg', // <- TST
            mapurl2: 'https://live.staticflickr.com/65535/48824969862_dd39323a61_k_d.jpg', // <- WTS
            mapur13: 'https://live.staticflickr.com/65535/48824575273_9704dfdd75_k_d.jpg', // <- MK YMT
            mapurl4: 'https://live.staticflickr.com/65535/48768021896_1b02c42361_k_d.jpg', // MTR
        }
    }
}
</script>

<style scoped>

</style>
