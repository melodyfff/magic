<template>
    <div id="example">
        <span>Message: {{ msg }}</span>

        <h3>计算属性例子</h3>
        <p><b>Original</b> message: "{{ message }}"</p>
        <p><b>Computed</b> reversed message: "{{ reversedMessage }}"</p>
        <p><b>Methods</b> Reversed message: "{{ reversedMessage2() }}"</p>

        <h3>侦听器Watch</h3>
        <p>
            Ask a yes/no question:
            <input v-model="question">
        </p>
        <p>{{ answer }}</p>        
    </div>
</template>



<script>
    import _ from "lodash";
    import axios from 'axios'    
    export default {
        name: 'ComponetTest',  
        // same as :  data(){...}      
        data: function(){
            return {                
                message: 'Hello World',
                question:'',
                answer: 'I cannot give you an answer until you ask a question!'
            }
        },
        props: {
            msg: String,           
        },
        watch: {
            // 如果 `question` 发生改变，这个函数就会运行
            question: function (newQuestion, oldQuestion) {
                console.log(newQuestion)
                console.log(oldQuestion)
                this.answer = 'Waiting for you to stop typing...'
                this.debouncedGetAnswer()
            }            
        },
        created() {
            // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
            // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
            // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
            // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
            // 请参考：https://lodash.com/docs#debounce
            this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)            
        },
        methods: {
            reversedMessage2: function () {
                return this.message.split('').reverse().join('')
            },
            getAnswer(){
                if(this.question.indexOf('?')===-1){
                    this.answer = 'Questions usually contain a question mark. ;-)'
                    return
                }
                this.answer = 'Thinking...'      
                var vm = this
                axios.get('https://yesno.wtf/api',{timeout:60000})
                    .then(function (response) {
                    vm.answer = _.capitalize(response.data.answer)
                    })
                    .catch(function (error) {
                        vm.answer = 'Error! Could not reach the API. ' + error
                    })                          
            }            
        },
        
        computed: {
            // same as : reversedMessage(){...}
            reversedMessage: function(){
                return this.message.split('').reverse().join('')
            }
        },
    }
</script>

<style scoped>
b {
  color: #D4228A;
}
</style>