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

            <!-- Zone 2 -->

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
            mapurl1: 'https://live.staticflickr.com/65535/48927859477_464dd56664_k_d.jpg', // <- kowloon MK
            mapurl2: 'https://live.staticflickr.com/65535/48927859477_b14511e4b1_k_d.jpg', // <- TST
        }
    }
}
</script>

<style scoped>

</style>
