<template>
    <div class="background-video absolute-fill">
        <img
            :src="posterSrc"
            alt="Video Poster"
            class="background-video-poster"
        >
        <video
            ref="video"
            :class="{'show' : videoLoaded}"
            :muted="videoMuted"
            loop
            playsinline
        >
            <source :src="vidSrc" type="video/mp4">
        </video>

        <div class="background-video-ctrls container">
            <button
                v-if="$nuxt.$route.name === 'index'"
                :class="[{
                    'video-mute-btn--muted': videoMuted
                }]"
                class="video-mute-btn"
                @mouseenter="handleMuteBtnMouseenter"
                @mouseleave="handleMuteBtnMouseleave"
                @click="handleMuteBtnClick"
            >
                <!-- eslint-disable -->
                <svg class="audio-icon" xmlns="http://www.w3.org/2000/svg" width="34" height="32" viewBox="0 0 34 32">
                    <path class="audio-icon-speaker"
                          fill="#ddd4cc"
                          d="M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z"
                    ></path>
                    <transition name="fade" mode="out-in">
                        <path key="waves"
                              v-if="(videoMuted && muteBtnHovering) || (!videoMuted && !muteBtnHovering)"
                              class="audio-icon-waves"
                              fill="#ddd4cc"
                              d="M27.814 28.814c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.739-2.739 4.247-6.38 4.247-10.253s-1.508-7.514-4.247-10.253c-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c3.305 3.305 5.126 7.7 5.126 12.374s-1.82 9.069-5.126 12.374c-0.293 0.293-0.677 0.439-1.061 0.439zM22.485 25.985c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 4.094-4.094 4.094-10.755 0-14.849-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546c-0.293 0.293-0.677 0.439-1.061 0.439v0zM17.157 23.157c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.534-2.534 2.534-6.658 0-9.192-0.586-0.586-0.586-1.536 0-2.121s1.535-0.586 2.121 0c3.704 3.704 3.704 9.731 0 13.435-0.293 0.293-0.677 0.439-1.061 0.439z"
                        ></path>
                        <path key="x"
                              v-if="!videoMuted && muteBtnHovering"
                              class="audio-icon-x"
                              fill="#ddd4cc"
                              d="m30 19.348v2.652h-2.652l-3.348-3.348-3.348 3.348h-2.652v-2.652l3.348-3.348-3.348-3.348v-2.652h2.652l3.348 3.348 3.348-3.348h2.652v2.652l-3.348 3.348z"
                        />
                    </transition>
                </svg>
                <!-- eslint-enable -->
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BackgroundVideo',
        props: {
            posterSrc: String,
            vidSrc: String
        },
        data () {
            return {
                videoLoading: false,
                videoLoaded: false,
                videoMuted: true,
                muteBtnHovering: false
            }
        },
        mounted () {
            this.loadVideo()
        },
        methods: {
            loadVideo () {
                this.videoLoading = true

                this.$refs.video.addEventListener('canplaythrough', (this.videoOnCanplaythrough = () => {
                    this.videoLoading = false
                    this.videoLoaded = true

                    if (this.$refs.video) {
                        this.$refs.video.play()
                        return this.$refs.video.removeEventListener('canplaythrough', this.videoOnCanplaythrough);
                    }
                }))

                // Start loading
                return this.$refs.video.load()
            },
            handleMuteBtnMouseenter () {
                this.muteBtnHovering = true
            },
            handleMuteBtnMouseleave () {
                this.muteBtnHovering = false
            },
            handleMuteBtnClick () {
                this.videoMuted = !this.videoMuted
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/scss/_the-goods";

    .background-video {
        z-index : 0;

        img,
        video {
            position   : absolute;
            top        : 50%;
            left       : 50%;
            width      : 100%;
            min-height : 100%;
            transform  : translate(-50%, -50%);
            object-fit : cover;
        }

        video {
            opacity    : 0;
            transition : opacity 0.2s linear 0s;

            &.show {
                opacity : 1;
            }
        }
    }

    // vue transition classes
    .vid-fade {
        &-enter-active, &-leave-active {
            transition : opacity 1s;
        }

        &-enter, &-leave-to {
            opacity : 0;
        }
    }

    .background-video-ctrls {
        height   : 100%;
        position : relative;
        width    : 100%;
    }

    .video-mute-btn {
        background : none;
        border     : 0;
        outline    : none;
        position   : absolute;
        bottom     : 1.6rem;
        right      : 0;

        .audio-icon {
            width : 2.6rem;
        }

        path {
            transition : fill 250ms $cubic-out, opacity 250ms $cubic-out;
        }

        &:hover {
            cursor : pointer;

            path {
                fill : $color-molten;
            }
        }

        &:focus {
            outline : none;
        }
    }

    .mute-icon-enter, .fade-leave-to {
        opacity : 0;
    }
</style>
