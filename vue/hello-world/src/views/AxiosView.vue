<template>
    <div>
         <h1>This is an axios page</h1>
         <HelloAxios />
    </div>
</template>

<script>
import HelloAxios from '@/components/AxiosComponent.vue'
export default {
    name: 'AxiosView',
    components:{
        HelloAxios,
    }
}
</script>