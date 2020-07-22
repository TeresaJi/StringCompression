var app = new Vue({
    el: '#app',
    data: {
        message: '',
        res:''
    },
    methods: {
        zip: function () {
            this.res = '';
            this.message = this.message.replace(/\s/g,"");//去掉字符串中的空格
            var L = this.message.length;
            var count = 1;
            var Str = '';
            for(t = 0; t+count <= L; t){
                if(this.message.charAt(t) == this.message.charAt(t+count)){
                    count = count + 1;
                }else{
                    Str += this.message.charAt(t) + count;
                    t = t + count;
                    count = 1;
                }
            };
            this.res = Str;
        }
    }
})
