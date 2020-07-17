<template>
    <div>
        <p>Pick the item you want to carry over as an Heirloom:</p>
        <select class="col-8" name="heirloomItem" v-model="heirloomItem">
            <option key="default" disabled :value="[]">Please select one</option>
            <option v-for="item in newHeirloomStash" :value="item">{{ item.name }}</option>
        </select>
        <button class="btn btn-primary" @click="submit">Confirm</button>
    </div>
</template>

<script>
    export default {
        props: {
            newHeirloomStash: Array,
        },
        data: function () {
            return {
                heirloomItem: [],
            }
        },
        methods: {
            submit: function () {
                this.$emit('next', [this.heirloomItem]);
            }
        }
    }
</script>

<style scoped>
</style>