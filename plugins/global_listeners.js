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
            this.setBrowserClasses()
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
            },
            getInternetExplorerVersion () {
                let userAgent = navigator.userAgent
                let explorerVersion = -1
                let ieVersionIndex = userAgent.indexOf('MSIE ')
                if (ieVersionIndex > 0) {
                    explorerVersion = parseInt(userAgent.substring(ieVersionIndex + 5, userAgent.indexOf('.', ieVersionIndex)), 10)
                } else if (/Trident.*rv:11\./.test(userAgent)) {
                    explorerVersion = 1
                } else {
                    explorerVersion = 0
                }
                return explorerVersion
            },
            setBrowserClasses () {
                // check if it's an iOS device
                if((/iPhone|iPad|iPod/i.test(navigator.userAgent))) {
                    document.body.classList.add('ios')
                }

                //check if it's MS Edge
                if(navigator.appVersion.indexOf('Edge') !== -1){
                    document.body.classList.add('edge')
                }

                // check if it's Internet Explorer
                if (this.getInternetExplorerVersion()) {
                    document.body.classList.add('msie')
                }
            }
        }
    })
}
