<script>
export default {
  data() {
    return {
      commentAuthorName: "前端学徒001",
      publishDate: new Date().toLocaleString(),
      commentContent: `chrome 浏览器上有很多插件，我最喜欢的只有这一个，因为它解决了我工作中的很多麻烦。相信我，装上它，你的工作会容易很多。`,
    };
  },
};
</script>

<template>
  <div class="comment-text">
    <h1>评论</h1>

    <div class="user-image">
      <img
        src="https://p3-passport.byteacctimg.com/img/user-avatar/0625cb3986c860b6a132665a4b5bdf66~300x300.image"
        alt="{{commentAuthorName}}"
        style="
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px grey solid;
        "
      />
      <textarea
        class="comment-input"
        placeholder=" 输入评论（Enter换行，Ctrl+Enter发送)"
      ></textarea>
    </div>

    <br/>
    <br/>

    <div class="user-image">
      <img
        src="https://p3-passport.byteacctimg.com/img/user-avatar/0625cb3986c860b6a132665a4b5bdf66~300x300.image"
        alt="{{commentAuthorName}}"
        style="
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px grey solid;
        "
      />
      <div class="user-info">
        <div style="font-size: 16px; margin-bottom: 6px; color: black;">
          {{ commentAuthorName }} # 前端工程师
        </div>
        <div>{{ publishDate }}</div>
      </div>
    </div>
    <div class="comment-content" v-html="commentContent"></div>
  </div>
</template>

<style>
.comment-text {
  /* position: absolute; */
  position: relative;
  width: 820px;
  /* top: 84px; */
  margin-top: 20px;
  top: -420px;
  right: 420px;
  height: auto;
  padding: 40px;
  padding-top: 20px;
  background-color: #fff;
}
.user-image {
  width: 756px;
  height: 48px;
  color: grey;
  display: flex;
  margin-top: 30px;
  /* padding-bottom: 20px; */
}
.user-info {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 48px;
  font-size: 13px;
  margin-left: 20px;
  /* margin-top: -5px; */
}
.comment-input {
  margin-left: 20px;
  width: 100%;
  height: 60px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  background-color: rgb(243, 243, 246);
  padding: 5px;
  border: none;
}
.comment-content {
  margin-left: 60px;
  color: rgb(70, 70, 70);
  line-height: 1.75;
  font-weight: 400;
  font-size: 16px;
}
</style>
