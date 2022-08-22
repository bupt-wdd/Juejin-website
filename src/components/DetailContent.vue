<script>
import { marked } from "marked";
// import Prism from "prismjs";

export default {
  props: ["articleTitle", "articleContent", "publishDate", "authorName"],
  data() {
    return {};
  },
  computed: {
    output() {
      return marked(this.articleContent);
      // Prism.manual = true;
      // Prism.highlightAll();
    },
  },
};
</script>

<template>
  <div class="d-text">
    <h1 class="content-title">{{ articleTitle }}</h1>

    <div class="user-image">
      <img
        src="https://p3-passport.byteacctimg.com/img/user-avatar/0625cb3986c860b6a132665a4b5bdf66~300x300.image"
        alt="{{authorName}}"
        style="
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px grey solid;
        "
      />
      <div class="user-info">
        <div style="font-size: 16px; margin-bottom: 6px">{{ authorName }}</div>
        <div>{{ publishDate }}</div>
      </div>
    </div>

    <!-- <br /> -->

    <div class="content" v-html="output"></div>
  </div>
</template>

<style>
.content-title {
  margin: 0 0 1.667rem;
  font-size: 2.667rem;
  font-weight: 600;
  line-height: 1.31;
  color: #252933;
}
.d-text {
  position: relative;
  width: 820px;
  top: -1150px;
  right: 420px;
  height: auto;
  padding: 40px;
  background-color: #fff;
}
.user-image {
  width: 756px;
  height: 48px;
  color: grey;
  display: flex;
  margin-top: 25px;
}
.user-info {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 48px;
  font-size: 13px;
  margin-left: 20px;
  margin-top: -2px;
}

.content {
  color: black;
  line-height: 1.75;
  font-weight: 400;
  font-size: 16px;
}
.content h1{
  font-size: xx-large;
  font-weight: 800;
}
.content-active {
  color: #1e80ff;
  background-color: lightskyblue;
  border-left: 4px solid blue;
}
.content img {
  max-width: 820px;
}
</style>
