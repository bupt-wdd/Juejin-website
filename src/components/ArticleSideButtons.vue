<script></script>

<template>
  <div class="side-buttons">
    <button>
      <el-icon class="button-icon" size="2rem"><Pointer /></el-icon>
    </button>
    <button>
      <el-icon class="button-icon" size="2rem"><Comment /></el-icon>
    </button>
    <button>
      <el-icon class="button-icon" size="2rem"><CollectionTag /></el-icon>
    </button>
    <button>
      <el-icon class="button-icon" size="2rem"><Edit /></el-icon>
    </button>
    <button>
      <el-icon class="button-icon" size="2rem"><Share /></el-icon>
    </button>
  </div>
</template>

<style>
.side-buttons {
  display: flex;
  position: fixed;
  top: 33%;
  left: 15px;
  flex-direction: column;
  z-index: 99;
}
.side-buttons button {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  margin: 12px;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 4%);
}
.side-buttons button:hover {
  cursor: pointer;
}
.side-buttons button:active {
  background-color: rgb(236, 236, 236);
}
.button-icon {
  margin-left: 8px;
  margin-top: 10px;
  text-align: center;
}
</style>
