<template>
    <div id="example">
        <span>Message: {{ msg }}</span>
        <hr>

        <h3>计算属性和监听器</h3>
        <p><b>Original</b> message: "{{ message }}"</p>
        <p><b>Computed</b> reversed message: "{{ reversedMessage }}"</p>
        <p><b>Methods</b> Reversed message: "{{ reversedMessage2() }}"</p>

        <h4>侦听器Watch</h4>
        <p>
            Ask a yes/no question:
            <input v-model="question">
        </p>
        <p>{{ answer }}</p>    
        <hr>

        <h3>Class 与 Style 绑定</h3>   
        <!-- active 这个 class 存在与否将取决于数据 property isActive -->
        <p v-bind:class="{active: isActive}">isActive: {{isActive}}</p>
        <p v-bind:class="classObject">classObject isActive: {{classObject}}</p>
        <p v-bind:style="[styleObject]">内联styleObject:  {{styleObject}}</p>

        <hr>

        <h3>条件渲染</h3>
        <h4>v-if</h4>
        <button v-on:click="awesome = awesome?false:true">Change awesome</button>
        <p v-if="awesome">Vue is awesome!</p>
        <p v-else>Oh no 😢, awesome is :{{awesome}}</p>

        <h4>用 key 管理可复用的元素</h4>
        <div id="no-key-example" class="demo">
            <div v-if="loginType == 'username'">
                <label>Username</label> 
                <input placeholder="Enter your username" key="username-input">
            </div>
            <div v-else>
                <label>Email</label>
                <input placeholder="Enter your email address" key="email-input">
            </div>
             <button v-on:click="loginType=loginType?'':'username'">Toggle login type</button>
        </div>
        <hr>

        <h3>列表渲染</h3>

        <h4>用 v-for 把一个数组对应为一组元素</h4>
        <ul id="example-1">
        <li v-for="item in items" :key="item.message">
            {{ item.message }}
        </li>
        </ul>

        <ul id="example-2">
        <li v-for="(item, index) in items" :key="item.message">
            {{ parentMessage }} - {{ index }} - {{ item.message }}
        </li>
        </ul>        

        <h4>在 v-for 里使用对象</h4>
        <ul id="v-for-object" class="demo">
        <li v-for="value in objectFor" :key="value">
            {{ value }}
        </li>
        </ul>

        <div v-for="(value, name) in objectFor" :key="name">
        {{ name }}: {{ value }}
        </div> 
        <br>
        <div v-for="(value, name, index) in objectFor" :key="name">
        {{ index }}. {{ name }}: {{ value }}
        </div>                       
        <hr>

        <h3>事件处理</h3>
        <h4>监听事件</h4>
        <div id="example-1">
            <button v-on:click="counter += 1">Add 1</button>
            <p>The button above has been clicked {{ counter }} times.</p>
        </div>        
        <h4>事件处理方法</h4>
        <div id="example-2">
            <!-- `greet` 是在下面定义的方法名 -->
            <button v-on:click="greet">Greet</button>
        </div>
        <h4>内联处理器中的方法</h4>
        <div id="example-3">
            <button v-on:click="say('hi')">Say hi</button>
            <button v-on:click="say('what',$event)">Say what</button>
        </div> 
        <hr>

        <h3>表单输入绑定</h3>        
        <h4>文本</h4>
        <input v-model="message" placeholder="edit me">
        <p>Message is: {{ message }}</p>           

        <h4>多行文本</h4>
        <span>Multiline message is:</span>
        <p style="white-space: pre-line;">{{ message }}</p>
        <br>
        <textarea v-model="message" placeholder="add multiple lines"></textarea>        

        <h4>复选框</h4>
        <div>
            <input type="checkbox" id="checkbox" v-model="checked">
            <label for="checkbox">{{ checked }}</label>              
        </div>      
        <br>

   
        <div id='example-3'>
            <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
            <label for="jack">Jack</label>
            <input type="checkbox" id="john" value="John" v-model="checkedNames">
            <label for="john">John</label>
            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">Mike</label>
            <br>
            <span>Checked names: {{ checkedNames }}</span>
        </div>        
        <br>

        <h4>单选按钮</h4>
        <div id="example-4">
            <input type="radio" id="one" value="One" v-model="picked">
            <label for="one">One</label>
            <br>
            <input type="radio" id="two" value="Two" v-model="picked">
            <label for="two">Two</label>
            <br>
            <span>Picked: {{ picked }}</span>
        </div>

        <h4>选择框</h4>
        <div id="example-5">
            <select v-model="selected">
                <option disabled value="">请选择</option>
                <option value="a">A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <span>Selected: {{ selected }}</span>
        </div>        

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
                answer: 'I cannot give you an answer until you ask a question!',

                isActive: true,


                awesome: false,
                styleObject:{
                    color: 'red',
                    fontSize: '13px'
                },

                loginType: '',


                parentMessage: 'Parent',
                items:[
                    { message: 'Foo' },
                    { message: 'Bar' }
                ],

                objectFor:{
                    title: 'How to do lists in Vue',
                    author: 'Jane Doe',
                    publishedAt: '2016-04-10'
                },
                counter: 0,

                checked: false,
                checkedNames: [],
                picked:'',
                selected:''
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
            } ,
            greet(event){
                // `this` 在方法里指向当前 Vue 实例
                alert('Hello ' + this.message + '!')
                // `event` 是原生 DOM 事件
                if (event) {
                    alert(event.target.tagName)
                }                
            } ,
            say(message,event){
                alert(message+":"+event)
            }
        },
        
        computed: {
            // same as : reversedMessage(){...}
            reversedMessage: function(){
                return this.message.split('').reverse().join('')
            },

            // 计算样式属性
            classObject(){
                return {
                    active: this.isActive,
                    color: 'rgb(220, 20, 20)',
                    fontSize: 16
                }
            }
        },
    }
</script>

<style scoped>
b {
  color: #D4228A;
}

.active{
    color: rgb(220, 20, 20);
    font-size: 17px;
    font-style: italic;
}
</style>