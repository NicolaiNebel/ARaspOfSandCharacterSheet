<template>
    <div>
        <h4>Appearance</h4>
        <div class="row">
            <div class="col-4">
                Physique: <b>{{ character.physique }}</b>
            </div>
            <div class="col-4">
                Hair: <b>{{ character.hair }}</b>
            </div>
            <div class="col-4">
                Clothing: <b>{{ character.clothing }}</b>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                Face: <b>{{ character.face }}</b>
            </div>
            <div class="col-4">
                Height: <b>{{ character.height }}</b>
            </div>
            <div class="col-4">
                Speech: <b>{{ character.speech }}</b>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: {
            ...mapState(['character']),
        }
    }
</script>

<style scoped>
</style>