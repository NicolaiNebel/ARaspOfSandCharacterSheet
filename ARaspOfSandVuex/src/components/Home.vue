<template>
    <div class="container">
        <div class="home">
            <RollNewCharacter />
        </div>
        <br />
        <div class="character-sheet">
            <CharacterSheet />
        </div>
    </div>
</template>

<script>
import RollNewCharacter from "./RollNewCharacter.vue"
import CharacterSheet from "./CharacterSheet.vue"
import { mapMutations } from 'vuex'

    export default {
        name: 'Home',

        components: {
            RollNewCharacter,
            CharacterSheet,
        },

        props: {
        },
        computed: {
        },
        methods: {
            ...mapMutations(['increment']),
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
