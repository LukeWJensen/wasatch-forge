<template>
    <li ref="li" class="nav-drawer-item">
        <nuxt-link :to="to" class="nav-drawer-link">
            <span class="nav-drawer-item-text">{{ text }}</span>
        </nuxt-link>
    </li>
</template>

<script>
    export default {
        name: 'NavDrawerItem',
        props: {
            text: String,
            to: String
        },
        data () {
            return {}
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

        a {
            color   : $color-off-black;
            display : block;
            padding : 0.6rem 0;
        }
    }
</style>
