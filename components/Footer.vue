<template>
    <footer class="main-footer barlow">
        <div class="main-footer-inner container">

            <nav class="main-footer-nav">
                <nuxt-link class="main-footer-nav-link" to="/history">Our History</nuxt-link>
                <nuxt-link class="main-footer-nav-link" to="/blacksmiths">The Blacksmiths</nuxt-link>
                <nuxt-link class="main-footer-nav-link" to="/products">Products</nuxt-link>
                <nuxt-link class="main-footer-nav-link" to="/contact">Contact</nuxt-link>
                <!--<nuxt-link class="main-footer-nav-link" to="/book-lessons">Book Lessons</nuxt-link>-->
            </nav>

            <nuxt-link class="footer-logo" to="/">
                <Logo scheme="light"/>
            </nuxt-link>

            <span class="main-footer-item">
                <a target="_blank" href="tel:801-808-2897">
                    <span>801-613-0593</span>
                </a>
                <span class="main-footer-middot">&middot;</span>
                <a target="_blank" href="mailto:wasatchforge@gmail.com">
                    <span>wasatchforge@gmail.com</span>
                </a>
            </span>

            <span class="main-footer-item">
                <a target="_blank" href="https://goo.gl/maps/7a7kZmGQLDU2">
                    <address>3345 S 300 W, # 4A Salt Lake City, UT</address>
                </a>
            </span>

            <span class="main-footer-item">
                <nuxt-link class="main-footer-cta" to="/book-lessons">Book Lessons</nuxt-link>
            </span>

            <span class="main-footer-item">
                <a target="_blank" href="https://www.facebook.com/peterwright134/">
                    <!-- eslint-disable -->
                    <svg class="main-footer-social-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path>
                    </svg>
                    <!-- eslint-enable -->
                </a>
            </span>
        </div>
    </footer>
</template>

<script>
    import Logo from '~/components/Logo'

    export default {
        name: 'Footer',
        components: { Logo },
        data () {
            return {}
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/the-goods';

    .main-footer {
        background : $color-off-black;
        padding    : 8rem 0 6rem 0;
        position   : relative;
        z-index    : 1;

        &-inner {
            align-items     : center;
            display         : flex;
            flex-direction  : column;
            justify-content : space-between;
        }

        &-nav {

            a.main-footer-nav-link {
                font-family    : 'Open Sans', sans-serif;
                font-size      : 1.2rem;
                font-weight    : 700;
                letter-spacing : 0.05em;
                padding        : 0 0.8rem;
                text-transform : uppercase;
            }
        }

        .footer-logo {
            margin : 6rem 0 3rem 0;

            .logo-svg {
                width   : 9rem;
                display : inline-flex;
            }
        }

        &-item {
            display : inline-flex;
            margin  : 0.8rem auto;

            .main-footer-cta {
                border         : solid 1px;
                border-radius  : 0.5rem;
                font-size      : 1.6rem;
                letter-spacing : 0.05em;
                margin         : 1rem 0;
                padding        : 1rem 2rem;
                text-transform : uppercase;
            }
        }

        &-middot {
            color       : $color-text-light;
            font-size   : 3rem;
            line-height : 3rem;
            margin      : 0 1rem;
        }

        &-social-icon {
            max-height : 2rem;

            path {
                fill       : $color-off-white;
                transition : fill 250ms $cubic-out;

                .main-footer-item a:hover & {
                    fill : $color-grey;
                }
            }
        }

        a {
            align-items : center;
            color       : $color-off-white;
            font-size   : 2rem;

            &:hover {
                color           : $color-grey;
                text-decoration : none;
            }
        }

        address {
            margin : 0;
        }
    }
</style>
