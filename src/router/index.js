import VueRouter from 'vue-router'
import Vue from 'vue'
import Index from '@/views/Index.vue'
import MainPlatform from '@/views/Home/MainPlatform.vue'
import CqtUmbrella from '@/views/LoveUmbrella/CqtUmbrella'
import CqtUmbrellaBorrow from '@/views/LoveUmbrella/CqtUmbrellaBorrow'
import CqtUmbrellaReturn from '@/views/LoveUmbrella/CqtUmbrellaReturn'
import CqtHelper from '@/views/SchoolHelper/CqtHelper'
import FindAndLost from '@/views/LostAndFind/FindAndLost'
import ToFindFindAndLost from '@/views/LostAndFind/ToFindFindAndLost'
import TolostFindAndLost from '@/views/LostAndFind/TolostFindAndLost'
import SoftWare from '@/views/SoftWare'
import Volunteer from '@/views/Volunteer/Volunteer'
import JoinVolunteer from '@/views/Volunteer/JoinVolunteer'
import ShineVolunteer from '@/views/Volunteer/ShineVolunteer'
import Advice from '@/views/Advice/AdviceBack'
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
    component:JoinVolunteer
  },
  {
    path: '/shinevolunteer',
    component:ShineVolunteer
  }, {
    path: '/advice',
    component:Advice
  }
]

const router = new VueRouter({
  routes
})

export default router