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
    this.Reload();
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
        console.log(this.inputTitle, this.inputContent);
        // clear local storage
        localStorage.setItem("title", "");
        localStorage.setItem("content", "");
        // save new data to 'backend'

        // create a new page, and navigate to the new article page
        localStorage.setItem("HomeState", 1);
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
        // And navigate to home
        localStorage.setItem("HomeState", 1);
        this.$router.push("/");
      }
    },
    Reload() {
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
  <!-- <div>{{inputTitle}}, {{inputContent}}</div> -->
  <MarkdownEditor v-model:inputContent="inputContent" />
</template>
