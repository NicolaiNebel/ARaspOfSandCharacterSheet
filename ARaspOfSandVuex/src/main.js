import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { isEqual } from 'lodash-es'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = true;

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        character: {
            id: 0,
            name: "Default",
            stats: {
                str: 10,
                dex: 10,
                con: 10,
                int: 10,
                wis: 10,
                cha: 10,
            },
            xp: 0,
            hp: 0,
            currentHp: 0,

            profession: { type: 'N/A', level: 1 },

            inventory: [], // [ {type: String, encumbrance: Integer, name: String, } ]
            //equippedWeapons: { name: "No weapon", quality: 3, ,
            //equippedHelmet: undefined,
            //equippedArmor:  undefined,
        },
        family: { initialized: false, lastName: "", ancestorList: [] },
        heirloomStash: [],
        mutations: [],
        id: 1,

        professionLevels: {
            "Academic": 1,
            "Cook": 1,
            "Entertainer": 1,
            "Fisher": 1,
            "Magician": 1,
            "Merchant": 1,
            "Priest": 1,
            "Sailor": 1,
            "Slug Rancher": 1,
            "Smith": 1,
            "Smuggler": 1,
            "Warrior": 1,
        }
    },
    mutations: {
        setCharacter: (state, newCharacter) => state.character = newCharacter,

        initializeFamily: (state, name) => {
            state.family.initialized = true;
            state.family.lastName = name;
            state.family.ancestorList = [];
        },

        itemThrowAway: (state, item) => {
            var inv = state.character.inventory;

            //Find index of item to remove
            var idx;
            inv.forEach((element, index) => {
                if (isEqual(element, item)) {
                    idx = index;
                }
            });
            if (idx !== undefined) {
                state.character.inventory = inv.slice(0, idx).concat(inv.slice(idx + 1, inv.length));
            }
        },

        incrCharge: (state, index) => {
            var spellPearl = state.character.inventory[index];
            if (spellPearl.type !== 'spellPearl') { return; }
            spellPearl.spell.charges += 1;
        },

        decrCharge: (state, index) => {
            var spellPearl = state.character.inventory[index];
            if (spellPearl.type !== 'spellPearl') { return; }
            spellPearl.spell.charges -= 1;
        },

        incrQuality: (state, index) => {
            var item = state.character.inventory[index];
            if (['meleeWeapon', 'rangedWeapon', 'armor', 'helmet', 'shield'].includes(item.type)) {
                item.quality += 1;
            }
        },
        decrQuality: (state, index) => {
            var item = state.character.inventory[index];
            if (['meleeWeapon', 'rangedWeapon', 'armor', 'helmet', 'shield'].includes(item.type)) {
                item.quality -= 1;
            }
        },

        pushToHeirloomStash: (state, list) => {
            state.heirloomStash = list.concat(state.heirloomStash);
        },

        removeFromHeirloomStash: (state, item) => {
            var heirloomStash = state.heirloomStash;
            var idx;
            heirloomStash.forEach((element, index) => {
                if (isEqual(element, item)) {
                    idx = index;
                }
            });
            if (idx !== undefined) {
                state.heirloomStash = heirloomStash.slice(0, idx).concat(heirloomStash.slice(idx + 1, heirloomStash.length));
            }
        },

        updateProfessionLevel: (state, prof) => state.professionLevels[prof.type] = prof.level,
    },
    getters: {
        strBonus: function (state) { return state.character.stats.str - 10; },
        dexBonus: function (state) { return state.character.stats.dex - 10; },
        conBonus: function (state) { return state.character.stats.con - 10; },
        intBonus: function (state) { return state.character.stats.int - 10; },
        wisBonus: function (state) { return state.character.stats.wis - 10; },
        chaBonus: function (state) { return state.character.stats.cha - 10; },

        level: function (state) { return Math.floor(state.character.xp / 1000) + 1 },

        morale: function (_state, getters) { return getters.conBonus + getters.wisBonus + 5; },

        encumbrance: function (state) { console.log(state.character.inventory); return state.character.inventory.map(x => x.slot).reduce((a, b) => a + b, 0); },
        carryingCapacity: function (state) {
            var ret = state.character.stats.str;
            if (state.character.profession.type === 'Merchant' && state.character.profession.level >= 3) {
                ret += state.character.profession.level;
            }
            return ret;
        },

        archmage: (state) => isEqual(state.character.profession, { type: 'Magician', level: 5 }),
    },
})

new Vue({
    render: h => h(App),
    store: store,
}).$mount('#app');
