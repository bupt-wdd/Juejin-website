<script>
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'
let fullscreenFlag = false;

export default {
  data() {
    return {};
  },
  methods: {
    fullScreenHandler() {
      console.log("selected!");
      const container = document.querySelector(".mark-nav");
      if (fullscreenFlag) {
        container.classList = "mark-nav visible";
        fullscreenFlag = !fullscreenFlag;
      } else {
        container.classList = "mark-nav";
        fullscreenFlag = !fullscreenFlag;
      }
    },
  },
  components: {
    ElConfigProvider,
  },
};
</script>

<template>
  <div class="toolbar">
    <div class="toolbar-btn">
      <button>H</button>
      <button>B</button>
      <button style="font-style: italic">I</button>

      <button>
        <el-icon size="2rem"><ArrowLeft /></el-icon>
      </button>
      <button>
        <el-icon size="2rem"><ArrowRight /></el-icon>
      </button>
      <button>
        <el-icon size="2rem"><Refresh /></el-icon>
      </button>
      <button>
        <el-icon size="2rem"><CopyDocument /></el-icon>
      </button>
      <button>
        <el-icon size="2rem"><Link /></el-icon>
      </button>
      <button>
        <el-icon size="2rem"><Picture /></el-icon>
      </button>
      <button>
        <el-icon size="2rem"><AddLocation /></el-icon>
      </button>
      <button>
        <el-icon size="2rem"><Operation /></el-icon>
      </button>
      <button>
        <el-icon size="2rem"><Share /></el-icon>
      </button>
    </div>

    <div class="toolbar-btn">
      <button>
        <el-icon size="2rem"><FullScreen @click="fullScreenHandler" /></el-icon>
      </button>
    </div>
  </div>
</template>

<style>
.toolbar {
  width: 100%;
  height: 40px;
  background-color: #f6f6f6;
  position: absolute;
  top: 60px;
  left: 0;
  border-bottom: 1px solid #e1e4e8;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  margin: 0 auto;
}

.toolbar * {
  display: inline-block;
  margin: 3px;
  width: auto;
  height: 25px;
  vertical-align: top;
}
.toolbar-btn button {
  background-color: transparent;
  font-size: 18px;
  width: 30px;
  cursor: pointer;
  border: transparent;
}
.el-icon {
  bottom: 3.5px;
}
</style>
