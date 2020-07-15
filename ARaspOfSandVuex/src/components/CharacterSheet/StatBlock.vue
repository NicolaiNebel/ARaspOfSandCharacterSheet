<template>
    <div class="row mx-1">
        <div class="col-4 col-md-2">
            <h5 class="text-primary" align="center">Str</h5>
            <div class="row">
                <button class="btn btn-secondary col-4" @click="decrStr">-</button>
                <div class="col-4" align="center">
                    <b>{{ character.stats.str }}</b>
                </div>
                <button class="btn btn-secondary col-4" @click="bumpStr">+</button>
            </div>
            <div class="text-center">
                ({{ strBonus }})
            </div>
        </div>
        
        <div class="col-4 col-md-2">
            <h5 class="text-primary" align="center">Dex</h5>
            <div class="row">
                <button class="btn btn-secondary col-4" @click="decrDex">-</button>
                <div class="col-4" align="center">
                    <b>{{ character.stats.dex }}</b>
                </div>
                <button class="btn btn-secondary col-4" @click="bumpDex">+</button>
            </div>
            <div class="text-center">
                ({{ dexBonus }})
            </div>
        </div>
        
        <div class="col-4 col-md-2">
            <h5 class="text-primary" align="center">Con</h5>
            <div class="row">
                <button class="btn btn-secondary col-4" @click="decrCon">-</button>
                <div class="col-4" align="center">
                    <b>{{ character.stats.con }}</b>
                </div>
                <button class="btn btn-secondary col-4" @click="bumpCon">+</button>
            </div>
            <div class="text-center">
                ({{ conBonus }})
            </div>
        </div>
        
        <div class="col-4 col-md-2">
            <h5 class="text-primary" align="center">Int</h5>
            <div class="row">
                <button class="btn btn-secondary col-4" @click="decrInt">-</button>
                <div class="col-4" align="center">
                    <b>{{ character.stats.int }}</b>
                </div>
                <button class="btn btn-secondary col-4" @click="bumpInt">+</button>
            </div>
            <div class="text-center">
                ({{ intBonus }})
            </div>
        </div>
        
        <div class="col-4 col-md-2">
            <h5 class="text-primary" align="center">Wis</h5>
            <div class="row">
                <button class="btn btn-secondary col-4" @click="decrWis">-</button>
                <div class="col-4" align="center">
                    <b>{{ character.stats.wis }}</b>
                </div>
                <button class="btn btn-secondary col-4" @click="bumpWis">+</button>
            </div>
            <div class="text-center">
                ({{ wisBonus }})
            </div>
        </div>
        
        <div class="col-4 col-md-2">
            <h5 class="text-primary" align="center">Cha</h5>
            <div class="row">
                <button class="btn btn-secondary col-4" @click="decrCha">-</button>
                <div class="col-4" align="center">
                    <b>{{ character.stats.cha }}</b>
                </div>
                <button class="btn btn-secondary col-4" @click="bumpCha">+</button>
            </div>
            <div class="text-center">
                ({{ chaBonus }})
            </div>
        </div>
        
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations } from 'vuex'

    export default {
        methods: {
            ...mapMutations(['setCharacter']),
            bumpStr: function () {
                this.setCharacter({
                    ...this.character,
                    stats: {
                        ...this.character.stats,
                        str: this.character.stats.str + 1,
                    }
                })
            },
            decrStr: function () {
                this.setCharacter({
                    ...this.character,
                    stats: {
                        ...this.character.stats,
                        str: this.character.stats.str - 1,
                    }
                })
            },

            bumpDex: function () {
                this.setCharacter({
                    ...this.character,
                    stats: {
                        ...this.character.stats,
                        dex: this.character.stats.dex + 1,
                    }
                })
            },
            decrDex: function () {
                this.setCharacter({
                    ...this.character,
                    stats: {
                        ...this.character.stats,
                        dex: this.character.stats.dex - 1,
                    }
                })
            },

            bumpCon: function () {
                this.setCharacter({
                    ...this.character,
                    stats: {
                        ...this.character.stats,
                        con: this.character.stats.con + 1,
                    }
                })
            },
            decrCon: function () {
                this.setCharacter({
                    ...this.character,
                    stats: {
                        ...this.character.stats,
                        con: this.character.stats.con - 1,
                    }
                })
            },

            bumpInt: function () {
                this.setCharacter({
                    ...this.character,
                    stats: {
                        ...this.character.stats,
                        int: this.character.stats.int + 1,
                    }
                })
            },
            decrInt: function () {
                this.setCharacter({
                    ...this.character,
                    stats: {
                        ...this.character.stats,
                        int: this.character.stats.int - 1,
                    }
                })
            },

            bumpWis: function () {
                this.setCharacter({
                    ...this.character,
                    stats: {
                        ...this.character.stats,
                        wis: this.character.stats.wis + 1,
                    }
                })
            },
            decrWis: function () {
                this.setCharacter({
                    ...this.character,
                    stats: {
                        ...this.character.stats,
                        wis: this.character.stats.wis - 1,
                    }
                })
            },

            bumpCha: function () {
                this.setCharacter({
                    ...this.character,
                    stats: {
                        ...this.character.stats,
                        cha: this.character.stats.cha + 1,
                    }
                })
            },
            decrCha: function () {
                this.setCharacter({
                    ...this.character,
                    stats: {
                        ...this.character.stats,
                        cha: this.character.stats.cha - 1,
                    }
                })
            },
        },
        computed: {
            ...mapState(['character']),
            ...mapGetters(['strBonus', 'dexBonus', 'conBonus', 'intBonus', 'wisBonus', 'chaBonus']),
        }
    }
</script>

<style scoped>
</style>