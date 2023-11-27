const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
       { path: 'todo', component: () => import('src/pages/TodoProject.vue')},
       { path: 'help', component: () => import('src/pages/HelpMe.vue')},
       { path: 'Twitter', component: () => import('src/pages/twitterMe.vue')},
       { path: 'facebook', component: () => import('src/pages/facebookMe.vue')},
       { path: 'instagram', component: () => import('src/pages/instagramMe.vue')},  
       { path: 'chatgpt', component: () => import('src/pages/AskChatGpt.vue')}, 
       { path: 'setting', component: () => import('src/pages/settingProfile.vue')}  
    ]
  }
]
  // Always leave this as last one,
  // but you can also remove it
if(process.env.MODE !=='ssr') {
    routes.push({
      path:'/',
    component: () => import('pages/ErrorNotFound.vue')
  })
}


  export default routes