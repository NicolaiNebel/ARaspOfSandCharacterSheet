<template>
    <div>
        <h3> Roll New Character </h3>

        <div v-if="state === 'start'">
            <button class="btn btn-primary" @click="iDied">I died</button>
            <button class="btn btn-primary" @click="iRetired">I retired</button>
        </div>

        <div v-else-if="state === 'profession'">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="checkProfession" v-model="keepProfession" />
                <label class="form-check-label" for="checkProfession">Do you want to keep your profession?</label>
            </div>
            <button class="btn btn-primary" @click="profession">Continue</button>
        </div>

        <div v-else-if="state === 'heirloom_stash'">
            <p>Pick the items you want to keep in your Heirloom Stash:</p>

            <StoreItemsSingle   v-if="died" @next="heirloom_stash" />
            <StoreItemsMultiple v-else      @next="heirloom_stash" />
        </div>

        <div v-else-if="state === 'heirloom_item'">
            <SelectTwoHeirlooms v-if="canTakeTwoHeirlooms" :newHeirloomStash="newHeirloomStash" @next="heirloom_item" />
            <SelectOneHeirloom  v-else                     :newHeirloomStash="newHeirloomStash" @next="heirloom_item" />
        </div>

        <div v-else-if="state === 'roll_character'">
            Name: <input type="text" class="form-control" id="textName" v-model="name"/>
            <button class="btn btn-primary" @click="rollNewCharacter">Roll New Character!</button>
        </div>
        <div v-else>
            <p> Unknown state </p> 
            <button class="btn btn-primary" @click="reset"> Go back to start </button>
        </div>
    </div>
</template>

<script>
    import StoreItemsSingle from './RollNewCharacter/StoreItemsSingle.vue'
    import StoreItemsMultiple from './RollNewCharacter/StoreItemsMultiple.vue'
    import SelectOneHeirloom from './RollNewCharacter/SelectOneHeirloom.vue'
    import SelectTwoHeirlooms from './RollNewCharacter/SelectTwoHeirlooms.vue'

    import { mapState, mapMutations } from 'vuex'
    import * as lib from "../lib/lib.js"

    export default {
        name: "RollNewCharacter",

        components: {
            StoreItemsSingle,
            StoreItemsMultiple,
            SelectOneHeirloom,
            SelectTwoHeirlooms
        },

        data: function () {
            return {
                died: false,
                keepProfession: true,
                newProfession: undefined,
                name: "",
                state: "start",
                storeItems: [],
                heirloomItem: undefined,
            }
        },

        methods: {
            ...mapMutations(['setCharacter', 'pushToHeirloomStash', 'removeFromHeirloomStash']),

            reset: function () {
                this.died = false;
                this.keepProfession = true;
                this.newProfession = undefined;
                this.name = "";
                this.storeItems = [];
                this.heirloomItems = [];

                this.state = "start";
            },

            // state roll_character
            rollNewCharacter: function () {
                if (this.validated) {
                    this.setCharacter(lib.rollNewCharacter( this.name
                                                          , this.character
                                                          , this.died
                                                          , this.newProfession
                                                          , this.heirloomItems));

                    // These *have* to follow each other like this
                    this.pushToHeirloomStash(this.storeItems);

                    this.heirloomItems.forEach((item) => { this.removeFromHeirloomStash(item) });

                    this.updateProfessionLevel(newProfession);

                    this.reset();
                }
            },

            // State start
            iDied: function () {
                this.died = true;
                this.state = "profession";
            },
            iRetired: function () {
                this.died = false;
                this.state = "profession";
            },

            //state profession
            profession: function () {
                this.newProfession = lib.newProfession(this.character.profession, this.keepProfession);
                this.state = "heirloom_stash"
            },

            //state heirloom_stash
            heirloom_stash: function (storeItems) {
                this.storeItems = storeItems;
                this.state = "heirloom_item";
            },

            //state heirloom_item
            heirloom_item: function (heirloomItems) {
                this.heirloomItems = heirloomItems;
                this.state = "roll_character"
            },

        },

        computed: {
            ...mapState(['character', 'heirloomStash']),
            validated: function () {
                return this.name.length > 0;
            },

            newHeirloomStash: function () {
                return this.storeItems.concat(this.heirloomStash);
            },

            canTakeTwoHeirlooms: function () {
                return this.newProfession.type === 'Merchant' && this.newProfession.level >= 4;
            }
        },
    }
</script>

<style scoped>
</style>