<template>
  <div>
    <h1>page</h1>
  </div>
</template>

<script>
  export default {
    name: 'page',
    mounted () {
      console.log(this.$route.params)
    }
  }
</script>
