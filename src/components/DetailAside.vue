<script>
import { debounce } from "lodash";
import { throttle } from "lodash";

let currHeight = 0;
let activeIndex = 0;
let prevIndex = 0;

export default {
  props: ["articleContent"],
  created() {
    this.h1Tags = this.captureTags();
  },
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

      for (let i = 0; i < tags.length; i++) {
        this.tagHeights.push(tags[i].offsetTop);  // get height of the tags
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
        this.catalogs = document.querySelectorAll(".h1tag");
        // console.log(this.flag);
        this.flag = true;
      }

      // refresh if appeared duplicated tags
      const activedNum1 = document.querySelectorAll('.content-active').length;
      const activedNum2 = document.querySelectorAll('.h1tag-activedTag').length;
      if (activedNum1 >= 2 || activedNum2 >= 2){
        console.log(activedNum1, activedNum2);
        location.reload();
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
    // get h1 tags
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
          <span>???????????????</span><br />
          <div class="span">???????????????????????????</div>
        </div>
      </div>

      <div class="uesr-content2">
        <div style="margin-top: 15px">???????????? 108</div>
        <br />
        <div>??????????????? 7,226</div>
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
          <div>??????????????????APP</div>
          <div style="font-size: 14px; padding-top: 8px">
            ????????????????????????????????????
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
        ????????????
      </div>

      <ul>
        <li>
          <div class="psg-title">Chrome???????????????????????????</div>
          <div>10?????? ?? 4??????</div>
        </li>
        <li>
          <div class="psg-title">???????????????????????????javascript??????</div>
          <div>51?????? ?? 34??????</div>
        </li>
        <li>
          <div class="psg-title">
            ???2021?????????????????????????????????JavaScript????????????
          </div>
          <div>2344?????? ?? 93??????</div>
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
      ??????
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
