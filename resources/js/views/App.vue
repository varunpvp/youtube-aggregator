<template>
    <div class="pb-4" >
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Youtube Aggregator</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <form class="form-inline my-2 my-lg-0">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search channels" aria-label="Search channels">
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Go</button>
                </form>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>
<script>
export default {}
</script>

