<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>
<script>
export default {
  name: "Header",
  computed: {
    title() {
      return ("$ portfolio --show " + this.$route.name).toLowerCase();
    }
  }
};
</script>

<style></style>
