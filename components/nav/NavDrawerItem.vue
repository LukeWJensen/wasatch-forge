<template>
    <li
        ref="li"
        :class="liClass"
        class="nav-drawer-item"
    >
        <nuxt-link :to="to" class="nav-drawer-link">
            <span class="nav-drawer-item-text">{{ text }}</span>
        </nuxt-link>
    </li>
</template>

<script>
    export default {
        name: 'NavDrawerItem',
        props: {
            highlight: Boolean,
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
            },
            liClass () {
                return [
                    { 'cta': this.highlight },
                    { 'cta--highlight': this.highlight },
                    { 'nav-drawer-item--active': this.isActive }
                ]
            }
        },
        mounted () {
            if (this.$parent.$options.name === 'NavDrawerSubNav') {
                this.$parent.$emit('reportHeight', this.$refs.li.clientHeight)
            }
        }
    }
</script>

<style lang="scss">
    @import "../../assets/scss/the-goods";

    .nav-drawer-item {
        font-size      : 2rem;
        font-weight    : 700;
        list-style     : none;
        text-transform : uppercase;

        &.cta--highlight {
            background : $color-molten;
            margin     : 0 auto 1rem -1.8rem;
            padding    : 0;

            a {
                color   : $color-off-white;
                padding : 0.8rem 1.8rem;
            }
        }

        &--active {
            opacity        : 0.4 !important;
            pointer-events : none;
        }

        a {
            color   : $color-off-black;
            display : block;
            padding : 1rem 0;
        }

        &-text {
            padding : 0.4rem 0;

            .nav-drawer-subnav & {
                padding : 0;
            }
        }
    }
</style>
