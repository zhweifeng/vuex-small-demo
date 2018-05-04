<template>
  <div>
    <Dialog1></Dialog1>
    <el-button type="text" @click="fnShow">点击打开外层 Dialog</el-button>
  </div>
</template>

<script>

import { mapState, mapMutations } from "vuex";
import Dialog1 from "./dialog/dialog1";

export default {
  components: { Dialog1 },
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(["dialog1_show"])
  },
  methods: {
    ...mapMutations([
      "fnDialog1_show"
    ]),
    fnShow(){
      this.fnDialog1_show(true)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
