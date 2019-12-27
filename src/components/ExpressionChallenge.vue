<template>
  <md-card>
    <md-card-content>
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <MathExpression :latex="expression.latex"/>
        </div>
        <div class="md-layout-item">
          <MathWriter @edit="onEdit"/>
        </div>
      </div>
    </md-card-content>
  </md-card>
</template>

<script>
import MathExpression from "@/components/MathExpression.vue";
import MathWriter from "@/components/MathWriter.vue";

export default {
  name: "expression-challenge",
  props: ["expression"],
  components: { MathExpression, MathWriter },
  methods: {
    onEdit(latex) {
      if (latex === this.expression.latex) {
        this.$el.classList.add("solved");
      } else {
        this.$el.classList.remove("solved");
      }
    }
  }
};
</script>

<style scoped>
.solved {
  background-color: green;
}
</style>
