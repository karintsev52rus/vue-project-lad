import { createRouter, createWebHistory, type RouteLocationNormalizedLoaded } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import { Links, PathNames } from '@/constants/routes';
import MainView from '@/views/MainView.vue';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Links.HOME,
      name: PathNames.HOME,
      component: MainView,
      meta: {
        layout: MainLayout,
        title: 'Главная',
        breadcrumb: () => [
          {
            title: 'Главная'
          }
        ]
      }
    },
    {
      path: Links.SEARCH,
      name: PathNames.SEARCH,
      component: () => import('@/views/SearchView.vue'),
      meta: {
        layout: MainLayout,
        title: 'Поиск',
        breadcrumb: (route: RouteLocationNormalizedLoaded) => [
          {
            title: 'Главная',
            link: Links.HOME
          },
          {
            title: route.meta.title
          }
        ]
      }
    },
    {
      path: `${Links.ADVERT}/:id`,
      name: PathNames.ADVERT,
      component: () => import('@/views/AdvertView.vue'),
      meta: {
        layout: MainLayout,
        title: 'Объявление',
        breadcrumb: (route: RouteLocationNormalizedLoaded) => [
          {
            title: 'Главная',
            link: Links.HOME
          },
          {
            title: 'Поиск',
            link: Links.SEARCH
          },
          {
            title: route.params.id as string
          }
        ]
      }
    },
    {
      path: `${Links.LOGIN}`,
      name: PathNames.LOGIN,
      component: () => import('@/views/LoginView.vue'),
      meta: {
        layout: MainLayout,
        title: 'Вход',
        breadcrumb: (route: RouteLocationNormalizedLoaded) => [
          {
            title: 'Главная',
            link: Links.HOME
          },
          {
            title: route.params.id as string
          }
        ]
      }
    },
    {
      path: `${Links.NEW}`,
      name: PathNames.NEW,
      component: () => import('@/views/NewAdvertView.vue'),
      meta: {
        requiredAuth: true,
        layout: MainLayout,
        title: 'Новое обявление',
        breadcrumb: (route: RouteLocationNormalizedLoaded) => [
          {
            title: 'Главная',
            link: Links.HOME
          },
          {
            title: route.meta.title
          }
        ]
      }
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  const { token } = storeToRefs(authStore);
  const { checkAuth } = authStore;

  if (!to.meta.requiredAuth) {
    next();
    return;
  }

  if (token.value) {
    const newToken = await checkAuth(token.value);
    if (newToken) {
      next();
      return;
    }
  }
  next({ name: PathNames.LOGIN });
});

export default router;
