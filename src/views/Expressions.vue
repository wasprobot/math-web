<template>
  <div class="home">
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
