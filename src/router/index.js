
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
import ScanContent from '@/components/scanner/ScanContent.vue'
import ScanFileUpload from '@/components/scanner/ScanFileUpload.vue'
import ScanUrlContent from '@/components/scanner/ScanUrlContent.vue'
import ScanSearch from '@/components/scanner/ScanSearch.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //NESTED ROUTE
    { path: '/scan', component: ScanContent,
      children: [
        { path: 'file', component: ScanFileUpload},
        { path: 'url', component: ScanUrlContent},
        { path: 'search', component: ScanSearch},

      ]
     },
  ]
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
