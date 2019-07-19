<script>
    export default {
        name: 'NavItemMixin',
        beforeDestroy () {
            this.$refs.li.removeEventListener('transitionend', this.handleTransitionend)
        },
        methods: {
            handleMouseOver () {
                this.hovered = false
                this.hovering = true
            },
            handleMouseLeave () {
                this.hovering = false
                this.hovered = true
                if (this.$refs.li) {
                    this.$refs.li.addEventListener('transitionend', this.handleTransitionend)
                }
            },
            handleTransitionend () {
                this.hovered = false
                if (this.$refs.li) {
                    this.$refs.li.removeEventListener('transitionend', this.handleTransitionend)
                }
            }
        }
    }
</script>
