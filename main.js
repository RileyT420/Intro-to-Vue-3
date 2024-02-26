const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'They are socks',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.vuemastery.com/',
            inventory: 100,
            onSale: true,
            details: ['50% Cotton', '30% Wool', '20% polester'],
            variants: [
                { id: 2234, color: 'green'},
                { id: 2235, color: 'blue'},
            ],
            sizes: ['xsmall', 'small', 'medium', 'large', 'xlarge']
        }
    }
})