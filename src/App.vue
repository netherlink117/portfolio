<template>
  <Header></Header>
  <Nav></Nav>
  <Main></Main>
  <Footer></Footer>
</template>
<script>
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Nav,
    Main,
    Footer
  }
};
</script>
