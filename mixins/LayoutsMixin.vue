<script>
    export default {
        name: 'LayoutsMixin',
        computed: {
            deviceLargeUp () {
                return this.$store.state.size.deviceSize !== 'lg' && this.$store.state.size.deviceSize !== 'xl'
            }
        }
    }
</script>
