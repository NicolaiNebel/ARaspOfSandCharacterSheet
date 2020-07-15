<template>
    <b-card>
        <h5 class="mt-0"> {{ item.name }} </h5>
        Damage: {{item.damage.n}}d{{item.damage.d}} - {{ item.damage.type}}
        <br />
        Hand: {{ item.hand }}
        <br />
        Quality: {{ item.quality }}
        <br />
        Slot: {{ item.slot }}
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
        props: ['item','index'],
    }
</script>

<style scoped>
</style>