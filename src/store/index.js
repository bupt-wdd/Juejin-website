import {createStore} from 'vuex'
import axios from 'axios'

const store = createStore({
    state(){
        return {
            usersLists:[],
            count: 0,
            cardList: {}
        }
    },
    mutations:{
        mGetArticleInfo: function(state, str){
            state.usersLists = state.usersLists.concat(str);
            state.count++;
        },
        mGetArticleById: function(state, obj){
            state.cardList = obj
        }
    },
    actions:{
        getArticleInfo: function(context){
            /*json文件
            axios.post('../public/datas.json', 20).then((res)=>{
                const left = context.state.count*20;
                const right = left + 20;
                const str = res.data.slice(left, right)
                context.commit('mGetArticleInfo', str)
            });
            */
           const pageNum = context.state.count;
           const pageSize = 20
           axios({
            url: '/path/findBySequence',
            method: 'get',
            params:{
                pageNum: pageNum,
                pageSize: pageSize
            }

            }).then((res)=>{
                if(res.status != 200) return alert('数据获取失败')
                const str = res.data.entity
                console.log(str);
                context.commit('mGetArticleInfo', str)
           })
        },
        getArticleById: function(context, idU){
            const id = parseInt(idU.id)
            console.log(typeof(id));
            axios({
                url: '/path/findById',
                method: 'get',
                params: {
                    id: id
                }
            }).then(res=>{
                const obj = res.data.entity;
                console.log(res.data.entity);
                context.commit('mGetArticleById', obj)
            }).catch(error=>{
                console.log(error);
            })
        }
    }
})

export default store