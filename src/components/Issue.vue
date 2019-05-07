<template>
  <a-card :title="item.title">
    <a-radio-group
      @change="changeState"
      :value="item.state"
      :disabled="item.state === 'Closed'"
      :style="{ paddingBottom: '20px' }"
    >
      <a-radio-button
        value="Open"
        :disabled="['Pending', 'Closed'].includes(item.state)"
        >Open
      </a-radio-button>
      <a-radio-button value="Pending" :disabled="item.state === 'Closed'"
        >Pending
      </a-radio-button>
      <a-radio-button value="Closed">Closed</a-radio-button>
    </a-radio-group>
    <p :style="{ textAlign: 'left' }">{{ item.description }}</p>
  </a-card>
</template>

<script>
import { mapActions } from "vuex";

import { Card, Radio } from "ant-design-vue";

export default {
  name: "Issue",
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    [Card.name]: Card,
    [Radio.Group.name]: Radio.Group,
    [Radio.Button.name]: Radio.Button
  },
  methods: {
    ...mapActions(["updateIssue"]),
    changeState(e) {
      this.updateIssue({
        id: this.item.id,
        issueObject: {
          state: e.target.value
        }
      });
    }
  }
};
</script>

<style scoped></style>
