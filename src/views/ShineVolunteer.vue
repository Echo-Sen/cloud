<template>
   <div class="content" id="content">
      <header>
        <label class="lable-title">
          <h1>志愿风采</h1>
        </label>
        <span class="lable-hr"></span>
      </header>
      <section class="nav">
        <div class="logo">
          <h4>
            <a href="#">
              <img src="../assets/icon/会徽.png" alt="logo" />
            </a>
          </h4>
        </div>
        <input
          type="text"
          class="search"
          name=""
          id="searchText"
          placeholder="搜索参与的活动"
        />
        <input type="button" value="搜索" id="searchBtn" />
      </section>
      <section class="items" id="items">
        <div class="item">
          <div class="itemImg">
            <img src="../assets/img/养老院.jpg" alt="橙子养老院" />
          </div>
          <p class="itemMsg">
            橙子养老院坐落在九龙坡区石小路181号（原顺驿酒店），时综合传媒部的部门基地活动。在活动中，志愿者们和老人们散步聊天，为老人们打扫房间，给老人们修剪指甲，给老人们包饺子、抄手，给老人们送礼物等。通过各种各样的活动，志愿者把自己的笑声与温暖传递给老人。
            养老院活动在每学期单周的周六9：00—12：00举行，需要志愿者们准备好证件，口罩，志愿服等物品，在主校旁的公共汽车站集合出发。
          </p>
        </div>
        <div class="item">
          <div class="itemImg">
            <img src="../assets/img/爱心雨伞.jpg" alt="爱心雨伞" />
          </div>
          <p class="itemMsg">
            爱心雨伞活动是为了在解决广大师生被突如其来的秋雨困在学校时提供临时免费雨伞帮助的同时，也为向全校广大师生传递“奉献爱心，服务他人，倡导义务精神”的宗旨，愿为大家撑起一把爱心雨伞，去体肤之寒，增心田之暖，希望爱心雨伞在工商大学广大师生手中传递的同时，打破人与人之间的隔阂，将温暖通过爱心雨伞传递到每个人的心中。
          </p>
        </div>
        <div class="item">
          <div class="itemImg">
            <img src="../assets/img/良模支教.jpg" alt="良模支教" />
          </div>
          <p class="itemMsg">
            在良模支教活动中，我们首先到主校校门口集合各位成员，等人其了之后一起乘坐公交车去到巴南区天星桥良模小学上课，各位志愿者需要在活动前参加面试，面试内容为上课内容，保证志愿者们的上课质量，上课内容包括本学院的特色内容，时代名人等
          </p>
        </div>
        <div class="item">
          <div class="itemImg">
            <img src="../assets/img/向日葵.jpg" alt="向日葵" />
          </div>
          <p class="itemMsg">
            和自闭症和先天性残疾的小朋友们一起上课、画画、做手工等，天气好的话就手牵着手带他们外出散步，或者陪他们去书店读书。
          </p>
        </div>
        <div class="item">
          <div class="itemImg">
            <img src="../assets/img/干休所.jpg" alt="干休所" />
          </div>
          <p class="itemMsg">
            军休所:陪伴老人，教老人使用智能手机，做手工出发时间:周五下午一点半目的地:九龙坡区科园六路52号集合点:重庆工商大学轻轨站
          </p>
        </div>
        <div class="item">
          <div class="itemImg">
            <img src="../assets/img/爱心雨伞.jpg" alt="爱心雨伞" />
          </div>
          <p class="itemMsg">
            爱心雨伞活动是为了在解决广大师生被突如其来的秋雨困在学校时提供临时免费雨伞帮助的同时，也为向全校广大师生传递“奉献爱心，服务他人，倡导义务精神”的宗旨，愿为大家撑起一把爱心雨伞，去体肤之寒，增心田之暖，希望爱心雨伞在工商大学广大师生手中传递的同时，打破人与人之间的隔阂，将温暖通过爱心雨伞传递到每个人的心中。
          </p>
        </div>
      </section>
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

<style scoped src="../../public/static/style/cqt_helper_volunteer_shine.css">
</style>

<style scoped src="../../public/static/style/reset.css">
</style>