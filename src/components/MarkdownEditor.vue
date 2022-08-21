<!-- Edited on the basis of one example from Vue official website -->
<!-- https://cn.vuejs.org/examples/#markdown -->

<script>
import { marked } from "marked";
import { debounce } from "lodash";

export default {
  props: ["inputContent"],
  emits: ["update:inputContent"],
  data: () => ({}),
  computed: {
    output() {
      return marked(this.inputContent);
    },
  },
  methods: {
    update: debounce(function (event) {
      // this.inputContent = e.target.value;
      this.$emit('update:inputContent', event.target.value)
    }, 100),
  },
};
</script>

<template>
  <div class="editor">
    <textarea class="input" v-model="inputContent" @input="update" contenteditable="true"></textarea>
    <!-- <textarea
      class="input"
      v-model="inputContent"
      @input="$emit('update:inputContent', $event.target.value)"
    ></textarea> -->
    
    <div class="output" v-html="output"></div>
  </div>

  <div class="toolbar-footer">
    <div>字数: 1 行数: 52</div>
    <div>√同步滚动 回到顶部</div>
  </div>
</template>

<style>
body {
  margin: 0;
}

.editor {
  top: 77px;
  height: 66vh;
  display: flex;
  position: relative;
  zoom: 130%;
}

.input,
.output {
  color: black;
  background-color: white;
  overflow: auto;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}

.input {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  padding: 0.1rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  background-color: rgb(255, 232, 230);
}

blockquote {
  margin-left: 0px;
  border-left: 4px solid lightgrey;
  padding-left: 30px;
}

.toolbar-footer {
  box-sizing: border-box;
  background-color: white;
  position: fixed;
  width: 100%;
  height: 30px;
  bottom: 0;
  color: black;
  padding-left: 10px;
  padding-right: 10px;
  border-top: 1px solid #e1e4e8;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
