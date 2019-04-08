<template>
    <div class="card">
        <div class="card-body">
            <h5 v-text="channel.name" class="card-title"></h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ channel.views }} views • {{ channel.videos }} videos</h6>
            <router-link :to="{ name: 'channel', params: { id: this.channel.id } }" class="card-link" >Show details</router-link>
        </div>
    </div>
</template>
<script>
    export default {
        props: [ 'channel' ],
    }
</script>
<style>

</style>
