
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'produtos', component: () => import('pages/Produtos.vue'), name:'Produtos' },
      { path: 'caads', component: () => import('pages/Caads.vue'), name:'Caads' },
      { path: 'grade', component: () => import('pages/Grade.vue'), name:'Grade' },
      { path: 'horarios', component: () => import('pages/Horarios.vue'), name:'Horarios' },
      { path: 'patrocinadores', component: () => import('pages/Patrocinadores.vue'), name:'Patrocinadores' }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
