<template>
  <div>
    <HeaderComponent />

    <section>
      <router-view></router-view>
    </section>

    <FooterComponent />
  </div>
</template>

<script>
  import HeaderComponent from "@/layouts/components/HeaderComponent.vue";
  import FooterComponent from "@/layouts/components/FooterComponent.vue";

  export default {
    name: "DefaultTemplate",
    components: {
      HeaderComponent,
      FooterComponent
    }
  }
</script>

<style scoped>

</style>