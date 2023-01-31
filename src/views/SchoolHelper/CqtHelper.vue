<template>
  <div>
    <div class="main-w3-pvt-header-sec" id="home">
      <!-- banner -->
      <section class="banner_w3pvt">
        <div class="csslider infinity" id="slider1">
          <ul>
            <li>
              <div class="banner-top1">
                <!-- <div class="overlay sec"> -->
                <div class="banner-imgs">
                  <div class="banner-info">
                    <h3>校园帮</h3>
                    <div style="border-top: 5px black solid; width: 100%"></div>
                  </div>

                  <!-- </div> -->
                </div>
                <section class="services">
                  <div class="love">
                    <!-- bootstrap栅栏系统css:col-md -->
                    <a href="javascript::void(0)" class="col-md-3">
                      <div class="service-item fourteenth-service">
                        <div class="service-icon"></div>
                        <h4>紧急救助(待做)</h4>
                        <p>Emergency Assistance</p>
                      </div>
                    </a>
                  </div>

                  <div class="school">
                    <router-link to="/software" class="col-md-3">
                      <div class="service-item twelfth-service">
                        <div class="service-icon"></div>
                        <h4>软件帮</h4>
                        <p>Software Helpling</p>
                      </div>
                    </router-link>
                  </div>

                  <div class="suggestion">
                    <router-link to="/volunteer" class="col-md-3">
                      <div class="service-item fifteenth-service">
                        <div class="service-icon"></div>
                        <h4>志愿活动</h4>
                        <p>Voluntary Activity</p>
                      </div>
                    </router-link>
                  </div>

                  <div class="suggestion">
                    <router-link to="/findandlost" class="col-md-3">
                      <div class="service-item thirteenth-service">
                        <div class="service-icon"></div>
                        <h4>失物招领</h4>
                        <p>Lost and Found</p>
                      </div>
                    </router-link>
                  </div>
                </section>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <!-- //slider -->
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    //&nbsp;切换页面时滚动条自动滚动到顶部
    window.scrollTo(0, 0)
  },
}
</script>

<style scoped src="@/assets/static/style/slider.css"></style>../
<style scoped src="@/assets/static/style/bootstrap.css"></style>../
<style scoped src="@/assets/static/style/top-style.css"></style>../
<style scoped src="@/assets/static/style/btn-style.css"></style>../
<style scoped src="@/assets/static/style/layout.css"></style>
