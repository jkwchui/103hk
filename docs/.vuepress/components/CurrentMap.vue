<template>
    <div>
        <p>
            <!-- Info between this p tag -->
            
        </p>

        <center>


            <!-- Zone 1 -->

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
            mapurl1: 'https://live.staticflickr.com/65535/48927859477_59579a60ad_k_d.jpg', // <- kowloon
            mapurl2: 'https://live.staticflickr.com/65535/48768021896_12684aff05_k_d.jpg', // MTR
        }
    }
}
</script>

<style scoped>

</style>
