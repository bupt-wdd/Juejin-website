<script>
import TopNavUser from "./TopNavUser.vue";

export default {
  props: ["inputTitle", "onSubmit", "onSave"],
  emits: ["update:inputTitle"],
  data() {
    return {};
  },
  components: {
    TopNavUser,
  },
  methods: {},
};
</script>

<template>
  <div class="mark-nav visible">
    <header class="mark-top-nav">
      <ul class="list-nav">
        <input
          class="input-title"
          placeholder="输入文章标题..."
          v-model="inputTitle"
          @input="$emit('update:inputTitle', $event.target.value)"
        />
      </ul>

      <ul class="right-nav">
        <li style="font-size: 16px; margin-right: 1rem">保存成功</li>
        <li>
          <button class="publish draft" @click="onSave">草稿箱</button>
        </li>
        <li><button class="publish" @click="onSubmit">发布</button></li>
        <li>
          <router-link class="switch" to="/">
            <el-icon size="1.5rem" style="margin: 10px; top: 0px"
              ><Switch
            /></el-icon>
          </router-link>
        </li>
        <li>
          <TopNavUser></TopNavUser>
        </li>
      </ul>
    </header>
  </div>
</template>

<style>
.mark-nav {
  width: 100%;
  top: 1px;
  border-bottom: 1px solid #f1f1f1;
  background-color: #fff;
  position: fixed;
  transform: translate3d(0, -100%, 0);
  transition: all 0.2s;
  z-index: 99;
}
.visible {
  transform: translateZ(0);
  position: fixed;
  top: 0;
  left: 0;
}
.mark-top-nav {
  display: flex;
  height: 60px;
  width: 100%;
}
.input-title {
  height: 50px;
  width: 50%;
  font-size: 24px;
  border: transparent;
  margin-left: 20px;
}

.publish {
  background-color: #1e80ff;
  width: auto;
  padding: 0 24px;
  height: 37px;
  color: #fff;
  border: none;
  font-size: 16px;
  border-radius: 4px;
  text-align: center;
  margin: 0 10px;
  top: 3.2rem;
}
.publish:active {
  background-color: #0b75ff;
}
.draft {
  background-color: white;
  color: #1e80ff;
  border: 1px solid #1e80ff;
}
.switch {
  background-color: transparent;
  color: #1e80ff;
  border: transparent;
}

.list-nav {
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  justify-content: space-between;
}
.left-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.right-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
}

@media screen and (max-width: 720px) {
  .memberVip {
    display: none;
  }
  .showBtn {
    display: none;
  }
}
@media (max-width: 640px) {
  .logo {
    background-image: url("https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg");
    width: 31px;
    height: 24px;
    margin-right: 2px;
  }
}
</style>
