<template>

  <div class="pageTitle">
    <span class="title">Meus Cursos</span>
    <span class="dots">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>

  <div class="content">
    <ul class="listCourses">
      <CardCourse
        :title="'Curso de Laravel com Vue.js'"
        :image="''"
        :bg_name="'laravel'"
      />
    </ul>
  </div>

</template>

<script>
  import CardCourse from "@/views/home/components/CardCourse.vue";

  export default {
    name: 'HomeView',
    components: {
      CardCourse
    }
  }
</script>
