<template>
  <div class="home">
    <MathWriter msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import MathWriter from "@/components/MathWriter.vue";

export default {
  name: "home",
  components: { MathWriter }
};
</script>
