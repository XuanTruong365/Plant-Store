import { createRouter, createWebHistory } from "vue-router";

// Layouts
import DefaultLayout from "../components/layout/DefaultLayout.vue";
import AuthLayout from "../components/layout/AuthLayout.vue";

// Views
import Home from "../views/Home.vue";
import Shop from "../views/Shop.vue";
import Blog from "../views/Blog.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Cart from "../views/Cart.vue";

// Components
import ProductDetail from "../components/products/ProductDetails.vue";

const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            { path: "", name: "Home", component: Home },
            { path: "shop", name: "Shop", component: Shop },
            { path: "blog", name: "Blog", component: Blog },
            { path: "about", name: "About", component: About },
            { path: "cart", name: "Cart", component: Cart },
            {
                path: "product/:id",
                name: "ProductDetail",
                component: ProductDetail,
                props: true,
            },
        ],
    },
    {
        path: "/",
        component: AuthLayout,
        children: [
            { path: "login", name: "Login", component: Login },
            { path: "register", name: "Register", component: Register },
        ],
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
