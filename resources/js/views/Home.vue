<template>
    <div class="container" >
        <h2 class="mb-4" >Top Channels</h2>
        <div v-if="! loading" >
            <channel v-for="channel in channels" :key="channel.id" :channel="channel"></channel>
            <button style="display: block;" class="btn btn-primary mt-4 block mx-auto">View more</button>
        </div>
        <div v-else style="display: flex; justify-content: center;"  >
            <span>Loading...</span>
        </div>
    </div>
</template>
<script>
import Channel from './../components/Channel'
export default {
    components: { Channel },
    created() {
        this.loadChannels()
    },
    data() {
        return {
            channels: [],
            loading: true,
            page: 1,
        }
    },
    methods: {
        loadChannels() {
            axios.get('/api/channels?page=' + this.page++)
                .then((response) => {
                    this.channels = response.data.data
                    this.loading = false
                })
        }
    }
}
</script>

