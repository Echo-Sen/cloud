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
                    <h3>爱心雨伞</h3>
                    <div style="border-top: 5px black solid; width: 100%"></div>
                  </div>

                  <!-- </div> -->
                </div>
                <section class="services">
                  <div class="love">
                    <!-- bootstrap栅栏系统css:col-md -->
                    <router-link to="/cqtumbrellaborrow" class="col-md-6">
                      <div class="service-item eleventh-service">
                        <div class="service-icon"></div>
                        <h4>借伞</h4>
                        <p>Borrow the Umbrella</p>
                      </div>
                    </router-link>
                  </div>

                  <div class="school">
                    <router-link to="/cqtumbrellareturn" class="col-md-6">
                      <div class="service-item tenth-service">
                        <div class="service-icon"></div>
                        <h4>还伞</h4>
                        <p>Return the Umbrella</p>
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
    window.scrollTo(0,0);
},
}
</script>

<style scoped src="@/assets/static/style/slider.css">

</style>

<style scoped src="@/assets/static/style/bootstrap.css">

</style>

<style scoped src="@/assets/static/style/btn-style.css">

</style>

<style scoped src="@/assets/static/style/layout.css">

</style>
<style scoped src="@/assets/static/style/top-style.css">

</style>

<style>
</style>