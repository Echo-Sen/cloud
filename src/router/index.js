import VueRouter from 'vue-router'
import Vue from 'vue'
import Index from '@/views/Index.vue'
import MainPlatform from '@/views/MainPlatform.vue'
import CqtUmbrella from '@/views/CqtUmbrella'
import CqtUmbrellaBorrow from '@/views/CqtUmbrellaBorrow'
import CqtUmbrellaReturn from '@/views/CqtUmbrellaReturn'
import CqtHelper from '@/views//CqtHelper'
import FindAndLost from '@/views/FindAndLost'
import ToFindFindAndLost from '@/views/ToFindFindAndLost'
import TolostFindAndLost from '@/views/TolostFindAndLost'
import SoftWare from '@/views/SoftWare'
import Volunteer from '@/views/Volunteer'
import JoinVolunter from '@/views/JoinVolunter'
import ShineVolunteer from '@/views/ShineVolunteer'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index,
  },
  {
    path: '/home',
    component: MainPlatform
  },
  {
    path: '/cqtumbrella',
    component: CqtUmbrella
  },
  {
    path: '/cqtumbrellaborrow',
    component:CqtUmbrellaBorrow
  },
  {
    path: '/cqtumbrellareturn',
    component:CqtUmbrellaReturn
  },
  {
    path: '/cqthelper',
    component:CqtHelper
  },
  {
    path: '/findandlost',
    component:FindAndLost
  },
  {
    path: '/tofindandlost',
    component:ToFindFindAndLost
  },
  {
    path: '/tolostfindandlost',
    component:TolostFindAndLost
  },
  {
    path: '/software',
    component:SoftWare
  },
  {
    path: '/volunteer',
    component:Volunteer
  },
  {
    path: '/joinvolunter',
    component:JoinVolunter
  },
  {
    path: '/shinevolunteer',
    component:ShineVolunteer
  }
]

const router = new VueRouter({
  routes
})

export default router