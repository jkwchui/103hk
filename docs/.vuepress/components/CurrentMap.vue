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
            mapurl1: 'https://live.staticflickr.com/65535/48824575273_37441dc6e3_k_d.jpg', // <- TST
            mapurl2: 'https://live.staticflickr.com/65535/48824969862_a4ffc862a2_k_d.jpg', // <- WTS
            mapurl3: 'https://live.staticflickr.com/65535/48824575273_f7fa2d05ea_k_d.jpg', // <-YMT
            mapurl4: 'https://live.staticflickr.com/65535/48768021896_9054de3fb7_k_d.jpg', // MTR
        }
    }
}
</script>

<style scoped>

</style>
