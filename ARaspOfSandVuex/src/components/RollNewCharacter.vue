<template>
    <div>
        <h3> Roll New Character </h3>

        <div v-if="state === 'start'">
            <button class="btn btn-primary" @click="iDied">I died</button>
            <button class="btn btn-primary" @click="iRetired">I retired</button>
        </div>

        <div v-else-if="state === 'heirloom_stash'">
            <p>Pick the items you want to keep in your Heirloom Stash:</p>

            <StoreItemsSingle   v-if="died" @next="heirloom_stash" />
            <StoreItemsMultiple v-else      @next="heirloom_stash" />
        </div>

        <div v-else-if="state === 'heirloom_item'">
            <p>Pick the item you want to carry over as an Heirloom:</p>
            <select class="col-8" name="heirloomItem" v-model="heirloomItem">
                <option key="default" disabled value=undefined>Please select one</option>
                <option v-for="item in newHeirloomStash" :value="item">{{ item.name }}</option>
            </select>
            <button class="btn btn-primary" @click="heirloom_item">Confirm</button>
        </div>
        <div v-else-if="state === 'profession'">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="checkProfession" v-model="keepProfession" />
                <label class="form-check-label" for="checkProfession">Do you want to keep your profession?</label>
            </div>
            <button class="btn btn-primary" @click="profession">Continue</button>
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

    import { mapState, mapMutations } from 'vuex'
    import * as lib from "../lib/lib.js"

    export default {
        name: "RollNewCharacter",

        components: {
            StoreItemsSingle,
            StoreItemsMultiple,
        },

        data: function () {
            return {
                died: false,
                keepProfession: true,
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
                this.name = "";
                this.storeItems = [];
                this.heirloomItem = undefined;

                this.state = "start";
            },

            // state roll_character
            rollNewCharacter: function () {
                if (this.validated) {
                    this.setCharacter(lib.rollNewCharacter( this.name
                                                          , this.character
                                                          , this.died
                                                          , this.keepProfession
                                                          , this.heirloomItem));

                    // These *have* to follow each other like this
                    this.pushToHeirloomStash(this.storeItems);
                    this.removeFromHeirloomStash(this.heirloomItem);

                    this.reset();
                }
            },

            // State start
            iDied: function () {
                this.died = true;
                this.state = "heirloom_stash";
            },
            iRetired: function () {
                this.died = false;
                this.state = "heirloom_stash";
            },

            //state heirloom_stash
            heirloom_stash: function (storeItems) {
                console.log(storeItems);
                this.storeItems = storeItems;
                this.state = "heirloom_item";
            },

            //state heirloom_item
            heirloom_item: function () {
                this.state = "profession"
            },

            //state profession
            profession: function () {
                this.state = "roll_character"
            }
        },

        computed: {
            ...mapState(['character', 'heirloomStash']),
            validated: function () {
                return this.name.length > 0;
            },

            newHeirloomStash: function () {
                return this.storeItems.concat(this.heirloomStash);
            },
        },
    }
</script>

<style scoped>
</style>