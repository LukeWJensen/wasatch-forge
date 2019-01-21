<script>
    export default {
        name: 'NavItemMixin',
        methods: {
            handleMouseOver () {
                this.hovered = false
                this.hovering = true
            },
            handleMouseLeave () {
                this.hovering = false
                this.hovered = true
                this.$refs.li.addEventListener('transitionend', this.handleTransitionend)
            },
            handleTransitionend () {
                this.hovered = false
                this.$refs.li.removeEventListener('transitionend', this.handleTransitionend)
            }
        }
    }
</script>
