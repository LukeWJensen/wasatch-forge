<template>
    <li :class="{'main-nav-subnav-item--active': isActive}" class="main-nav-subnav-item open-sans">
        <nuxt-link :to="to" class="main-nav-subnav-link">{{ text }}</nuxt-link>
    </li>
</template>

<script>
    export default {
        name: 'SubNavItem',
        props: {
            text: String,
            to: String
        },
        data () {
            return {}
        },
        computed: {
            slug () {
                const slug = this.to.split('/')
                return slug.length >= 1 ? slug[1] : ''
            },
            isActive () {
                return this.$route.name === this.slug
            }
        }
    }
</script>

<style lang="scss">
    @import "../../assets/scss/the-goods";

    .main-nav-subnav-item {
        display        : block;
        white-space    : nowrap;
        font-size      : 1.6rem;
        text-transform : capitalize;

        &--active {
            cursor         : auto;
            opacity        : 0.4 !important;
            pointer-events : none;
        }

        .main-nav-subnav-link {
            color   : $color-off-white;
            display : block;
            padding : 0.2rem 2rem;

            &:hover {
                color : $color-grey;
            }
        }
    }
</style>
