<script>
import MarkdownToolbar from "../components/MarkdownToolbar.vue";
import MarkdownEditor from "../components/MarkdownEditor.vue";
import MarkdownTop from "../components/MarkdownTop.vue";

let articleTitle = localStorage.getItem("title");
let articleContent = localStorage.getItem("content");
articleTitle = articleTitle ? articleTitle : "";
articleContent = articleContent ? articleContent : "# hello";

export default {
  created() {
    this.reload();
  },
  data() {
    return {
      inputTitle: articleTitle,
      inputContent: articleContent,
    };
  },
  components: {
    MarkdownTop,
    MarkdownToolbar,
    MarkdownEditor,
  },
  methods: {
    onSubmitHandler() {
      const ans = confirm("Submit?");
      if (ans) {
        console.log("Submitted successfully");
        alert("'" + this.inputTitle + this.inputContent + "'")
        // clear local storage
        localStorage.setItem("title", "");
        localStorage.setItem("content", "");
        // save new data to 'backend'
        

        // refresh in next use
        localStorage.setItem("HomeState", 1);
        // create a new page, and navigate to the new article page
        this.$router.push("/");
      }
    },
    saveToDraftHandler() {
      const ans = confirm("Saved to draft?");
      if (ans) {
        console.log("Saved to draft successfully (in local storage).");
        // save in local storage
        localStorage.setItem("title", this.inputTitle);
        localStorage.setItem("content", this.inputContent);
        // refresh in next use
        localStorage.setItem("HomeState", 1);
        // And navigate to home
        this.$router.push("/");
      }
    },
    reload() {
      // refresh the page to update localstorage
      let State = localStorage.getItem("HomeState");
      if (State == 1) {
        localStorage.setItem("HomeState", 0);
        location.reload();
      }
    },
  },
};
</script>

<template>
  <MarkdownTop
    v-model:inputTitle="inputTitle"
    :onSubmit="onSubmitHandler"
    :onSave="saveToDraftHandler"
  />
  <MarkdownToolbar />
  <!-- <div v-html="output"></div> -->
  <MarkdownEditor v-model:inputContent="inputContent" />
</template>
