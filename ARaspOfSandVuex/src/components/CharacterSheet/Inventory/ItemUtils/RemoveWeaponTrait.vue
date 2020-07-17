<template>
    <button @click="removeTrait">Remove Trait</button>
</template>

<script>
    export default {
        props: {
            weapon: Object,
        },
        methods: {
            removeTrait: function () {
                this.$delete(this.weapon, 'trait');
            }
        }
    }

</script>

<style scoped>
</style>