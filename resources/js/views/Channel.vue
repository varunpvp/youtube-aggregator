<template>
    <div>
        <div v-if="! loading" class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4" v-text="channel.name" ></h1>
                <p class="lead">{{ channel.views }} views • {{ channel.videos }} videos • {{ channel.subscribers }} subscribers</p>
                <button class="btn btn-primary" @click="$router.back()" >Go back</button>
            </div>
        </div>
        <div v-else style="display: flex; justify-content: center;"  >
            <span>Loading...</span>
        </div>
    </div>
</template>
<script>
export default {
    props: [ 'id' ],
    created() {
        axios.get(`/api/channels/${this.id}`)
            .then((response) => {
                this.channel = response.data
                this.loading = false
            })
    },
    data() {
        return {
            loading: true,
            channel: null,
        }
    },
}
</script>

