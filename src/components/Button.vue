<template>
  <button @click="$emit('click')" class="btn btn-primary">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: "Button",
    },
  },
};
</script>