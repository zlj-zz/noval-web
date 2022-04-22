import { createRouter, createWebHistory } from "vue-router";

const Search = () => import('views/Search.vue')
const NovelList = () => import('views/NovelList.vue')
const Crawl = () => import('views/Crawl.vue')

const routes = [
  { path: '/', redirect: '/Search' },
  {
    name: 'Search',
    path: '/Search',
    component: Search
  },
  {
    name: 'List',
    path: '/List',
    component: NovelList
  },
  {
    name: 'Crawl',
    path: '/Crawl',
    component: Crawl
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
