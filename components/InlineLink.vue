<template>
    <span
        :class="{'inline-link--hover': hovering}"
        class="inline-link"
        @mouseover="handleMouseover"
        @mouseleave="handleMouseleave"
    >
        <InlineLinkText
            v-for="(word, idx) in words"
            :word="word"
            :words-length="words.length"
            :idx="idx"
            :hovering="hovering"
            :key="`ilt${idx}`"
        />
    </span>
</template>

<script>
    import InlineLinkText from '~/components/InlineLinkText'
    export default {
        name: 'InlineLink',
        components: { InlineLinkText },
        props: {
            href: String,
            text: String
        },
        data () {
            return {
                hovering: false
            }
        },
        computed: {
            words () {
                return this.text.split(' ')
            }
        },
        methods: {
            handleMouseover () {
                if (this.$store.state.size.deviceSize === 'lg' || this.$store.state.size.deviceSize === 'xl') {
                    this.hovering = true
                }
            },
            handleMouseleave () {
                this.hovering = false
            }
        }
    }
</script>
