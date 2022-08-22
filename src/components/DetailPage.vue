<script>
import DetailAside from "./DetailAside.vue";
import DetailContent from "./DetailContent.vue";
import ArticleSideButtons from "./ArticleSideButtons.vue";
import DetailComments from "./DetailComments.vue";

export default {
  data() {
    return {
<<<<<<< HEAD
=======
      refreshed: false,
>>>>>>> f509068b65bca7ea6c241619d3c023ded1838a02
      authorName: "摸鱼的汤姆",
      publishDate: new Date().toLocaleString(),
      articleTitle: "前端请装上这个Chrome插件",
      articleContent: `

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab1f393e46654a0e8bc08e5dd1e86888~tplv-k3u1fbpfcp-watermark.image?)  

chrome 浏览器上有很多插件，我最喜欢的只有这一个，因为它解决了我工作中的很多麻烦。相信我，装上它，你的工作会容易很多。

后端不愿意造数据的时候，我用它
接口返回的数据不理想的时候，我用它
测试边界值的时候，我用它
复现 bug 的时候，我用它

铛～铛～铛～， 铛！ 它就是ajax-interceptor


我是怎么发现它的？
刚开始写前后端分离项目时，我碰到了一个脾气不太好的后端搭档，他总是不愿意配合造数据，于是我萌生了要写一个响应拦截器的想法，在查资料实现的过程中，发现了这个插件。
到现在，我用这个插件有2-3年了，真是爱不释手啊！
我是怎么发现它的？

# 一级标题A
## 二级标题
### 三级标题
- 列表项1
- 列表项2
- 列表项3
> 这是一段引用

​\`\`\`python
def detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    post.body = markdown.markdown(post.body,
                                  extensions=[
                                      'markdown.extensions.extra',
                                      'markdown.extensions.codehilite',
                                      'markdown.extensions.toc',
                                  ])
    return render(request, 'blog/detail.html', context={'post': post})
​\`\`\`

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/70dbd2218b794cdabf86ef9dda96af7b~tplv-k3u1fbpfcp-watermark.image?)

# 一级标题B
## 二级标题
### 三级标题
- 列表项1
- 列表项2
- 列表项3
> 这是一段引用
# 一级标题C
## 二级标题
### 三级标题
- 列表项1
- 列表项2
- 列表项3
> 这是一段引用
# 一级标题D
## 二级标题
### 三级标题
- 列表项1
- 列表项2
- 列表项3
> 这是一段引用
`,
    };
  },
  components: {
    DetailAside,
    DetailContent,
    ArticleSideButtons,
    DetailComments,
<<<<<<< HEAD
  }
=======
  },
>>>>>>> f509068b65bca7ea6c241619d3c023ded1838a02
};
</script>

<template>
  <ArticleSideButtons />

  <div class="article-page">
<<<<<<< HEAD
    <DetailAside :articleContent="articleContent" />
=======
    <DetailAside
      :articleContent="articleContent"
    />
>>>>>>> f509068b65bca7ea6c241619d3c023ded1838a02
    <DetailContent
      :articleTitle="articleTitle"
      :articleContent="articleContent"
      :authorName="authorName"
      :publishDate="publishDate"
    />
    <DetailComments />
  </div>
</template>

<style>
.article-page {
  position: relative;
  left: calc(50% - 200px);
}
</style>
