const routes = [
  {
    path: '/',
    redirect: '/detail'
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('./pages/Detail')
  }
]

export default routes
