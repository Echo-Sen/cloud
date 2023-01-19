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
                                        <h3>失物招领</h3>
                                        <div style="border-top:5px black solid; width:100%"></div>
                                    </div>

                                <!-- </div> -->
                               
                            </div>
                            <section class="services">
                                <div class="love">
                                    <!-- bootstrap栅栏系统css:col-md -->
                                    <a href="#/tofindandlost" class="col-md-6">
                                        <div class="service-item sixteenth-service">
                                            <div class="service-icon"></div>
                                            <h4>寻失主</h4>
                                            <p>Find the Owner</p>
                                        </div>
                        
                                    </a>
                                </div>
                        
                                <div class="school">
                                    <a href="#/tolostfindandlost" class="col-md-6">
                                        <div class="service-item seventeenth-service">
                                            <div class="service-icon"></div>
                                            <h4>找物品</h4>
                                            <p>Find the Item</p>
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
}
</script>

<style scoped src="../../public/static/style/slider.css">
</style>
<style scoped src="../../public/static/style/bootstrap.css">
</style>
<style scoped src="../../public/static/style/top-style.css">
</style>
<style scoped src="../../public/static/style/btn-style.css">
</style>
<style scoped src="../../public/static/style/layout.css">
</style>