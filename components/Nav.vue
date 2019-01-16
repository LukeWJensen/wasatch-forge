<template>
    <nav class="main-nav">
        <ul class="main-nav-links barlow">
            <NavItem
                text="Book Lessons"
                to="/book-lessons"
                highlight
            />
            <NavItem text="About" to="/about"/>
            <NavItem text="Products" to="/products"/>
            <NavItem text="Contact" to="/contact"/>
        </ul>
    </nav>
</template>

<script>
    import NavItem from '~/components/NavItem'

    export default {
        name: 'Nav',
        components: { NavItem },
        data () {
            return {}
        },
        methods: {
            handleMouseOver (e) {
                console.log(e.target)
            },
            handleMouseLeave (e) {
                console.log(e.target)
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/scss/the-goods";

    .main-nav {}

    .main-nav-links {
        display : flex;
    }
</style>
