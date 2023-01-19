<template>
  <div class="content">
    <header>
      <div class="log">
        <h4>
          ctq
          <a href="mainplatform.html">
            <img src="../assets/icon/会徽.png" alt="logo" />
          </a>
        </h4>
      </div>
      <label class="lable-title">
        <h1>我要借伞</h1>
      </label>
      <span class="lable-hr"></span>
    </header>
    <section class="form">
      <form action="get" id="form-borrow">
        <section>
          <!-- <div class="item">
            <label for="time" class="label-text">借伞时间：</label>
            <input type="date" id="time" placeholder="yyyy/mm/dd" />
          </div> -->
          <div class="item">
            <label for="userid" class="label-text"
              >学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号&nbsp;：</label
            >
            <input
              type="text"
              id="userid"
              name="userid"
              placeholder="请输入您的ID"
              v-model="formMess.userId"
            />
          </div>
          <div class="item">
            <label for="name" class="label-text"
              >&nbsp;姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</label
            >
            <input
              type="text"
              id="name"
              placeholder="请输入您的姓名"
              v-model="formMess.name"
            />
          </div>
          <div class="item">
            <label class="label-select label-text" for="place"
              >借伞地址：
              <select id="place" name="place" v-model="formMess.place">
                <option value="博智楼（七教）">博智楼（七教）</option>
                <option value="慧智楼（九教）">慧智楼（九教）</option>
                <option value="图书馆（南门）">图书馆（南门）</option>
                <option value="图书馆（北门）">图书馆（北门）</option>
              </select>
            </label>
          </div>
        </section>
        <section class="form-btn">
          <div class="item">
            <label for="confirm">
              <input type="checkbox" name="confirm" id="confirm" />
              本人承诺会按时归还雨伞， 不恶意损坏、不私自占有
            </label>
          </div>
          <div class="item">
            <input
              type="button"
              class="btn"
              @click="SubmitForm"
              value="提交信息"
            />
          </div>
        </section>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formMess: {
        userId: '',
        name: '',
        place: '',
      },
    }
  },
  methods: {
    // 提交信息
    SubmitForm() {
      /* formData格式提交： */
      let formData = new FormData()
      for (var key in this.formMess) {
        formData.append(key, this.formMess[key])
      }
      if (this.formMess.userId.trim() === '' || this.formMess.userId.length === 0) {
        alert('学号不能为空！')
      } else if (this.formMess.name.trim() === '' || this.formMess.name.length === 0) {
        alert('姓名不能为空!')
      } else if (this.formMess.place.trim() === '' || this.formMess.place.length === 0){
        alert('请选择地址！')
      } else{
        console.log(this.formMess);
        // 发起请求
      }
      // axios({
      //   method: 'post',
      //   url: 'xxxxxxx',
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      //   withCredentials: true,
      //   data: formData,
      // })
    },
  },
}
</script>

<style scoped src="../../public/static/style/reset.css"></style>
<style scoped src="../../public/static/style/ctq_common.css"></style>
