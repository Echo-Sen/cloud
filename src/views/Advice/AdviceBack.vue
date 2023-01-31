<template>
  <div class="container">
    <header>
      <div class="log">
        <h4>
          ctq
          <a href="#/advice">
            <img src="@/assets/icon/会徽.png" alt="logo" />
          </a>
        </h4>
      </div>
      <label class="lable-title">
        <h3>建议反馈</h3>
      </label>
      <hr>
    </header>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="所属校区" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择所属校区">
          <el-option label="南岸校区" value="南岸校区"></el-option>
          <el-option label="兰花湖校区" value="兰花湖校区"></el-option>
          <el-option label="江北校区" value="江北校区"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="您的建议" prop="advice">
        <el-input type="textarea" v-model="ruleForm.advice"></el-input>
      </el-form-item>
      <el-form-item label="联系方式" prop="contact">
        <el-input v-model="ruleForm.contact"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        // 联系方式
        contact: '',
        // 所属区域
        region: '',
        // 建议
        advice: '',
      },
      rules: {
        contact: [
          {
            required: true,
            message: '请输入您的学号或其他联系方式，方便我们及时回复',
            trigger: 'blur',
          },
          {
            min: 5,
            max: 20,
            message: '长度在 5 到 20 个字符',
            trigger: 'blur',
          },
        ],
        region: [
          { required: true, message: '请选择所属校区', trigger: 'change' },
        ],
        advice: [
          { required: true, message: '请填写您的建议', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          // 发请求
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>
<style scoped>
.container {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.2rem auto;
  padding: 1rem 0 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  background: url(@/assets/icon/test1.jpg) no-repeat;
  background-size: cover;
}
.container header {
  position: relative;
  width: 100%;
  margin-top: 0.5rem;
}
.container header div {
  position: absolute;
  top: -1rem;
  left: 0.8rem;
  width: 2rem;
  height: 2rem;
  font-size: 0;
}
.container header div img {
  width: 100%;
  height: 100%;
}
.lable-title {
  text-align: center;

  font-weight: 600;
  line-height: 1em;
}
.lable-title h3 {
  margin-top: 1rem;
  font-weight: 900;
  font-size: 0.8rem;
}
</style>
