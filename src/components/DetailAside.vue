<script>
import { debounce } from "lodash";
<<<<<<< HEAD
=======
import { throttle } from "lodash";
>>>>>>> f509068b65bca7ea6c241619d3c023ded1838a02

let currHeight = 0;
let activeIndex = 0;
let prevIndex = 0;

<<<<<<< HEAD
// let flag = false;

export default {
  created() {
    this.h1Tags = this.captureTags();
  },
  props: ["articleContent"],
=======
export default {
  props: ["articleContent"],
  created() {
    this.h1Tags = this.captureTags();
  },
>>>>>>> f509068b65bca7ea6c241619d3c023ded1838a02
  data() {
    return {
      h1Tags: [],
      tagHeights: [],
      catalogs: [],
      componentKey: 1,
      flag: false,
    };
  },
  methods: {
    captureTags() {
      let tags = document.querySelectorAll(".content h1");
<<<<<<< HEAD
      // get height of the tags
      for (let i = 0; i < tags.length; i++) {
        this.tagHeights.push(tags[i].offsetTop);
=======

      for (let i = 0; i < tags.length; i++) {
        this.tagHeights.push(tags[i].offsetTop);  // get height of the tags
>>>>>>> f509068b65bca7ea6c241619d3c023ded1838a02
      }
      return tags;
    },
    updateHeight() {
      let scrollTop = document.documentElement.scrollTop;
      currHeight = scrollTop;
    },
    getActiveIndex() {
      let arr = this.tagHeights;
      // check boundary
      if (arr[0] > currHeight) {
        return (activeIndex = 0);
      } else if (arr[arr.length - 1] < currHeight) {
        return (activeIndex = arr.length - 1);
      }
      // search in array
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < currHeight && arr[i + 1] > currHeight) {
          return (activeIndex = i);
        }
      }
    },
    updateHighlight() {
      this.updateHeight();
      const currIndex = this.getActiveIndex();

      // initialize the data of catalogs
      if (!this.flag) {
<<<<<<< HEAD
        // rerun
        this.catalogs = document.querySelectorAll(".h1tag");
        console.log(this.flag);
=======
        this.catalogs = document.querySelectorAll(".h1tag");
        // console.log(this.flag);
>>>>>>> f509068b65bca7ea6c241619d3c023ded1838a02
        this.flag = true;
      }

      if (currIndex !== prevIndex) {
        // reverse prev
        this.h1Tags[prevIndex].classList = "content";
        this.catalogs[prevIndex].classList = "h1tag";
        // set active
        this.h1Tags[currIndex].classList = "content-active";
        this.catalogs[currIndex].classList = "h1tag-activedTag";
        prevIndex = currIndex;
      } else {
        this.h1Tags[currIndex].classList = "content-active";
        this.catalogs[currIndex].classList = "h1tag-activedTag";
      }
    },
  },
  mounted() {
<<<<<<< HEAD
=======
    // get h1 tags
>>>>>>> f509068b65bca7ea6c241619d3c023ded1838a02
    this.h1Tags = this.captureTags();
    // get <li> tags in the catalog
    this.catalogs = document.querySelectorAll(".h1tag");

    window.addEventListener(
      "scroll",
      debounce(this.updateHighlight, 300),
      true
    );
  },
};
</script>

