<template>
  <div class="content">
    <header>
      <div class="log">
        <h4>
          ctq
          <a href="javascript:void(0)">
            <img src="@/assets/icon/会徽.png" alt="logo" />
          </a>
        </h4>
      </div>
      <label class="lable-title">
        <h1>我要还伞</h1>
      </label>
      <span class="lable-hr"></span>
    </header>
    <div class="form">
      <form action="get" id="form-return">
        <section class="form-main">
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
              >还伞地址：
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
              本人承诺归还雨伞，未进行恶意损坏。
            </label>
          </div>
          <el-button class="item">
            <input
              type="button"
              class="btn"
              @click="SubmitForm"
              value="提交信息"
            />
          </el-button>
        </section>
      </form>
    </div>
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
      if (
        this.formMess.userId.trim() === '' ||
        this.formMess.userId.length === 0
      ) {
        this.$message({
          message: '学号不能为空！',
          type: 'error',
        })
      } else if (
        this.formMess.name.trim() === '' ||
        this.formMess.name.length === 0
      ) {
        this.$message({
          message: '姓名不能为空！',
          type: 'error',
        })
      } else if (
        this.formMess.place.trim() === '' ||
        this.formMess.place.length === 0
      ) {
        this.$message({
          message: '请选择地址！',
          type: 'error',
        })
      } else {
        console.log(this.formMess)
        this.$message({
          message: '提交成功！',
          type: 'success',
        })
        // 发起请求
      }
    },
  },
}
</script>

<style scoped src="@/assets/static/style/reset.css"></style>

<style scoped src="@/assets/static/style/ctq_common.css"></style>
