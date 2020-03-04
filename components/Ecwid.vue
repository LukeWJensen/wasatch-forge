<template>
    <div class="ecwid-store-wrap">
        <div v-html="ecwidSript"/>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                ecwidSript: '<div id="my-store-19645090"></div><div><script data-cfasync="false" type="text/javascript" src="https://app.ecwid.com/script.js?19645090&data_platform=code" charset="utf-8"><\/script><script type="text/javascript"> xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-19645090");<\/script></div>'
            }
        }
    }
</script>
