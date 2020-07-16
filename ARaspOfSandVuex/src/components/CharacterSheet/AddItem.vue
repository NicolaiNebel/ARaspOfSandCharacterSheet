<template>
    <div class="row">
        <select class="col-8" id="addItem" name="addItem" v-model="selectedItem">
            <option key="default" disabled value="">Please select one</option>
            <optgroup :label="key" :key="index" v-for="(key, index) in Object.keys(selectOptions)">
                <option :value="value" :key="idx" v-for="(value, idx) in selectOptions[key]">{{ value.name }}</option>
            </optgroup>
        </select>
        <button class="col-4 btn btn-secondary" @click="addItem"> Add Item </button>
    </div>
</template>

<script>
    import { mapMutations, mapState } from 'vuex';
    import * as lib from "../../lib/lib.js";
    import $ from 'jquery';
    import 'selectize';

    export default {
        mounted: function () {
            this.$nextTick(function () {
                //$('#addItem').selectize({});
            })
        },

        data: function () {
            return {
                selectedItem: "",
            }
        },
        methods: {
            ...mapMutations(['setCharacter']),
            addItem: function () {
                if (this.selectedItem) {
                    const newInventory = this.character.inventory.concat([this.selectedItem]);
                    this.setCharacter({
                        ...this.character,
                        inventory: newInventory,
                    })
                }
            },
        },
        computed: {
            ...mapState(['character']),
            selectOptions: () => lib.allItems,
        }
    }
</script>

<style scoped>
</style>