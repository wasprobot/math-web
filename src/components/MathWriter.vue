<template>
  <div>
    <p>
      <span id="answer" />
    </p>
  </div>
</template>

<script>
import { getInterface } from "exports-loader?window.MathQuill!imports-loader?window.jQuery=jquery!mathquill/build/mathquill.js";
import "mathquill/build/mathquill.css";

export default {
  name: "mathwriter",
  mounted() {
    var MQ = getInterface(2);
    MQ.MathField(document.getElementById("answer"));
  }
};
</script>
