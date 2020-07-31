<template>
    <div>
        <h3>{{ data }}</h3>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'HelloAxios',
        data() {
            return {
                data: null
            }
        },
        created() {
            this.init_local()
        },
        methods: {
            init_local() {
                var vm = this
                axios.get(
                        '/data.json', {
                            timeout: 60000,
                            // headers: {
                            //     'Access-Control-Allow-Origin': '*',
                            // },
                            // proxy: {
                            //     host: 'tcp.app.x',
                            //     port: 80
                            // },
                        }, )
                    .then(response => {
                            this.data = response.data
                            console.log(vm.data)
                        }

                    )
                    .catch(error => {
                        this.data = 'Error! Could not reach the API. ' + error
                    })
            },
            init_remote(){
                var vm = this
                axios.get(
                        '/pub/server', { // 这里的跨域问题，请参考vue.config.js
                            timeout: 60000,
                            headers: {
                                'Access-Control-Allow-Origin': '*',
                            },
                        }, )
                    .then(response => {
                            this.data = response.data
                            console.log(vm.data)
                        }

                    )
                    .catch(error=> {
                        this.data = 'Error! Could not reach the API. ' + error
                    })                
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>