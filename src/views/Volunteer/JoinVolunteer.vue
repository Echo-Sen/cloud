<template>
  <div>
    <!-- 志愿活动展示 -->
    <div class="content">
      <header>
        <label class="lable-title">
          <h1>参与活动</h1>
        </label>
        <span class="lable-hr"></span>
      </header>
      <section class="items" id="items">
        <div class="item">
          <div class="itemImg">
            <img src="@/assets/img/养老院.jpg" alt="橙子养老院" />
          </div>
          <p class="itemMsg">
            橙子养老院坐落在九龙坡区石小路181号（原顺驿酒店），时综合传媒部的部门基地活动。在活动中，志愿者们和老人们散步聊天，为老人们打扫房间，给老人们修剪指甲，给老人们包饺子、抄手，给老人们送礼物等。通过各种各样的活动，志愿者把自己的笑声与温暖传递给老人。
            养老院活动在每学期单周的周六9：00—12：00举行，需要志愿者们准备好证件，口罩，志愿服等物品，在主校旁的公共汽车站集合出发。
          </p>
        </div>
        <div class="item">
          <div class="itemImg">
            <img src="@/assets/img/爱心雨伞.jpg" alt="爱心雨伞" />
          </div>
          <p class="itemMsg">
            爱心雨伞活动是为了在解决广大师生被突如其来的秋雨困在学校时提供临时免费雨伞帮助的同时，也为向全校广大师生传递“奉献爱心，服务他人，倡导义务精神”的宗旨，愿为大家撑起一把爱心雨伞，去体肤之寒，增心田之暖，希望爱心雨伞在工商大学广大师生手中传递的同时，打破人与人之间的隔阂，将温暖通过爱心雨伞传递到每个人的心中。
          </p>
        </div>
        <div class="item">
          <div class="itemImg">
            <img src="@/assets/img/良模支教.jpg" alt="良模支教" />
          </div>
          <p class="itemMsg">
            在良模支教活动中，我们首先到主校校门口集合各位成员，等人其了之后一起乘坐公交车去到巴南区天星桥良模小学上课，各位志愿者需要在活动前参加面试，面试内容为上课内容，保证志愿者们的上课质量，上课内容包括本学院的特色内容，时代名人等
          </p>
        </div>
        <div class="item">
          <div class="itemImg">
            <img src="@/assets/img/向日葵.jpg" alt="向日葵" />
          </div>
          <p class="itemMsg">
            和自闭症和先天性残疾的小朋友们一起上课、画画、做手工等，天气好的话就手牵着手带他们外出散步，或者陪他们去书店读书。
          </p>
        </div>
        <div class="item">
          <div class="itemImg">
            <img src="@/assets/img/干休所.jpg" alt="干休所" />
          </div>
          <p class="itemMsg">
            军休所:陪伴老人，教老人使用智能手机，做手工出发时间:周五下午一点半目的地:九龙坡区科园六路52号集合点:重庆工商大学轻轨站
          </p>
        </div>
        <div class="item">
          <div class="itemImg">
            <img src="@/assets/img/爱心雨伞.jpg" alt="爱心雨伞" />
          </div>
          <p class="itemMsg">
            爱心雨伞活动是为了在解决广大师生被突如其来的秋雨困在学校时提供临时免费雨伞帮助的同时，也为向全校广大师生传递“奉献爱心，服务他人，倡导义务精神”的宗旨，愿为大家撑起一把爱心雨伞，去体肤之寒，增心田之暖，希望爱心雨伞在工商大学广大师生手中传递的同时，打破人与人之间的隔阂，将温暖通过爱心雨伞传递到每个人的心中。
          </p>
        </div>
      </section>
    </div>

    <!-- 表单 -->
    <div class="mask" id="mask">
      <div class="form">
        <form action="" id="form-join">
          <header>
            <span id="close"
              ><svg
                t="1648091637248"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3242"
                width="0.5rem"
                height="0.5rem"
              >
                <path
                  d="M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z"
                  fill="#444444"
                  p-id="3243"
                  data-spm-anchor-id="a313x.7781069.0.i3"
                  class="selected"
                ></path>
              </svg>
            </span>
            <label class="lable-title">
              <h1 id="activityName">参与活动</h1>
            </label>
          </header>
          <div>
              <input type="text" id="userid" name="userid" readonly hidden/>
              <input type="text" id="activityId" name="activityId" readonly hidden/>
          </div>
          <div>
            <label for="time"
              >活动时间、地点：
              <input type="text" id="time" readonly />
            </label>
          </div>
          <div>
            <label for="tel"
              >活动负责人联系电话：
              <input type="text" id="tel" readonly />
            </label>
          </div>
          <textarea readonly id="detail" rows="6">
  活动详情介绍</textarea
          >
          <div class="btn">
            <a href="javascript:void(0)" id="msg">留言</a>
            <a href="javascript:void(0)" id="apply">我要报名</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
mounted() {
    //&nbsp;切换页面时滚动条自动滚动到顶部
    window.scrollTo(0,0);
},

}
</script>

<style scoped src="@/assets/static/style/reset.css">
</style>
<style scoped src="@/assets/static/style/form.css">
</style>
<style scoped src="@/assets/static/style/cqt_helper_volunteer_join.css">
</style>