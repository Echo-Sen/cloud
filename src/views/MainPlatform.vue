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
                    <h3>主界面</h3>
                    <div style="border-top: 5px black solid; width: 100%"></div>
                  </div>
                  <!-- </div> -->
                </div>
                <section class="services">
                  <div class="love">
                    <!-- bootstrap栅栏系统css:col-md -->
                    <a href="#/cqtumbrella" class="col-md-4">
                      <div class="service-item first-service">
                        <div class="service-icon"></div>
                        <h4>爱心雨伞</h4>
                        <p>Courtesy Umbrella</p>
                      </div>
                    </a>
                  </div>

                  <div class="school">
                    <a href="#/cqthelper" class="col-md-4">
                      <div class="service-item second-service">
                        <div class="service-icon"></div>
                        <h4>校园帮</h4>
                        <p>CTBU Volunteer Service</p>
                      </div>
                    </a>
                  </div>
                  <div class="suggestion">
                    <a href="javascript::void(0)" class="col-md-4">
                      <div class="service-item third-service">
                        <div class="service-icon"></div>
                        <h4>建议反馈(待做)</h4>
                        <p>Suggestion Feedback</p>
                      </div>
                    </a>
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
    window.scrollTo(0,0);
},

  methods: {
    hideURLbar() {
      window.scrollTo(0, 1)
    },
  },
}
</script>

<style scoped src="../../public/static/style/layout.css"></style>
<style scoped src="../../public/static/style/top-style.css"></style>
<style scoped src="../../public/static/style/btn-style.css"></style>
