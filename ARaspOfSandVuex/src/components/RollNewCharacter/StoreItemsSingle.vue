<template>
    <div class="row">
        <select class="col-8" name="storeItems" v-model="storeItems">
            <option v-for="item in character.inventory" :value="[item]">{{ item.name }}</option>
        </select>
        <button class="col-4 btn btn-primary" @click="heirloom_stash">Confirm</button>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    //import $ from 'jquery';
    //import 'selectize';

    export default {
        //mounted: function () {
        //    this.$nextTick(function () {
        //        $('#storeItems').selectize({});
        //    });
        //},

        data: function () {
            return {
                storeItems: [],
            }
        },

        computed: {
            ...mapState(['character']),
        },

        methods: {
            heirloom_stash: function () {
                this.$emit('next', this.storeItems);
            },
        }
    }
</script>

<style scoped>
</style>