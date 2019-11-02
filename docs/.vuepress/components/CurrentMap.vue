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
            mapurl1: 'https://live.staticflickr.com/65535/48999017173_b9a5d865ef_k_d.jpg', // <- CWB/Wanchai
            mapurl2: 'https://live.staticflickr.com/65535/48999017173_2e556128a6_k_d.jpg ', // <- Admiralty
         
            
        }
    }
}
</script>

<style scoped>

</style>
