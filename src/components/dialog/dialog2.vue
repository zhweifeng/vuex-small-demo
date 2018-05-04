<template>
  <el-dialog title="内层 Dialog" 
    :visible.sync="dialog2_show"
    :before-close="fnShow"
    append-to-body
    >
    <div slot="footer" class="dialog-footer">
      <el-button @click="fnShow">取 消</el-button>
      <el-button type="primary" @click="fnShow">确定</el-button>
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
    ...mapState(["dialog2_show"])
  },
  methods: {
    ...mapMutations([
      "fnDialog2_show"
    ]),
    fnShow(){
      this.fnDialog2_show(false)
    }
  }
}
</script>

<style>

</style>
