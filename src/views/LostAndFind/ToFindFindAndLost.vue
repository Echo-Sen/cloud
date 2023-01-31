<template>
  <div class="content">
    <header>
      <label class="lable-title">
        <h1>寻失主</h1>
      </label>
      <span class="lable-hr"></span>
    </header>
    <div class="form">
      <!-- 表单上传图片的时候，必须写 enctype="multipart/form-data -->
      <form id="form-lost-item" enctype="multipart/form-data">
        <section class="form-main">
          <div class="item">
            <label for="name" class="label-text">联系方式：</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="请输入您的学号"
              v-model="formMess.userId"
            />
          </div>
          <div class="item">
            <label for="place" class="label-text">丢失地点：</label>
            <input
              type="text"
              id="place"
              name="place"
              placeholder="请填入您丢失物品的地点"
              v-model="formMess.place"
            />
          </div>
          <div class="item">
            <label for="msgs" class="label-text">物品描述：</label>
            <input
              type="text"
              id="msgs"
              name="detail"
              placeholder="对失物进行简单描述,10字以内"
              v-model="formMess.msgs"
            />
          </div>
          <div class="item msgs-tu">
            <label for="imgs" class="label-text">物品图片：</label>
            <!-- <input type="file" id="imgs"> -->
            <img
              src="@/assets/icon/addPhoto.png"
              alt="请添加图片"
              title="请添加失物图片"
              id="imgs"
              @click="ImageInput"
            />
            <!-- 1.给input标签添加一个onchange事件：一旦选择文件发生变化则会触发   目的：获取选择图片的原始数据 -->
            <input
              type="file"
              id="hidFilePath"
              @change="uploadImg($event.target)"
              style="display: none"
            />
          </div>
        </section>
        <section class="form-btn">
          <div class="item">
            <button class="btn" @click="SubmitForm">提交信息</button>
          </div>
          <div class="item">
            <button class="btn" click="queryState()">查询状态</button>
          </div>
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
        // 学号
        userId: '',
        // 地点
        place: '',
        // 物品描述
        msgs: '',
        // 物品照片
        imgs: '',
      },
    }
  },
  methods: {
    // 点击触发上传文件按钮
    ImageInput() {
      const Input = document.querySelector('#hidFilePath')
      Input.click()
    },
    uploadImg(fileDOM) {
      console.log(fileDOM)
      var file = fileDOM.files[0], // 获取首个文件
        imageType = /^image\//, //规定文件类型
        reader = ''
      // 获取图片DOM
      var img = document.getElementById('imgs')
      // 文件是否为图片
      if (!imageType.test(file.type)) {
        alert('我们需要的是您失物的照片哦！')
        return
      }
      // 判断是否支持FileReader
      if (window.FileReader) {
        reader = new FileReader()
      } else {
        // IE9及以下不支持FileReader
        alert('很抱歉！您的设备不支持图片预览功能，如需该功能请更换您的设备！')
        return
      }
      // 读取完成
      reader.onload = function (event) {
        // 图片路径设置为读取的图片
        img.src = event.target.result
      }
      reader.readAsDataURL(file)
      img.alt = msgs.getAttribute('alt')
    },
    // 提交信息
    SubmitForm() {
      /* formData格式提交： */
      let files = document.querySelector('#hidFilePath').files[0]
      const imageType = /^image\//
      let formData = new FormData()
      if (!imageType.test(files.type || files.length <= 0)) {
        alert('请提供照片！')
      } else {
        this.formMess.imgs = files
        console.log(files)
      }
      for (var key in this.formMess) {
        formData.append(key, this.formMess[key])
      }
      if (this.formMess.msgs.trim() === '' || this.formMess.msgs.length === 0) {
        alert('物品描述不能为空！')
      } else if (
        this.formMess.userId.trim() === '' ||
        this.formMess.userId.length === 0
      ) {
        alert('物品名称不能为空!')
      } else if (
        this.formMess.place.trim() === '' ||
        this.formMess.place.length === 0
      ) {
        alert('请选择地址！')
      } else {
        console.log(this.formMess)
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

<style scoped src="@/assets/static/style/toFindtheOwner.css"></style>
