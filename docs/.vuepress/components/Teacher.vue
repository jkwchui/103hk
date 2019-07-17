<template>
    <div v-if="this.$teacher === true" class="container">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
    </div>
</template>
<script>
    export default {

    }
</script>

<style scoped>

</style>