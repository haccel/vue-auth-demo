<template>
  <div>
    <todo v-bind:todos='todos'></todo>
  </div>
</template>

<script>
import Todo from "./Todo";

export default {
  components: {
    Todo,
  },
  data() {
    return {
      todos: [{
        title: 'Todo A',
        project: 'Project A',
        done: false,
      }, {
        title: 'Todo B',
        project: 'Project B',
        done: true,
      }, {
        title: 'Todo C',
        project: 'Project C',
        done: false,
      }, {
        title: 'Todo D',
        project: 'Project D',
        done: false,
      }],
    };
  },
};
</script>

<style>
</style>
