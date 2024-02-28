const app = Vue.createApp({
    data() {
        return {
            cart: 1,
            product: 'Socks',
            brand: 'Vue Mastery',
            description: 'They are socks',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.vuemastery.com/',
            inventory: 100,
            onSale: false,
            details: ['50% Cotton', '30% Wool', '20% polester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0},
            ],
            sizes: ['xsmall', 'small', 'medium', 'large', 'xlarge']
        }
    },
    methods: {
        addToCart(){
            this.cart += 1;
        },
        updateImage(variantImage) {
            this.image = variantImage;
        },
    },
        computed: {
            title() {
                return this.brand + '' + this.product
            },
            isActive(){
                return this.inventory > 0;
            },
            inStock() {
                return this.inventory > 0;
            }
        }
})