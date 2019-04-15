import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import products from '@/components/products'
import brand from '@/components/brand'
import company from '@/components/company'
import contact from '@/components/contact'
import details from '@/components/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/products',
      name: 'products',
      component: products
    },
    {
      path: '/brand',
      name: 'brand',
      component: brand
    },
    {
      path: '/company',
      name: 'company',
      component: company
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/details/:Pid',
      name: 'details',
      component: details
    }
  ]
})
