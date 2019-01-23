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
            :muted="$store.state.homeVideo.muted"
            loop
            playsinline
        >
            <source :src="vidSrc" type="video/mp4">
        </video>
    </div>
</template>

<script>
    export default {
        name: 'BackgroundVideo',
        props:{
            posterSrc: String,
            vidSrc: String
        },
        data () {
            return {
                videoLoading: false,
                videoLoaded: false
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
                })
                )

                // Start loading
                return this.$refs.video.load()
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/scss/_the-goods";

    .background-video {
        z-index: 0;

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

</style>
