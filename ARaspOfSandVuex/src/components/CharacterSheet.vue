<template>
    <div>
        <h3> {{character.name }} {{ family.lastName }}</h3>
        <div class="row">
            <div class="col-6">
                <b>HP: {{ character.currentHp }} / {{ character.hp }}</b>
                <br />
                Healing Rate: 1d8 + {{ conBonus }}
                <br />
                Morale: {{ morale }}
            </div>
            <div class="col-6 text-right">

                <b>Level {{ level }}</b>
                <br />
                XP: {{ character.xp }}
                <br />
                <p> {{ character.profession.type }}, level {{ character.profession.level }} </p>
            </div>
        </div>


        <h4>Stats</h4>
        <StatBlock />

        <br />

        <div class="row">
            <div class="col-6">
                <h4>Inventory</h4>
            </div>
            <div class="col-6 text-right">
                <div v-if="encumbrance < carryingCapacity">
                    Encumbrance: {{ encumbrance }} / {{ carryingCapacity }}
                </div>
                <div class="text-warning" v-else-if="encumbrance === carryingCapacity">
                    Envumbrance: {{ encumbrance }} / {{ carryingCapacity }}
                </div>
                <div class="text-danger" v-else>
                    Encumbrance: {{ encumbrance }} / {{ carryingCapacity }}
                </div>
            </div>
        </div>
        <div class="row" id="inventory">
            <div class="col-md-6" v-for="(item,index) in character.inventory" :key="index">
                <GeneralItem v-if="item.type === 'generalItem'" :item="item" :index="index" />
                <MeleeWeapon v-else-if="item.type === 'meleeWeapon'" :item="item" :index="index" />
                <RangedWeapon v-else-if="item.type === 'rangedWeapon'" :item="item" :index="index" />
                <Shield v-else-if="item.type === 'shield'" :item="item" :index="index" />
                <Helmet v-else-if="item.type === 'helmet'" :item="item" :index="index" />
                <Armor v-else-if="item.type === 'armor'" :item="item" :index="index" />
                <SpellPearl v-else-if="item.type === 'spellPearl'" :item="item" :index="index" />
                <Slug v-else-if="item.type === 'slug'" :item="item" :index="index" />
                <div v-else> {{JSON.stringify(item)}} </div>
            </div>
        </div>
        <div class="row">
            <input type="number" class="col-8" v-model="xpToAdd"/>
            <button type="submit" class="btn btn-secondary col-4" @click="addXp"> Add XP</button>
        </div>
        <AddItem />
        <AddSpellPearl />
    </div>
</template>

<script>
    import { mapState, mapMutations, mapGetters } from 'vuex'
    import GeneralItem from "./CharacterSheet/Inventory/GeneralItem.vue"
    import MeleeWeapon from "./CharacterSheet/Inventory/MeleeWeapon.vue"
    import Armor from "./CharacterSheet/Inventory/Armor.vue"
    import Helmet from "./CharacterSheet/Inventory/Helmet.vue"
    import Shield from "./CharacterSheet/Inventory/Shield.vue"
    import RangedWeapon from "./CharacterSheet/Inventory/RangedWeapon.vue"
    import SpellPearl from "./CharacterSheet/Inventory/SpellPearl.vue"
    import Slug from "./CharacterSheet/Inventory/Slug.vue"

    import StatBlock from "./CharacterSheet/StatBlock.vue"
    import AddItem from "./CharacterSheet/AddItem.vue"
    import AddSpellPearl from "./CharacterSheet/AddSpellPearl.vue"

    export default {
        components: {
            GeneralItem,
            MeleeWeapon,
            RangedWeapon,
            Armor,
            Helmet,
            Shield,
            SpellPearl,
            Slug,
            StatBlock,
            AddItem,
            AddSpellPearl,
        },
        data: function () {
            return {
                xpToAdd: 100,
            }
        },
        methods: {
            ...mapMutations(['setCharacter']),
            addXp: function () {
                var int = parseInt(this.xpToAdd);

                if (!isNaN(int)) {
                    this.setCharacter({
                        ...this.character,
                        xp: this.character.xp + int,
                    })
                    this.xpToAdd = 0;
                }
            }
        },
        computed: {
            ...mapState(['character', 'family']),
            ...mapGetters(['encumbrance', 'carryingCapacity', 'level', 'morale'
                , 'strBonus', 'dexBonus', 'conBonus', 'intBonus', 'wisBonus', 'chaBonus',]),
        }
    }
</script>

<style scoped>
</style>