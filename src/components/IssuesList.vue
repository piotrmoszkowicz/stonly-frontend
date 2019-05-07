<template>
  <a-list
    itemLayout="horizontal"
    :dataSource="items"
    :style="{ backgroundColor: 'white', padding: '20px' }"
  >
    <a-list-item slot="renderItem" slot-scope="item, index">
      <a-list-item-meta
        :description="
          `Created: ${formatDate(item.createdAt)}, Updated: ${formatDate(
            item.updatedAt
          )}`
        "
        :key="index"
      >
        <a slot="title" @click="chooseItem(index)">{{ item.title }}</a>
        <StatusAvatar :state="item.state" slot="avatar" />
      </a-list-item-meta>
    </a-list-item>
  </a-list>
</template>

<script>
import { Avatar, List } from "ant-design-vue";
import StatusAvatar from "@/components/StateAvatar.vue";

import { EventBus } from "@/EventBus";

export default {
  name: "IssuesList",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  components: {
    [Avatar.name]: Avatar,
    [List.name]: List,
    [List.Item.name]: List.Item,
    [List.Item.Meta.name]: List.Item.Meta,
    StatusAvatar
  },
  methods: {
    chooseItem(id) {
      EventBus.$emit("change-current-item", id);
    },
    formatDate(date) {
      return new Date(date).toLocaleString("en-GB");
    }
  }
};
</script>
