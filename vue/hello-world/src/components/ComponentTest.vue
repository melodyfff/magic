<template>
    <div>
        <span>Message: {{ msg }}</span>
    </div>
</template>

<script>
export default {
    name: 'ComponetTest',
    props: {
        msg: String
    }
}
</script>