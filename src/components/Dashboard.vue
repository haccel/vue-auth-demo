<template>
  <div class="ui centered">
    <create-todo v-on:add-todo="addTodo"/>
    <list v-bind:todos='todos'/>
  </div>
</template>

<script>
import List from "./List";
import CreateTodo from "./CreateTodo";

export default {
  components: {
    List,
    CreateTodo,
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
  methods:{

    addTodo( task  ){
      this.todos.push( task );
    }
  }
};
</script>

<style>
</style>
