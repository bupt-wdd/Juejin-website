import {createStore} from 'vuex'
import axios from 'axios'

const store = createStore({
    state(){
        return {
            usersLists:[
                {
                    writer: '掘金酱',
                    date: '15天',
                    
                    title: '8月更文活动来啦！携手创作，共同成长！！',
                    record: '看到这个标题，你肯定觉得离谱。怎么会有公司规定所有接口都用Post，是架构菜还是开发菜。这可不是夸大其词，这样的公司不少。在特定的情况下，规定使用Post可以减少不少的麻烦，一起看看。',
                    picture: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a0f037462f754fbdb8b0a11e6c4a8e8d~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
                    viewNums: '4.4w',
                    prefer: '258',
                    comments: '123',
                    articleUrl: 'javascript:void(0)',
                    articleAdver: 0, //0 x | 1 广告
                },
                {
                    writer: '掘金酱',
                    date: '15天',
                    
                    title: '8月更文活动来啦！携手创作，共同成长！！',
                    record: '看到这个标题，你肯定觉得离谱。怎么会有公司规定所有接口都用Post，是架构菜还是开发菜。这可不是夸大其词，这样的公司不少。在特定的情况下，规定使用Post可以减少不少的麻烦，一起看看。',
                    picture: '',
                    viewNums: '4.4w',
                    prefer: '258',
                    comments: '123',
                    articleUrl: 'javascript:void(0)',
                    articleAdver: 0, //0 x | 1 广告
                },
                {
                    writer: '掘金酱',
                    date: '15天',
                    
                    title: '8月更文活动来啦！携手创作，共同成长！！',
                    record: '看到这个标题，你肯定觉得离谱。怎么会有公司规定所有接口都用Post，是架构菜还是开发菜。这可不是夸大其词，这样的公司不少。在特定的情况下，规定使用Post可以减少不少的麻烦，一起看看。',
                    picture: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a0f037462f754fbdb8b0a11e6c4a8e8d~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
                    viewNums: '4.4w',
                    prefer: '258',
                    comments: '123',
                    articleUrl: 'javascript:void(0)',
                    articleAdver: 1, //0 x | 1 广告
                },
            ]
        }
    },
    actions:{
        /*
        可获取到掘金数据，但数据有点复杂
        https://api.juejin.cn/user_api/v1/author/recommend?aid=2608&uuid=7087476095943378467&category_id=&cursor=0&limit=20

        getJuejin: function(context){
            axios.get('/path/user_api/v1/author/recommend?aid=2608&uuid=7087476095943378467&category_id=&cursor=0&limit=20').then((res)=>{
                console.log(res);
            })
        }
        */
    }
})

export default store