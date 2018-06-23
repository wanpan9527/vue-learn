<template>
  <div>
    <div class="flip"></div>
    <div class="num"></div>
    <button @click="shuffle">click to shuffle</button>
  </div>
</template>
<script>
import Flip from "number-flip";
const $ = s => document.querySelector(s);

export default {
  name: "number-flip",
  data() {
    return {
      flip: null
    };
  },
  methods: {
    shuffle() {
      const num = ~~(Math.random() * 999);
      $(".num").innerText = num;
      this.flip.flipTo({ to: num });
    }
  },

  mounted() {
    this.flip = new Flip({
      node: $(".flip"),
      from: 725,
      systemArr: ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"]
    });
  }
};
</script>


