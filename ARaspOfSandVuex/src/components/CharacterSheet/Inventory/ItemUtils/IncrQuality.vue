<template>
    <button class="btn btn-secondary" @click="increaseQuality">Increase Quality</button>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        props: ['index'],
        methods: {
            ...mapMutations(['incrQuality']),
            increaseQuality: function () {
                this.incrQuality(this.index);
            }
        }
    }
</script>

<style scoped>
</style>