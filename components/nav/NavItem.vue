<template>
    <li
        ref="li"
        :class="[
            {'main-nav-item--highlight': highlight},
            {'main-nav-item--hovering': hovering},
            {'main-nav-item--hovered': hovered},
            {'main-nav-item--hovered': hovered},
            {'main-nav-item--active': isActive}
        ]"
        class="main-nav-item"
        @mouseover="handleMouseOver"
        @mouseleave="handleMouseLeave"
    >
        <nuxt-link :to="to" class="main-nav-link">
            <span class="main-nav-item-text">{{ text }}</span>
        </nuxt-link>
        <span v-if="!highlight" class="main-nav-item-line"/>
    </li>
</template>

<script>
    import NavItemMixin from '~/mixins/NavItemMixin'

    export default {
        name: 'NavItem',
        mixins: [ NavItemMixin ],
        props: {
            text: String,
            to: String,
            highlight: Boolean
        },
        data () {
            return {
                hovering: false,
                hovered: false
            }
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
</style>
