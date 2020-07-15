<template>
    <div class="row">
        <select class="col-8" name="addSpellPearl" v-model="selectedIndex">
            <option disabled value="">Please select one</option>
            <option :value="index" v-for="(value, index) in selectOptions">{{ value.spell.name }}</option>
        </select>
        <button class="col-4 btn btn-secondary" @click="addSpellPearl"> Add Spellpearl </button>
    </div>
</template>

<script>
    import { mapMutations, mapState, mapGetters } from 'vuex';
    import * as lib from "../../lib/lib.js"

    export default {
        data: function () {
            return {
                selectedIndex: "",
            }
        },
        methods: {
            ...mapMutations(['setCharacter']),
            addSpellPearl: function () {
                if (this.selectedIndex !== "") {
                    const newInventory = this.character.inventory.concat([lib.spellpearl(this.level, this.archmage, this.selectedIndex)]);
                    this.setCharacter({
                        ...this.character,
                        inventory: newInventory,
                    })
                }
            },
        },
        computed: {
            ...mapState(['character']),
            ...mapGetters(['level', 'archmage']),
            selectOptions: function () { return lib.spellPearlTable(this.level) },
        }
    }
</script>

<style scoped>
</style>
