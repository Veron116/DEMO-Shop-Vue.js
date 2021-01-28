<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1>Product page</h1>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.id
        }
    },
    created() {
        console.log(this.$route.params.id)
    }
}
</script>
