import { mapState } from 'vuex'
import extend from '~/utils/extend-vue-app'

export default async function ({ app }) {
    extend(app, {
        data () {
            return {
                resizeTimer: null,
                resizeCompleteEvent: null
            }
        },
        computed: {
            ...mapState( {
                xs: state => state.size.breakpoints.xs,
                sm: state => state.size.breakpoints.sm,
                md: state => state.size.breakpoints.md,
                lg: state => state.size.breakpoints.lg,
                xl: state => state.size.breakpoints.xl
            } )
        },
        watch: {
            $route () {
                this.$store.dispatch('nav/setDrawerOpen', false)
            }
        },
        mounted () {
            this.setDeviceSize()

            this.resizeCompleteEvent = new CustomEvent('resizeComplete', e => { process(e.detail) })

            // check the device size whenever the user has stopped resizing (for at least 250ms)
            window.addEventListener('resize', () => {
                clearTimeout(this.resizeTimer)
                this.resizeTimer = setTimeout(() => {
                    this.setDeviceSize()
                    window.dispatchEvent(this.resizeCompleteEvent)
                }, 250);
            });
        },
        methods: {
            matchMediaMatches (size) {
                return window.matchMedia(`(min-width: ${size}px)`).matches
            },
            setDeviceSize () {
                let deviceSize = ''
                if (this.matchMediaMatches(this.xl)) deviceSize = 'xl'
                else if(this.matchMediaMatches(this.lg)) deviceSize = 'lg'
                else if(this.matchMediaMatches(this.md)) deviceSize = 'md'
                else if(this.matchMediaMatches(this.sm)) deviceSize = 'sm'
                else if(this.matchMediaMatches(this.xs)) deviceSize = 'xs'
                this.$store.commit('size/setDeviceSize', deviceSize)
            }
        }
    })
}
