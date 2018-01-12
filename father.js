var testVue = new Vue({
    el: '#app',
    data: function () {
        return {
            text:'你好深圳'
        }
    },
    created: function () {

    },
    computed: {

    },
    methods: {
        changeTxt:function(value){
            console.log(value);
            this.text = value;
        },
        sendSonData(){
            this.$refs.listItem.changeArr(['李四','王五','哈哈'])
        }

    }
})