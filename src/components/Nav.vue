<template>
  <nav>
    <span>Menu: </span>
    <router-link :to="{ name: 'Intro' }">Intro</router-link>
    <router-link :to="{ name: 'Context' }">Context</router-link>
    <router-link :to="{ name: 'Skills' }">Skills</router-link>
    <router-link :to="{ name: 'Projects' }">Projects</router-link>
  </nav>
</template>
<script>
export default {
  name: "Nav"
};
</script>
