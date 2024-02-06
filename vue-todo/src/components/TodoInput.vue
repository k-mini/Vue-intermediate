<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus"></i>
    </span>

    <AlertModal v-if="showModal" @close="showModal = false">
      <template #header>
        <h3>
          경고!
          <i class="fa-solid fa-x closeModalBtn" @click="showModal = false"></i>
        </h3>
      </template>
      <!-- vue2 방식-->
      <!-- <h3 slot="header">
        경고!
      </h3> -->
      <template #body>
        <div>아무것도 입력하지 않으셨습니다.</div>
      </template>
      <!-- <template v-slot:footer>
        <h3>copy right</h3>
        <button class="modal-default-button"
            @click="showModal = false">OK</button>
      </template> -->
      <!-- <h3 slot="body">무언가를 입력하세요.</h3> -->
      <!-- <h3 slot="footer">copy right</h3> -->
    </AlertModal>
  </div>
</template>

<script>
import AlertModal from './common/AlertModal.vue'
export default {
  data(){
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        this.$store.commit('addOneItem', this.newTodoItem);
        this.clearInput(); 
      } else {
        this.showModal = !this.showModal
      }
     },
     clearInput(){
      this.newTodoItem = '';
     },
  },
  components: {
    AlertModal
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>