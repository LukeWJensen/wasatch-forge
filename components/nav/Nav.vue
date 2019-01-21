<template>
    <nav class="main-nav">
        <ul class="main-nav-links barlow">
            <NavItem
                text="Book Lessons"
                to="/book-lessons"
                highlight
            />
            <SubNav text="About">
                <SubNavItem text="Our History" to="/history"/>
                <SubNavItem text="The Blacksmiths" to="/blacksmiths"/>
            </SubNav>
            <NavItem text="Products" to="/products"/>
            <NavItem text="Contact" to="/contact"/>
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
    @import "../../assets/scss/the-goods";

    .main-nav {}

    .main-nav-links {
        display : flex;
    }

    .main-nav-item {
        color          : $color-text-light;
        list-style     : none;
        font-size      : 2rem;
        font-weight    : 700;
        padding        : 0.5rem 0;
        position       : relative;
        margin         : 1.5rem 1.5rem 0 2.5rem;
        text-transform : uppercase;

        &--highlight {
            background    : $color-molten;
            border-radius : 0.2rem;
            padding       : 0.4rem 1rem 0.6rem 1rem;
            transition    : color 250ms $cubic-in-out, background-color 250ms $cubic-in-out;

            &:hover {
                background-color : $color-text-light;
                color            : $color-text-main;

                a {
                    color : $color-text-main;
                }
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
            color : $color-text-light;

            &:hover {
                text-decoration : none;
            }
        }
    }
</style>
