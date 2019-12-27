<template>
  <div class="home">
    <p>In the space given to the right, please type the math expressions you see on the left.</p>
    <ExpressionChallenge v-for="(e, index) in expressions" :key="index" :expression="e"/>
  </div>
</template>

<script>
import ExpressionChallenge from "@/components/ExpressionChallenge.vue";
import { mapState } from "vuex";
export default {
  name: "home",
  components: { ExpressionChallenge },
  computed: {
    ...mapState(["expressions"])
  }
};
</script>
