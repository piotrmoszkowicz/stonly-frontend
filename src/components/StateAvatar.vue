<template>
  <a-avatar
    shape="square"
    size="large"
    :style="{ backgroundColor: avatarColor, verticalAlign: 'middle' }"
    >{{ state }}</a-avatar
  >
</template>

<script>
import { Avatar } from "ant-design-vue";
export default {
  name: "StateAvatar",
  components: {
    [Avatar.name]: Avatar
  },
  props: {
    state: {
      type: String,
      default: "Open"
    }
  },
  computed: {
    avatarColor() {
      switch (this.state) {
        case "Open":
          return "#283593";
        case "Pending":
          return "#FF5722";
        case "Closed":
          return "#4CAF50";
      }
      return "#000000";
    }
  }
};
</script>
