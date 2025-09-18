// stores/cart.js
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state: () => ({
        items: [],
        isOpen: false, // bật/tắt drawer
    }),
    actions: {
        addItem(product) {
            // product = { id, name, price, quantity, planter, image }
            const exist = this.items.find(
                (item) =>
                    item.id === product.id &&
                    item.planter === product.planter // check thêm thuộc tính khác nếu cần (size, color)
            );

            if (exist) {
                exist.quantity += product.quantity || 1;
            } else {
                this.items.push({
                    ...product,
                    quantity: product.quantity || 1,
                });
            }

            this.isOpen = true; // mở mini cart khi add
        },

        removeItem(product) {
            this.items = this.items.filter(
                (item) =>
                    !(
                        item.id === product.id &&
                        item.planter === product.planter
                    )
            );
        },

        updateQuantity(product, qty) {
            const exist = this.items.find(
                (item) =>
                    item.id === product.id &&
                    item.planter === product.planter
            );
            if (exist) {
                exist.quantity = qty > 0 ? qty : 1;
            }
        },

        clearCart() {
            this.items = [];
        },

        toggleDrawer(val) {
            this.isOpen = val !== undefined ? val : !this.isOpen;
        },
    },
    getters: {
        totalPrice: (state) =>
            state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
        totalItems: (state) =>
            state.items.reduce((sum, item) => sum + item.quantity, 0),
    },
});
