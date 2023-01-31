<template>
  <div class="content" id="content">
    
    <header>
      <div class="log">
        <h4>
          ctq
          <a href="mainplatform.html">
            <img src="@/assets/icon/会徽.png" alt="logo" />
          </a>
        </h4>
      </div>
      <label class="lable-title">
        <h1>找失物</h1>
      </label>
      <span class="lable-hr"></span>
    </header>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="photo" label="物品照片" :width="WindowWidth">
        <template slot-scope="scope">
          <img style="width: 80px; height: 100px" :src="scope.row.photo" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="联系方式" :width="WindowWidth">
      </el-table-column>
      <el-table-column prop="address" label="捡到地址" :width="WindowWidth">
      </el-table-column>
      <el-table-column prop="megs" label="物品描述" :width="WindowWidth">
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 搜索框数据
      restaurants: [],
      state1: '',
      state2: '',
      // 数据渲染
      tableData: [
        {
          photo:
            'https://olrando.oss-cn-chengdu.aliyuncs.com/img/image-20230111191943428.png',
          name: '2021413598',
          address: '工商大学南岸校区南一106宿舍',
          megs: '这是物品的描述',
        },
        {
          photo:
            'https://olrando.oss-cn-chengdu.aliyuncs.com/img/%E7%AC%94.jpg',
          name: '2021413598',
          address: '工商大学南岸校区南一106宿舍',
          megs: '这是物品的描述',
        },
        {
          photo:
            'https://olrando.oss-cn-chengdu.aliyuncs.com/img/%E7%AC%94.jpg',
          name: '2021413598',
          address: '工商大学南岸校区南一106宿舍',
          megs: '这是物品的描述',
        },
        {
          photo:
            'https://olrando.oss-cn-chengdu.aliyuncs.com/img/%E8%80%B3%E6%9C%BA.jpg',
          name: '2021413598',
          address: '工商大学南岸校区南一106宿舍',
          megs: '这是物品的描述',
        },
        {
          photo:
            'https://olrando.oss-cn-chengdu.aliyuncs.com/img/%E9%9E%8B%E5%AD%90.jpg',
          name: '2021413598',
          address: '工商大学南岸校区南一106宿舍',
          megs: '这是物品的描述',
        },
        {
          photo:
            'https://olrando.oss-cn-chengdu.aliyuncs.com/img/%E6%B0%B4%E6%9D%AF.jpg',
          name: '2021413598',
          address: '工商大学南岸校区南一106宿舍',
          megs: '这是物品的描述',
        },
      ],
      windowWidth: document.documentElement.clientWidth, //实时屏幕宽度
    }
  },
  computed: {
    WindowWidth() {
      return this.windowWidth / 4
    },
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        window.fullWidth = document.documentElement.clientWidth
        this.windowWidth = window.fullWidth // 宽
      })()
    }
  },
}
</script>

<style
  scoped
  src="@/assets/static/style/cqt_helper_volunteer_shine.css"
></style>

<style scoped src="@/assets/static/style/reset.css"></style>

<style scoped>
.content {
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
.content header {
  position: relative;
  width: 100%;
  margin-top: 0.5rem;
}
.content header div {
  position: absolute;
  top: -1rem;
  left: 0.8rem;
  width: 2rem;
  height: 2rem;
  font-size: 0;
}
.content header div img {
  width: 100%;
  height: 100%;
}

</style>
