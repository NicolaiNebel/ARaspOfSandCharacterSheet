<template>
    <button class="btn btn-secondary" @click="decreaseQuality">Decrease Quality</button>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        props: ['index'],
        methods: {
            ...mapMutations(['decrQuality']),
            decreaseQuality: function () {
                this.decrQuality(this.index);
            }
        }
    }
</script>

<style scoped>
</style>