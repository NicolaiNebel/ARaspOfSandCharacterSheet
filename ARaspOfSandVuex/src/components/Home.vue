<template>
    <div class="container">
        <Splash v-if="state === 'splash'" @next="toMain"/>
        <div v-else-if="state === 'main'">
            <div class="home">
                <RollNewCharacter />
            </div>
            <br />
            <div class="character-sheet">
                <CharacterSheet />
            </div>
        </div>
        <div v-else>
            Error
        </div>
    </div>

</template>

<script>
    import RollNewCharacter from "./RollNewCharacter.vue"
    import CharacterSheet from "./CharacterSheet.vue"
    import Splash from "./Splash.vue"

    export default {
        name: 'Home',

        components: {
            RollNewCharacter,
            CharacterSheet,
            Splash,
        },
        props: {
        },
        data: function () {
            return {
                state: "splash",
            }
        },
        methods: {
            toMain: function () { this.state = 'main'; },
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
