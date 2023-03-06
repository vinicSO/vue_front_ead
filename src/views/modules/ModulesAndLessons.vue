<template>
  <div>
    <div class="pageTitle">
      <span class="title">Curso X</span>
      <span class="dots">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>

    <div class="content">
      <div class="container">

        <Modules />

        <div class="right">
          <div class="content">

            <Player />

            <SupportsLesson />

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Modules from "@/views/modules/Components/Modules.vue";
  import Player from "@/views/modules/Components/Player.vue";
  import SupportsLesson from "@/views/modules/Components/Supports.vue";

  export default {
    name: "ModulesAndLessons",
    components: {
      SupportsLesson,
      Modules,
      Player
    }
  }
  </script>

  <style scoped>

</style>