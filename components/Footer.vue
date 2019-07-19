<template>
    <footer class="main-footer barlow">
        <div class="main-footer-inner container">

            <nav class="main-footer-nav">
                <nuxt-link class="main-footer-nav-link" to="/shop">The Shop</nuxt-link>
                <nuxt-link class="main-footer-nav-link" to="/blacksmiths">The Blacksmiths</nuxt-link>
                <nuxt-link class="main-footer-nav-link" to="/history">Our History</nuxt-link>
                <nuxt-link class="main-footer-nav-link" to="/products">Products</nuxt-link>
                <nuxt-link class="main-footer-nav-link" to="/contact">Contact</nuxt-link>
            </nav>

            <nuxt-link class="footer-logo" to="/">
                <Logo scheme="light"/>
            </nuxt-link>

            <span class="main-footer-item">
                <a
                    class="main-footer-phone"
                    target="_blank"
                    href="tel:385-528-2687"
                >
                    <span>385-528-2687</span>
                </a>
                <span class="main-footer-middot">&middot;</span>
                <a
                    class="main-footer-email"
                    target="_blank"
                    href="mailto:wasatchforge@gmail.com"
                >
                    <span>wasatchforge@gmail.com</span>
                </a>
            </span>

            <span class="main-footer-item">
                <a target="_blank" href="https://goo.gl/maps/7a7kZmGQLDU2">
                    <address>3345 S 300 W, # A4 Salt&nbsp;Lake&nbsp;City,&nbsp;UT</address>
                </a>
            </span>

            <span class="main-footer-item">
                <nuxt-link class="main-footer-cta cta" to="/book-lessons">Book Lessons</nuxt-link>
            </span>

            <span class="main-footer-item">
                <a target="_blank" href="https://www.facebook.com/peterwright134/">
                    <!-- eslint-disable -->
                    <svg class="main-footer-social-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path>
                    </svg>
                    <!-- eslint-enable -->
                </a>
                <a target="_blank" href="https://www.instagram.com/wasatch_forge_llc/">
                    <!-- eslint-disable -->
                    <svg class="main-footer-social-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <path fill="#444" d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"></path>
                        <path fill="#444" d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"></path>
                        <path fill="#444" d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"></path>
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
        padding    : 6rem 1.5rem 5rem 1.5rem;
        position   : relative;
        z-index    : 1;
        transform: translateZ(0);

        @include screen-md-lg-xl {
            padding : 8rem 0 6rem 0;
        }

        &-inner {
            align-items     : center;
            display         : flex;
            flex-direction  : column;
            justify-content : space-between;
        }

        &-nav {
            text-align : center;

            a.main-footer-nav-link {
                display        : inline-flex;
                font-family    : 'Source Sans Pro', sans-serif;
                font-size      : 1.2rem;
                font-weight    : 700;
                letter-spacing : 0.05em;
                padding        : 0.8rem;
                text-transform : uppercase;
            }
        }

        .footer-logo {
            margin : 4rem 0 3rem 0;

            @include screen-md-lg-xl {
                margin : 6rem 0 3rem 0;
            }

            .logo-svg {
                width   : 9rem;
                display : inline-flex;
            }
        }

        &-item {
            margin : 0.8rem auto;

            @include screen-xs-sm {
                text-align : center;
            }

            @include screen-md-lg-xl {
                display : inline-flex;
            }

            .main-footer-cta {
                border    : solid 1px;
                font-size : 1.6rem;
                margin    : 1rem 0;
            }
        }

        &-email, &-phone {
            @include screen-xs-sm {
                display : block;
            }
        }

        &-phone {
            @include screen-xs-sm {
                margin-bottom : 1rem;
            }
        }

        &-middot {
            color       : $color-text-light;
            font-size   : 3rem;
            line-height : 3rem;
            margin      : 0 1rem;

            @include screen-xs-sm {
                display : none;
            }
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
