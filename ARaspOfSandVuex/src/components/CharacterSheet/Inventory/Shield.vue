﻿<template>
    <b-card>
        <h5 class="mt-0"> {{ item.name }} </h5>
        Defense: {{ item.defense }}
        <br />
        Hand: {{ item.hand }}
        <br />
        Quality: {{ item.quality }}
        <br />
        Slot: {{ item.slot }}
        <div class="row ml-0">
            <ThrowAway :item="item"/>
        </div>
    </b-card>
</template>

<script>
    import ThrowAway from './ItemUtils/ThrowAway.vue'

    export default {
        components: {
            ThrowAway,
        },
        props: {
            item: Object,
        },
    }
</script>

<style scoped>
</style>