<template>
  <div class="d-aside">
    <div class="user">
      <div class="user-content1">
        <div class="user-img"></div>
        <div class="user-m">
          <span>摸鱼的汤姆</span><br />
          <div class="span">生如逆旅，一苇以航</div>
        </div>
      </div>

      <div class="uesr-content2">
        <div style="margin-top: 15px">获得点赞 108</div>
        <br />
        <div>文章被阅读 7,226</div>
      </div>
    </div>

    <div class="install">
      <div class="middle">
        <img
          src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/article.9d13ff7.png"
          style="width: 50px"
          alt=""
          class="middle-img"
        />
        <div class="middle-text">
          <div>下载稀土掘金APP</div>
          <div style="font-size: 14px; padding-top: 8px">
            一个帮助开发者成长的社区
          </div>
        </div>
      </div>
    </div>

    <div class="aside-img">
      <img
        src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/default.640d9a7.png"
        style="margin-top: 20px; width: 300px; height: 248.7px"
        alt=""
      />
    </div>

    <div class="related-psg">
      <div
        style="
          color: black;
          font-size: 16px;
          padding-bottom: 15px;
          border-bottom: 1px solid lightgray;
        "
      >
        相关文章
      </div>

      <ul>
        <li>
          <div class="psg-title">Chrome浏览器必备插件推荐</div>
          <div>10点赞 · 4评论</div>
        </li>
        <li>
          <div class="psg-title">前端妹子应该掌握的javascript基础</div>
          <div>51点赞 · 34评论</div>
        </li>
        <li>
          <div class="psg-title">
            「2021」高频前端面试题汇总之JavaScript篇（上）
          </div>
          <div>2344点赞 · 93评论</div>
        </li>
      </ul>
    </div>
  </div>

  <div class="menu">
    <div
      style="
        color: black;
        font-size: 16px;
        padding-bottom: 15px;
        border-bottom: 1px solid lightgray;
      "
    >
      目录
    </div>

    <ul>
      <li
        class="h1tag"
        v-for="(item, index) in this.h1Tags"
        :key="componentKey"
      >
        {{ index + 1 }}. {{ item.innerHTML }}
      </li>
    </ul>
  </div>
</template>

<style>
.d-aside {
  position: relative;
  left: 500px;
  top: 80px;
  height: 500px;
}
.user {
  padding-top: 5px;
  width: 300px;
  height: 183.97px;
  background-color: #fff;
}
.user-img {
  background-image: url(https://p3-passport.byteacctimg.com/img/user-avatar/0625cb3986c860b6a132665a4b5bdf66~300x300.image);
  background-size: cover;
  margin-top: 10px;
  width: 48px;
  height: 48px;
  border-radius: 50px;
  border: 1px black solid;
}
.user-m {
  margin-top: 10px;
  margin-left: 10px;
  font-size: 16px;
}
.span {
  font-size: 14px;
  margin-top: 7px;
}

.user-content1 {
  display: flex;
  flex-direction: row;
  width: 260px;
  height: 77.98px;
  margin: 10px auto;
  border-bottom: 1px rgba(168, 161, 161, 0.726) solid;
}
.hr-width {
  width: 260px;
}
.uesr-content2 {
  margin-left: 20px;
  font-size: 15px;
}
.install {
  margin-top: 20px;
}
.middle {
  width: 280px;
  height: 90px;
  background-color: #fff;
  padding-left: 20px;
  display: flex;
  align-items: center;
  font-size: 16px;
}
.middle-text {
  width: 168px;
  height: 50px;
  flex-direction: column;

  margin-left: 20px;
}

.related-psg {
  background-color: white;
  margin-top: 20px;
  width: 260px;
  padding: 20px;
  height: auto;
}
.related-psg li {
  margin-top: 15px;
  cursor: pointer;
  line-height: 1.8rem;
}
.psg-title {
  font-size: 14px;
  color: black;
}
.psg-title:hover {
  color: rgb(41, 41, 226);
}

.menu {
  position: sticky;
  top: 0px;
  background-color: white;
  margin-top: 470px;
  left: calc(50% + 300px);
  width: 260px;
  padding: 20px;
  height: auto;
  z-index: 99;
}
.h1tag {
  margin-top: 15px;
  color: black;
  font-family: Microsoft YaHei;
  font-size: 16px;
  /* font-weight: 600; */
  padding: 5px;
}
.h1tag-activedTag {
  padding: 5px;
  margin-top: 15px;
  color: black;
  font-family: Microsoft YaHei;
  font-size: 16px;
  /* font-weight: 600; */
  background-color: rgb(204, 234, 252);
  color: black;
  border-left: 4px solid blue;
}
</style>
