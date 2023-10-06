const app = Vue.createApp({
    data() {
        return {
            products: [
                { name: 'Nasi Ayam Geprek', price: 20000, image: 'img/nasi-ayam-geprek.jpg' },
                { name: 'Bakso', price: 15000, image: 'img/bakso.jpg' },
                { name: 'Nasi Goreng', price: 10000, image: 'img/nasi-goreng.jpg' },
                { name: 'Kentang Goreng', price: 8000, image: 'img/kentang-goreng.jpg' },
                { name: 'Pangsit', price: 5000, image: 'img/pangsit.jpg' },
                { name: 'Es Teh', price: 5000, image: 'img/es-teh.jpg' },
            ],
            cart: [],
            wallet: '',
            addWallet: [
                { amount: 1000 },
                { amount: 2000 },
                { amount: 5000 },
                { amount: 10000 },
                { amount: 20000 },
                { amount: 50000 },
                { amount: 100000 },
            ]
        };
    },
    methods: {
        addToCart(product, isDuplicate = false) {
            const existingItem = this.cart.find(item => item.name === product.name);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.cart.push({ name: product.name, price: product.price, quantity: 1, image: product.image });
            }
        },
        formatNumber(number) {
            // Menggunakan metode toLocaleString untuk menambahkan titik sebagai pemisah ribuan
            return number.toLocaleString('id-ID');
        },
        addAmount(amount) {
            this.wallet = (parseFloat(this.wallet || 0) + amount);
        },
        removeFromCart(index) {
            const item = this.cart[index];

            if (item.quantity > 1) {
                item.quantity--;
            } else {
                // hapus jika sisa 1
                this.cart.splice(index, 1);
            }
        },
        getTotal() {
            return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        resetWallet() {
            // Reset nilai wallet menjadi 0
            this.wallet = '0';
        }
    }
});
app.mount('#app');
