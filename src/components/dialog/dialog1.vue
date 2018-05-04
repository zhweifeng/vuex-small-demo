<template>
  <el-dialog title="外层 Dialog" 
    :visible.sync="dialog1_show"
    :before-close="fnShow"
    >
    <Dialog2></Dialog2>
    <div slot="footer" class="dialog-footer">
      <el-button @click="fnShow">取 消</el-button>
      <el-button type="primary" @click="fnShow2">打开内层 Dialog</el-button>
    </div>
  </el-dialog>
</template>

<script>

import { mapState, mapMutations } from "vuex";
import Dialog2 from "./dialog2";

export default {
  components: { Dialog2 },
  data() {
    return {
    };
  },
  computed: {
    ...mapState(["dialog1_show","dialog2_show"])
  },
  methods: {
    ...mapMutations([
      "fnDialog1_show",
      "fnDialog2_show"
    ]),
    fnShow(){
      this.fnDialog1_show(false)
    },
    fnShow2(){
      this.fnDialog2_show(true)
    }
  }
}
</script>

<style>

</style>
