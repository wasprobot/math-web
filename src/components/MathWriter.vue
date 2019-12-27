<template>
  <div>
    <p>
      <span ref="expression">type\ here</span>
    </p>
  </div>
</template>

<script>
import { getInterface } from "exports-loader?window.MathQuill!imports-loader?window.jQuery=jquery!mathquill/build/mathquill.js";
import "mathquill/build/mathquill.css";

export default {
  name: "mathwriter",
  data() {
    return { typedLatex: null };
  },
  mounted() {
    var MQ = getInterface(2);
    var mf = MQ.MathField(this.$refs["expression"], {
      handlers: {
        edit: () => {
          this.typedLatex = mf.latex();
          this.$emit("edit", mf.latex());
        }
      }
    });
  }
};
</script>
