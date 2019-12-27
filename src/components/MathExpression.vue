<template>
  <div>
    <p>
      <span ref="expression">y=</span>
    </p>
  </div>
</template>

<script>
import { getInterface } from "exports-loader?window.MathQuill!imports-loader?window.jQuery=jquery!mathquill/build/mathquill.js";
import "mathquill/build/mathquill.css";

export default {
  name: "mathexpression",
  props: ["latex"],
  mounted() {
    var MQ = getInterface(2);
    var mf = MQ.StaticMath(this.$refs["expression"]);
    mf.latex(this.latex);
  }
};
</script>
