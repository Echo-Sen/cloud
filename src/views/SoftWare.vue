<template>
  <div class="content">
    <header>
      <div class="log">
        <h4>
          ctq
          <a href="javascript:void(0)">
            <img src="../assets/icon/会徽.png" alt="logo" />
          </a>
        </h4>
      </div>
      <label class="lable-title">
        <h1>软件帮</h1>
      </label>
      <span class="lable-hr"></span>
    </header>
    <div class="form">
      <form action="get" id="form-software">
        <section class="form-main">
          <div class="item">
            <label for="userid" class="label-text"
              >学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：</label
            >
            <input
              type="text"
              id="userid"
              name="userid"
              placeholder="请输入您的学号"
              v-model="formMess.userId"
            />
          </div>

          <div class="item">
            <label for="name" class="label-text"
              >姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</label
            >
            <input
              type="text"
              id="name"
              placeholder="请输入您的姓名"
              v-model="formMess.name"
            />
          </div>

          <div class="item">
            <label for="msgs" class="label-text"
              >问&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;题：</label
            >
            <input
              type="text"
              id="msgs"
              name="detail"
              placeholder="对遇到的问题进行简单描述,10字以内"
              v-model="formMess.detail"
            />
          </div>
          <div class="item">
            <label class="label-select" for="place"
              >软件类型：
              <select id="place" name="typeid" v-model="formMess.type">
                <option value="1">PS(图像处理)</option>
                <option value="2">PR(视频剪辑)</option>
                <option value="3">AE(视频特效)</option>
                <option value="4">PPT(幻灯片)</option>
              </select>
            </label>
          </div>
        </section>
        <section class="form-btn">
          <div class="item">
            <label for="confirm">
              <p>
                <input type="checkbox" name="confirm" id="confirm" />
                提交信息后，志愿者会及时 在企业微信与您联系哦！
              </p>
            </label>
          </div>
          <div class="item">
            <input
              type="button"
              class="btn"
              value="提交信息"
              @click="SubmitForm"
            />
          </div>
          <!--            <div class="item">-->
          <!--              <input type="button" class="btn" value="查询状态" onclick="queryState()"></input>-->
          <!--            </div>-->
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
        detail: '',
        type: '',
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
        alert('学号不能为空！')
      } else if (
        this.formMess.name.trim() === '' ||
        this.formMess.name.length === 0
      ) {
        alert('姓名不能为空!')
      } else if (
        this.formMess.detail.trim() === '' ||
        this.formMess.detail.length === 0
      ) {
        alert('请对问题加以描述！！')
      } else if (
        this.formMess.type.trim() === '' ||
        this.formMess.type.length === 0
      ) {
        alert('请选择软件类型！')
      } else {
        console.log(this.formMess)
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
<style scoped src="@/assets/static/style/reset.css"></style>

<style scoped src="@/assets/static/style/ctq_common.css"></style>
