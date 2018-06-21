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
var flip;
var tick;

export default {
  name: "number-flip",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    shuffle() {
      const num = ~~(Math.random() * 999);
      $(".num").innerText = num;
      flip.flipTo({ to: num, direct: true });
    }
  },

  mounted() {
    flip = new Flip({
      node: $(".flip"),
      from: 725,
      // easeFn: function(pos) {
      //   if ((pos /= 0.5) < 1) return 0.5 * Math.pow(pos, 3);
      //   return 0.5 * (Math.pow(pos - 2, 3) + 2);
      // },
      systemArr: ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"]
    });
  }
};
</script>


