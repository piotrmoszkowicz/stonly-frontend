<template>
  <a-layout id="issues-app" :style="{ height: '100%' }">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['1']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">Issues</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content
      :style="{ padding: '0 50px', marginTop: '84px', minHeight: '100%' }"
    >
      <a-row>
        <a-col :span="8">
          <IssuesList :items="issues" />
        </a-col>
        <a-col :offset="2" :span="14">
          <Issue v-if="issues.length > 0" :item="issues[chosenItem]" />
        </a-col>
      </a-row>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      Piotr Moszkowicz 2019
    </a-layout-footer>
  </a-layout>
</template>

<script>
import { mapActions, mapState } from "vuex";

import { Col, Layout, Menu, Row } from "ant-design-vue";
import Issue from "@/components/Issue.vue";
import IssuesList from "@/components/IssuesList.vue";

import { EventBus } from "@/EventBus";

export default {
  name: "Issues",
  components: {
    [Col.name]: Col,
    [Layout.name]: Layout,
    [Layout.Header.name]: Layout.Header,
    [Layout.Content.name]: Layout.Content,
    [Layout.Footer.name]: Layout.Footer,
    [Menu.name]: Menu,
    [Menu.Item.name]: Menu.Item,
    [Row.name]: Row,
    Issue,
    IssuesList
  },
  created() {
    this.getIssues();
    EventBus.$on("change-current-item", itemId => {
      this.chosenItem = itemId;
    });
  },
  data() {
    return {
      chosenItem: 0
    };
  },
  computed: {
    ...mapState(["issues"])
  },
  methods: {
    ...mapActions(["getIssues"])
  }
};
</script>
