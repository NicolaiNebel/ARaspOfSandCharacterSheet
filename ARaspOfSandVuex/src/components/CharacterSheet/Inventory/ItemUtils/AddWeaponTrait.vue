<template>
    <div class="row ml-0">
        <div class="col-8">
            <select v-model="selectedTrait">
                <option key="default" disabled :value="undefined">Please select one</option>
                <option v-for="key in Object.keys(traits)" :value="traits[key]" :key="key">{{ key }}</option>
            </select>
        </div>
        <div class="col-4">
        <button class="btn btn-secondary" @click="addTrait">Add Trait</button>
        </div>
    </div>
</template>

<script>
    import * as lib from "../../../../lib/lib.js";

    export default {
        props: {
            weapon: Object,
        },
        data: function () {
            return {
                selectedTrait: undefined
            }
        },
        computed: {
            traits: () => lib.weaponTraits,
        },
        methods: {
            addTrait: function () {
                this.$set(this.weapon, 'trait', this.selectedTrait);
            },
        },
    }
</script>

<style scoped>
</style>