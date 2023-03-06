<template>
  <div class="comments">
    <div class="header">
      <span class="title">Dúvidas</span>
      <button class="btn primary">
        <i class="fas fa-plus"></i>
        Enviar nova dúvida
      </button>
    </div>

    <Supports />
  </div>
</template>

<script>
  import Supports from "@/components/Supports.vue";

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "SupportsLesson",
    components: {Supports}
  }
</script>

<style scoped>

</style>