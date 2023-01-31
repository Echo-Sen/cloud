<template>
  <div>
    <div class="showcase">
      <div class="video-container">
        <video autoplay muted loop>
          <source src="@/assets/img/video.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="content">
        <h1>智能志愿服务</h1>
        <h1>云平台</h1>
        <h3>奉献青春力量 弘扬志愿精神</h3>
        <router-link to="/home" class="btn" id="login">进入平台</router-link>
      </div>
    </div>
    <div id="about">
      <h1>关于我们</h1>
      <img src="@/assets/img/logo.png" width="80" height="60" />
      <p></p>
      <h5>人工智能学院小红帽常青藤青年志愿者服务队</h5>

      <h5>秉承“奉献青春力量 弘扬志愿精神”理念</h5>
      <h5>开展丰富多彩的志愿活动</h5>
      <h5>其中包含橙子养老院、军休所、爱心雨伞等</h5>
      <h5>为青年大学生提供优质的志愿服务机会奉献青春力量</h5>
      <h2>测试中</h2>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('getToken')
  },
}
</script>

<style scoped src="@/assets/static/style/style.css"></style>
