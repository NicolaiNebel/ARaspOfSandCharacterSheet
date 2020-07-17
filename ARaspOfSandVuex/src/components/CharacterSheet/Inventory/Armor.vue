<template>
    <b-card>
        <h5 class="mt-0"> {{ item.name }} </h5>
        <p> Defense: {{ item.defense }} </p>
        <p> Quality: {{ item.quality }} </p>
        <p> Slot: {{ item.slot }} </p>
        <p v-if="item.note !== undefined"> Note: {{ item.note }} </p>
        
        <div class="row ml-0">
            <ThrowAway :item="item"/>
            <DecrQuality :index="index"/>
            <IncrQuality :index="index"/>
        </div>
    </b-card>
</template>

<script>
    import ThrowAway from './ItemUtils/ThrowAway.vue'
    import DecrQuality from './ItemUtils/DecrQuality.vue'
    import IncrQuality from './ItemUtils/IncrQuality.vue'

    export default {
        components: {
            ThrowAway,
            DecrQuality,
            IncrQuality,
        },
        props: ['item', 'index'],
    }
</script>

<style scoped>
</style>