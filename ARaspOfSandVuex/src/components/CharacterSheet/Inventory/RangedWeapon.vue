<template>
    <b-card>
        <h5 class="mt-0"> {{ item.name }} </h5>
        Damage: {{item.damage.n}}d{{item.damage.d}}
        <br />
        Ammo: {{ item.ammo }}
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
            <br />
            <AddWeaponTrait v-if="item.trait === undefined" :weapon="item" />
            <RemoveWeaponTrait v-else                       :weapon="item" />
        </div>
    </b-card>
</template>

<script>
    import ThrowAway from './ItemUtils/ThrowAway.vue'
    import DecrQuality from './ItemUtils/DecrQuality.vue'
    import IncrQuality from './ItemUtils/IncrQuality.vue'
    import AddWeaponTrait from './ItemUtils/AddWeaponTrait.vue'
    import RemoveWeaponTrait from './ItemUtils/RemoveWeaponTrait.vue'

    export default {
        components: {
            ThrowAway,
            DecrQuality,
            IncrQuality,
            AddWeaponTrait,
            RemoveWeaponTrait,
        },
        props: {
            item: Object,
            index: Number,
        },
    }
</script>

<style scoped>
</style>