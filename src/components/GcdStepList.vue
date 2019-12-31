<template>
  <GcdStep :name="'child'" v-if="hasChild" :parentLeft="parentLeft" :parentRight="parentRight"/>
</template>

<script>
import GcdStep from "@/components/GcdStep.vue";
export default {
  name: "gcd-step-list",
  components: { GcdStep },
  props: ["parentLeft", "parentRight"],
  data() {
    return {
      hasChild: true
    };
  }
};
</script>
