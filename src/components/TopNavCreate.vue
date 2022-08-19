<script>
let createMenuOpened;

export default {
  data() {
    return { createMenuOpened: false };
  },
  methods: {
    onClickCreate() {
      this.createMenuOpened = !this.createMenuOpened;
    },
  },
};
</script>

<template>
  <div>
    <button class="createBtn">
      创作者中心 |
      <button @click="onClickCreate">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="unfold12-icon"
          data-v-61b102b0=""
        >
          <path
            d="M2.45025 4.82383C2.17422 4.49908 2.40501 4 2.83122 4H9.16878C9.59499 4 9.82578 4.49908 9.54975 4.82382L6.38097 8.5518C6.1813 8.7867 5.8187 8.7867 5.61903 8.5518L2.45025 4.82383Z"
            fill="white"
            data-v-61b102b0=""
          ></path>
        </svg>
      </button>
      
      <div v-if="createMenuOpened" class="create-menu">
        <ul>
          <li><router-link class="" to="/markdown">写文章</router-link></li>
          <li><router-link class="" to="/">发沸点</router-link></li>
          <li><router-link class="" to="/">写代码</router-link></li>
        </ul>
      </div>
    </button>
  </div>
</template>

<style>
.createBtn {
  background-color: #1e80ff;
  width: 115px;
  padding: 0 12px;
  height: 37px;
  color: #fff;
  border: none;
  border-radius: 4px;
  /* text-align: center; */
  position: relative;
  margin: 0 24px;
  margin-right: 12px;
}
.createBtn button {
  width: 10px;
  height: 37px;
  background-color: transparent;
  border: none;
}
.createBtn button:active {
  background-color: #1e76e9;
  border: none;
}
svg {
  position: relative;
  right: 5px;
}

.create-menu {
  position: relative;
  display: flex;
  color: #000;
  width: 115px;
  border: 1px solid #86909c;
  right: 1rem;
  padding: 0.417rem 0;
  box-shadow: 0 0 24px rgb(81 87 103 / 16%);
  border-radius: 6px;
}
.create-menu li {
  width: 115px;
  height: 24px;
  background-color: white;
  font-family: Microsoft YaHei;
  font-size: 1rem;
  text-align: center;
  border: none;
}
.create-menu li:hover {
  background-color: rgb(236, 236, 236);
}
.create-menu li:active {
  background-color: rgb(219, 219, 219);
}
</style>
