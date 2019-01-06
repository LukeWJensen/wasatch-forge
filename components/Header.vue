<template>
    <header class="main-header container copperplate">
        <div class="header-logo">
            <nuxt-link to="/">Wasatch <span>Forge</span></nuxt-link>
        </div>
        <Nav/>
    </header>
</template>

<script>
    import Nav from '~/components/Nav'

    export default {
        name: 'Header',
        components: { Nav },
        data () {
            return {}
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/the-goods';

    .main-header {
        display         : flex;
        height          : $header-height;
        justify-content : space-between;
        padding-top     : 2.4rem;
        position        : relative;
        z-index         : 1;

        a {
            color : $color-text-light;

            &:hover {
                color           : $color-molten;
                text-decoration : none;
            }
        }
    }

    .header-logo {
        font-size   : 3rem;
        font-weight : 300;
        margin-top  : 0.6rem;

        span {
            font-weight : 900;
        }
    }
</style>
