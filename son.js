var son = Vue.extend( {
    template: '#son',
    data: function () {
        return {
            arr: ['zhangsan', 'lisi', 'haha']
        }
    },
    methods:{
        showMyLove:function(item){
            this.$emit('send-name',item)
        },
        changeArr(arr){
            this.arr=arr;
        }
    }
})
Vue.component('list-item', son);
