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

  import { onBeforeMount } from "vue";

  import HeaderComponent from "@/layouts/components/HeaderComponent.vue";
  import FooterComponent from "@/layouts/components/FooterComponent.vue";

  export default {
    name: "DefaultTemplate",
    setup() {
      onBeforeMount( () => {
        document.body.classList.add('page')
        document.body.classList.add('dark')

        document.title = 'Curso EAD com Vue.js 3 - Especializa TI'
      })
    },
    components: {
      HeaderComponent,
      FooterComponent
    }
  }
</script>

<style scoped>

</style>