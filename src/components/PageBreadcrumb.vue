<template>
  <nav class="breadcrumb">
    <div class="container">
      <ol class="breadcrumb-list">
        <li class="breadcrumb-item">
          <router-link to="/" class="breadcrumb-link">TOP</router-link>
        </li>
        <li class="breadcrumb-item">
          <span class="breadcrumb-current">{{ currentPage }}</span>
        </li>
      </ol>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  currentPage: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.breadcrumb {
  background-color: #fff;
  padding: 15px 0;
  font-size: 0.875rem;
}

.breadcrumb-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
}

.breadcrumb-item:not(:last-child)::after {
  content: '▶';
  margin: 0 10px;
  font-size: 0.625rem;
  color: #666;
}

.breadcrumb-link {
  color: var(--color-accent);
  text-decoration: none;
}

.breadcrumb-link:hover {
  text-decoration: underline;
}

.breadcrumb-current {
  color: #333;
}
</style>
