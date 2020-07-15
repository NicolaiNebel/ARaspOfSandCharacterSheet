<template>
    <b-card>
        <h5 class="mt-0"> {{ item.name }} </h5>
        <b>{{ item.spell.name }}</b>: {{ item.spell.description }}
        <br />
        Charges: {{ item.spell.charges }}
        <br />
        Slot: {{ item.slot }}
        <div class="row ml-0">
            <ThrowAway :item="item"/>

            <button class="btn btn-secondary" @click="increaseCharge">Increase charges</button>
            <button class="btn btn-secondary" @click="decreaseCharge">Decrease charges</button>
        </div>
    </b-card>
</template>

<script>
    import { mapMutations } from 'vuex'
    import ThrowAway from './ItemUtils/ThrowAway.vue'

    export default {
        components: {
            ThrowAway,
        },
        props: [ 'item', 'index' ],
        methods: {
            ...mapMutations(['incrCharge', 'decrCharge']),
            increaseCharge: function () { this.incrCharge(this.index) },
            decreaseCharge: function () { this.decrCharge(this.index) },
        },
    }
</script>

<style scoped>
</style>