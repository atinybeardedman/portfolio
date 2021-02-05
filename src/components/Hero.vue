<template>
  <section class="section hero">
    <div class="hero-content">
      <slot></slot>
    </div>
  </section>
</template>

<style>
.hero {
  height: 100vh;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-content {
  text-align: center;
  padding: 0 clamp(5em, 20%,15em)
}
</style>