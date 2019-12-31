<template>
  <div class="home">
    <p>In the space given to the right, please type the math expressions you see on the left.</p>
    <GcdStep :parentLeft="270" :parentRight="192"/>
  </div>
</template>

<script>
import GcdStep from "@/components/GcdStep.vue";
export default {
  name: "gcd",
  components: { GcdStep }
};
</script>
