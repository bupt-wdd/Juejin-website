import {createStore} from 'vuex'
import axios from 'axios'

const store = createStore({
    state(){
        return {
            usersLists:[],
            count: 0,
            cardList: {},
            dataNum: true
        }
    },
    mutations:{
        mGetArticleInfo: function(state, data){
            let str = data.str
            if(data.clearU == 1){
                state.usersLists = str
                state.dataNum = true
            }else{
                state.usersLists = state.usersLists.concat(str);
            }
            if(str = '' || str == null || str.length < 20){
                state.dataNum = false
            }
            state.count++;
        },
        mGetArticleById: function(state, obj){
            state.cardList = obj
        },
        clearUsersLists: function(state){
            state.usersLists = [];
            state.dataNum = true
        }
    },
    actions:{
        getArticleInfo: function(context, data){
            /*json文件
            axios.post('../public/datas.json', 20).then((res)=>{
                const left = context.state.count*20;
                const right = left + 20;
                const str = res.data.slice(left, right)
                context.commit('mGetArticleInfo', str)
            });
            */
            const CancelToken = axios.CancelToken;
            // CancelToken.source()是工厂方法，返回一个包含token和cancel方法的对象
            const source = CancelToken.source();

            axios.get('/path/findBySequence', {
            cancelToken: source.token
            }).catch(function (thrown) {
            if (axios.isCancel(thrown)) {
                console.log('Request canceled', thrown.message);
            } else {
                // handle error
            }
            });
            // 手动取消请求
            source.cancel('Operation canceled by the user.');
            
           console.log(data.sort);
           const pageNum = context.state.count;
           const pageSize = 10
           if(context.state.dataNum || data.clearU==1){
                console.log(data);
                data.cancel
                axios({
                url: '/path/findBySequence',
                method: 'get',
                params:{
                    pageNum: pageNum,
                    pageSize: pageSize,
                    sort: data.sort
                }

                }).then((res)=>{
                    if(res.status != 200) return alert('数据获取失败')
                    const str = res.data.entity
                    console.log(str);
                    context.commit({
                        type: 'mGetArticleInfo',
                        str : str,
                        clearU: data.clearU
                    })
            })
           }
           
        },
        getArticleById: function(context, idU){
            const id = parseInt(idU.id)
            axios({
                url: '/path/findById',
                method: 'get',
                params: {
                    id: id
                }
            }).then(res=>{
                const obj = res.data.entity;
                context.commit('mGetArticleById', obj)
            }).catch(error=>{
                console.log(error);
            })
        }
    }
})

export default store
