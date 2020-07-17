<template>
    <div>
        <p>Pick up to two items you want to carry over as Heirlooms:</p>
        <select multiple class="col-8" name="heirloomItem" v-model="heirloomItems">
            <option key="default" disabled :value="[]">Please select up to two</option>
            <option v-for="item in newHeirloomStash" :value="item">{{ item.name }}</option>
        </select>
        <button :disabled="notValidated" class="btn btn-primary" @click="submit">Confirm</button>
    </div>
</template>

<script>
    export default {
        props: {
            newHeirloomStash: Array,
        },
        data: function () {
            return {
                heirloomItems: [],
            }
        },
        methods: {
            submit: function () {
                this.$emit('next', this.heirloomItems);
            }
        },
        computed: {
            notValidated: function () {
                return this.heirloomItems.length > 2;
            }
        }
    }
</script>

<style scoped>
</style>