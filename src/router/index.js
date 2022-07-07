import Vue from 'vue'
import VueRouter from 'vue-router'
import Cartpage from '../views/CartPage.vue';
import ProductDetailPage from '../views/ProductDetailPage.vue';
import ProductsPage from '../views/ProductsPage.vue';
import NotFoundPage from '../views/NotFoundPage.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'Prodcuts',
    component: ProductsPage,
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetailPage,
  }, 
  {
    path: '/cart',
    name: 'Cart',
    component: Cartpage,
  }, 
  {
    path: '/',
    redirect: '/products',

  }, {
    path: '*',
    component: NotFoundPage,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
