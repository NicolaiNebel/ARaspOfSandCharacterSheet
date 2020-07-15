<template>
    <div>
        <input type="text" v-model="characterName" placeholder="First Name" />
        <input type="text" v-model="familyName" placeholder="Last Name" />
        <button class="btn btn-primary" @click="createFamily">Create New Family!</button>
    </div>
</template>

<script>
    import { mapMutations, mapState } from 'vuex'
    import * as lib from "../lib/lib.js"

    export default {
        data: function () {
            return {
                characterName: "",
                familyName: "",
            }
        },
        computed: {
            ...mapState(['character']),
            validatedSplash: function () {
                return (this.characterName.length > 0) && (this.familyName.length > 0)
            },
        },
        methods: {
            ...mapMutations(['initializeFamily', 'setCharacter']),

            createFamily: function () {
                if (this.validatedSplash) {
                    this.initializeFamily(this.familyName);
                    this.setCharacter(lib.rollNewCharacter(
                        this.characterName,
                        this.character,
                        false,
                        false,
                        undefined,
                    ));

                    this.$emit('next');
                }
            }
        }
    }
</script>

<style scoped>
</style>