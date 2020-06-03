<template>
  <div class="about">
    <h1>This is an test page</h1>
    <ComponetTest 
    msg="ComponentTest" 
    />
  </div>
</template>


<script>

import ComponetTest from '@/components/ComponentTest.vue'

export default {
  name: 'Test',
  components: {
    ComponetTest
  }

}
</script>