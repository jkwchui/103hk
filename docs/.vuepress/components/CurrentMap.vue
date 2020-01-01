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
            
            <!-- Zone 3 -->
<!--
            <a target="_blank" :href="mapurl3">
                <img :src="mapurl3" />
            </a>
-->       
            
        </center>
    </div>
</template>
<script>

export default {
    components: { },
    data () {
        return {
            mapurl1: 'https://live.staticflickr.com/65535/49308379628_6d352f9410_o_d.png', // <- CWB/Wanchai
            mapurl2: 'https://live.staticflickr.com/65535/49308733212_9f543ecf52_o_d.png', // <- Admiralty
            mapurl3: 'https://live.staticflickr.com/65535/48999017173_cdba2ccb57_k_d.jpg', // <- Central
            
        }
    }
}
</script>

<style scoped>

</style>
