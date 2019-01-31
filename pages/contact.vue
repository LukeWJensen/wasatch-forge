<template>
    <div class="page-book-lessons">
        <Hero heading="Contact" align="left">
            <BackgroundImage :img-src="heroImgSrc" :tint="true"/>
        </Hero>
        <div class="container">
            <div class="page-content">
                <div class="row">
                    <div class="col-5">
                        <div class="contact-item">
                            <span class="contact-item-label">Phone:</span>
                            <a target="_blank" href="tel:801-808-2897">
                                <span>801-613-0593</span>
                            </a>
                        </div>

                        <div class="contact-item">
                            <span class="contact-item-label">Email:</span>
                            <a target="_blank" href="mailto:wasatchforge@gmail.com">
                                <span>wasatchforge@gmail.com</span>
                            </a>
                        </div>

                        <div class="contact-item">
                            <span class="contact-item-label">Address:</span>
                            <a target="_blank" href="https://goo.gl/maps/7a7kZmGQLDU2">
                                <address>3345 S 300 W, # 4A Salt Lake City, UT</address>
                            </a>
                        </div>

                        <div class="contact-item">
                            <a target="_blank" href="https://www.facebook.com/peterwright134/">
                                <!-- eslint-disable -->
                                <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                    <path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path>
                                </svg>
                                <!-- eslint-enable -->
                            </a>
                        </div>
                    </div>
                    <div class="col-7">
                        <!-- eslint-disable -->
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.8690013761498!2d-111.9011603847319!3d40.69888264635511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528afc0648c0e5%3A0xdd6b7382a958c06f!2sWasatch+Forge!5e0!3m2!1sen!2sus!4v1548922807992"
                                width="100%"
                                height="350"
                                frameborder="0"
                                style="border:0"
                                allowfullscreen
                        ></iframe>
                        <!-- eslint-enable -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Hero from '~/components/Hero'
    import BackgroundImage from '~/components/BackgroundImage'

    export default {
        components: { Hero, BackgroundImage },
        data () {
            return {}
        },
        computed: {
            heroImgSrc () {
                return require('~/assets/images/hero/hammer_puck.jpg')
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/the-goods';

    .contact-item {
        margin : 0 0 2rem 0;

        &-label {
            display      : inline-flex;
            font-weight  : 700;
            margin-right : 1rem;
        }

        a {
            color : $color-off-black;

            &:hover {
                color : $color-grey;
            }
        }

        address {
            display : inline-flex;
        }

        .social-icon {
            max-height : 2rem;
            position   : relative;
            left       : -1rem;

            path {
                fill       : $color-off-black;
                transition : fill 250ms $cubic-out;

                .main-footer-item a:hover & {
                    fill : $color-grey;
                }
            }
        }
    }
</style>
