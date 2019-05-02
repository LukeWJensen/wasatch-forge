export default function () {
    if (process.client) {
        document.body.classList.remove('init')
        void document.body.offsetWidth; // reading the property requires a recalc
        document.body.classList.add('init')
    }
}
