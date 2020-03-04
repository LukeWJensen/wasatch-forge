<script>
    export default {
        name: 'LayoutsMixin',
        computed: {
            deviceLargeUp () {
                return this.$store.state.size.deviceSize !== 'lg' && this.$store.state.size.deviceSize !== 'xl'
            }
        },
        watch: {
            $route (to, from) {
                if (to.name === 'store') {
                    if (to.name !== from.name) {
                        location.reload()
                    }
                }
            }
        }
    }
</script>
