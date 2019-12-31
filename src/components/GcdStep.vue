<template>
  <md-card>
    <md-card-content>
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <md-field>
            <md-input v-model="left"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item">
          <md-field>
            <md-input v-model="right" @keydown.native="keyPressed"></md-input>
          </md-field>
        </div>
      </div>
    </md-card-content>
    <GcdStep v-if="hasChild" :parentLeft="left" :parentRight="right" />
  </md-card>
</template>

<script>
import GcdStep from "@/components/GcdStep.vue";
export default {
  name: "GcdStep",
  components: { GcdStep },
  props: ["parentLeft", "parentRight"],
  data() {
    return { left: 0, right: 0, hasChild: false };
  },
  computed: {
    dynamicName: function() {
      return `${this.parentLeft}-${this.parentRight}`;
    }
  },
  methods: {
    keyPressed(e) {
      if (e.key == "Enter") this.hasChild = true;
      else if (e.key == "Escape") this.hasChild = false;
    }
  }
};
</script>
