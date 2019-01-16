<template>
    <div id="app">
        <div class="page-container">
            <Header/>
            <div class="main-content">
                <nuxt/>
            </div>
            <Footer/>
        </div>
    </div>
</template>

<script>
    import Header from '~/components/Header'
    import Footer from '~/components/Footer'
    export default {
        components: { Header, Footer }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/the-goods';
    .page-container {
        min-height: 100vh;
    }

    .main-content {
        min-height: calc(100vh - #{$header-height} - #{$footer-height});
    }
</style>
