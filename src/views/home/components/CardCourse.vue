<template>
  <li>
        <span :class="['card', 'bg-' + bg_name]">
          <span class="icon">
            <img :src="[ image != '' ? image : require('@/assets/images/icons/default.png') ]" :alt="title">
          </span>
          <span class="title">{{ title }}</span>
          <span class="action">
            <a href="trainings.html" :class="['btn', bg_name]">Acessar</a>
          </span>
        </span>
    <span class="dots">
          <span></span>
          <span></span>
          <span></span>
        </span>
  </li>
</template>

<script>
export default {
  name: "CardCourse",
  props: [
      'title',
      'image',
      'bg_name'
  ]
}
</script>

<style scoped>

</style>