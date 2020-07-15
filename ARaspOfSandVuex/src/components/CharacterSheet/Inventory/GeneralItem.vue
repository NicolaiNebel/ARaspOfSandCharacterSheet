<template>
    <b-card>
        <h5 class="mt-0"> {{ item.name }} </h5>
        <div class="form-group row">
            <label for="slugNote" class="col-3 col-form-label">Note:</label>
            <div class="col-9">
                <input type="text" class="form-control" :id="item.name + 'Note'" />
            </div>
        </div>
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