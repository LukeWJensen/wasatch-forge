<template>
    <nav class="main-nav">
        <ul class="main-nav-links barlow">
            <SubNav text="About">
                <SubNavItem text="The Shop" to="/shop"/>
                <SubNavItem text="The Blacksmiths" to="/blacksmiths"/>
                <SubNavItem text="Our History" to="/history"/>
            </SubNav>
            <NavItem text="Products" to="/products"/>
            <NavItem text="Contact" to="/contact"/>
            <NavItem
                text="Book Lessons"
                to="/book-lessons"
                highlight
            />
        </ul>
    </nav>
</template>

<script>
    import NavItem from '~/components/nav/NavItem'
    import SubNav from '~/components/nav/SubNav'
    import SubNavItem from '~/components/nav/SubNavItem'

    export default {
        name: 'Nav',
        components: { NavItem, SubNav, SubNavItem },
        data () {
            return {}
        }
    }
</script>

<style lang="scss">
    @import "../../assets/scss/the-goods";

    .main-nav {
        width : 100%;
    }

    .main-nav-links {
        align-items : center;
        display     : flex;
        margin      : 0;
        padding     : 0;
    }

    .main-nav-item {
        align-items    : center;
        color          : $color-off-black;
        display        : flex;
        list-style     : none;
        font-size      : 1.6rem;
        font-weight    : 700;
        height         : 3.6rem;
        position       : relative;
        margin         : 0 1.5rem 0 2.5rem;
        text-transform : uppercase;

        &--subnav {
            margin-right : 2.5rem;
        }

        &--highlight {
            background    : $color-molten;
            border-radius : 0.5rem;
            height        : auto;
            transition    : color 250ms $cubic-in-out, background-color 250ms $cubic-in-out;
            margin-left   : auto;

            &:hover {
                background-color : $color-off-black;

                a {
                    color : $color-off-black;
                }
            }

            a.main-nav-link {
                color   : $color-off-white;
                padding : 1rem 2rem;
            }
        }

        &-text {
            letter-spacing : 0.05em;
        }

        &-line {
            bottom   : 0;
            display  : block;
            height   : 3px;
            overflow : hidden;
            position : absolute;
            width    : 100%;

            &:after {
                background : $color-molten;
                content    : "";
                left       : 0;
                height     : 100%;
                width      : 100%;
                position   : absolute;
                transform  : translateX(-101%);
            }
        }

        &:last-of-type {
            margin-right : 0;
        }

        &:hover {
            cursor : pointer;
        }

        &--hovering, &--hovered {

            .main-nav-item-line {

                &:after {
                    transition : transform 250ms $cubic-out;
                }
            }
        }

        &--hovering {

            .main-nav-item-line {

                &:after {
                    transform : translateX(0)
                }
            }
        }

        &--hovered {

            .main-nav-item-line {

                &:after {
                    transform : translateX(101%);
                }
            }
        }

        a {
            color   : $color-off-black;
            padding : 0.5rem 0;

            &:hover {
                text-decoration : none;
            }
        }
    }
</style>
