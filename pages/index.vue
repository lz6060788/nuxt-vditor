<template>
    <div ref="previewElement">
        <!-- <div v-html="htmlStr"></div> -->
    </div>
</template>

<script setup>

let htmlStr = ref('')
if (process.server) {
    htmlStr.value = useRender('# TEST')
}
console.log(htmlStr.value)
</script>