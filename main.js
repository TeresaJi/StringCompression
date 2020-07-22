var app = new Vue({
    el: '#app',
    data: {
        message: '',
        res:''
    },
    methods: {//回车键触发该方法
        zip: function () {
            this.res = '';//置空res，避免结果与上次结果连续拼接
            this.message = this.message.replace(/\s/g,"");//去掉字符串中的空格
            var L = this.message.length;
            var str = [this.message];
            for (i = 0;i < L; i++) {
                str[i] = this.message.charAt(i);
            };
            str;debugger;//将字符串中的字符分别放到数组后的结果
            var count = 1;
            for(t = 0; t < L; t){
                if(str[t].charAt(0) == str[t+1]){
                    count = count + 1;
                    str[t] = str[t].charAt(0) + count;
                    str.splice(t+1,1);
                    L = L - 1;
                }else{
                    str[t] = str[t].charAt(0) + count;
                    count = 1;
                    t = t + 1;
                }
            };
            str;debugger;//对数组中的元素去重后的结果
            for(i = 0; i < str.length; i++){
              this.res = this.res + str[i];
            };
            this.res;debugger;//将数组中的元素取出拼接为结果
        }
    }
})
