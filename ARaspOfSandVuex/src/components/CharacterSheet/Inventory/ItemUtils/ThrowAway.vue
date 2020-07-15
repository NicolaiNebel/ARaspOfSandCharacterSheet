<template>
    <button class="btn btn-secondary" @click="throwThisAway">Throw Away</button>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {

        methods: {
            ...mapMutations['itemThrowAway'],

            throwThisAway: function () {
                this.$store.commit('itemThrowAway', this.item);
            },
        },
        props: {
            item: Object
        }
    }
</script>

<style scoped>
</style>