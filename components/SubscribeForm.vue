<template>
    <div class="subscribe-form-wrap">
        <iframe
            v-show="formSubmitted"
            id="success-iframe"
            name="success-iframe"
        />
        <form
            v-show="!formSubmitted"
            id="mG61Hd"
            class="subscribe-form"
            action="https://docs.google.com/forms/u/3/d/e/1FAIpQLScyMwa8unJANbImXAwaTqzHBU6EqJnpjE-Y-8r9XiNE0yo85w/formResponse?embedded=true"
            target="success-iframe"
            method="post"
            @submit="handleFormSubmit"
        >
            <h1>Newsletter Signup</h1>
            <input
                class="subscribe-form-email"
                name="emailAddress"
                jsname="YPqjbf"
                type="email"
                placeholder="Email address"
                required
            >
            <input
                type="submit"
                class="cta cta--highlight"
                value="Submit"
            >
        </form>
        <button class="subscribe-form-close close-btn" @click="handleClose">
            <svg
                width="12px"
                x="0px"
                y="0px"
                viewBox="0 0 15 15">
                <polygon fill="#222" points="15,1.4 13.6,0 7.5,6.1 1.4,0 0,1.4 6.1,7.5 0,13.6 1.4,15 7.5,8.9 13.6,15 15,13.6 8.9,7.5 "/>
            </svg>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'SubscribeForm',
        data () {
            return {
                formSubmitted: false
            }
        },
        methods: {
            handleFormSubmit () {
                this.formSubmitted = true
            },
            handleClose () {
                this.$store.dispatch('modal/clearModal')
            }
        }
    }
</script>

<style lang="scss">
@import '../assets/scss/the-goods';

.subscribe-form-wrap {
    background    : $color-off-white;
    border-radius : 0.5rem;
    padding       : 4rem 6rem 0.5rem 6rem;

    iframe {
        border     : 0;
        min-height : 24rem;
        min-width  : 60rem;
    }
}

.subscribe-form {
    margin : 0 0 3.5rem 0;

    .subscribe-form-email {
        border    : solid 1px #e1e1e1;
        height    : 4.2rem;
        min-width : 20rem;
        margin    : 0 0.8rem 0 0;
        padding   : 0.6rem 1.2rem;
    }

    input {

        &.cta--highlight {
            border : 0;
        }
    }

    &-close {
        position : absolute;
        right    : 1.5rem;
        top      : 1.5rem;
    }
}
</style>
