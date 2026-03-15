<template>
  <div class="page-header" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <h1 class="page-header-title">{{ title }}</h1>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  backgroundImage: {
    type: String,
    default: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80'
  }
})
</script>

<style scoped>
.page-header {
  position: relative;
  height: 200px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(26, 58, 110, 0.6);
}

.page-header-title {
  position: relative;
  z-index: 1;
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
}

@media (max-width: 768px) {
  .page-header {
    height: 150px;
  }

  .page-header-title {
    font-size: 1.5rem;
  }
}
</style>
