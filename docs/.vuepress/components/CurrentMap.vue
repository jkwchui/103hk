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

            <a target="_blank" :href="mapurl3">
                <img :src="mapurl3" />
            </a>
            
             <!-- Zone 4 -->

            <a target="_blank" :href="mapurl4">
                <img :src="mapurl4" />
            </a>
            
        </center>
    </div>
</template>
<script>

export default {
    components: { },
    data () {
        return {
            mapurl1: 'https://live.staticflickr.com/65535/48999017173_596ddd717b_k_d.jpg', // <- HK Island
            mapurl2: 'https://live.staticflickr.com/65535/48927859477_e5f3b5daa1_k_d.jpg', // <- TST
            mapurl3: 'https://live.staticflickr.com/65535/48927859477_20fc3d32e3_k_d.jpg', // <- SSP
            mapurl4: 'https://live.staticflickr.com/65535/48927859477_e4ec29de21_b_d.jpg', // <- MTR
        }
    }
}
</script>

<style scoped>

</style>
