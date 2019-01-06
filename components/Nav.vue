<template>
    <nav class="main-nav">
        <ul class="main-nav-links">
            <li class="main-nav-item main-nav-item--highlight">
                <nuxt-link to="/book-lessons" class="main-nav-link">Book Lessons</nuxt-link>
            </li>
            <li class="main-nav-item">
                <nuxt-link to="/about" class="main-nav-link">About</nuxt-link>
            </li>
            <li class="main-nav-item">
                <nuxt-link to="/products" class="main-nav-link">Products</nuxt-link>
            </li>
            <li class="main-nav-item">
                <nuxt-link to="/contact" class="main-nav-link">Contact</nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'Nav',
        data () {
            return {}
        }
    }
</script>

<style lang="scss">
    @import "../assets/scss/the-goods";

    .main-nav {}

    .main-nav-links {
        display : flex;
    }

    .main-nav-item {
        list-style     : none;
        font-size      : 2.15rem;
        text-transform : uppercase;
        margin         : 1.5rem 1.5rem 0 2.5rem;

        &--highlight {
            background    : $color-molten;
            border-radius : 0.2rem;
            padding       : 0 1rem;
            transition    : color 250ms $cubic-out, background-color 250ms $cubic-out;

            &:hover {
                background-color : $color-text-light;
            }
        }

        &:last-of-type {
            margin-right : 0;
        }

        &:hover {
            cursor : pointer;

            a {
                color : $color-molten;
            }
        }
    }
</style>
