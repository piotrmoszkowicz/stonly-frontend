import Vue from "vue";
import Vuex from "vuex";

import { deleteIssue, getAllIssues, updateIssue } from "./api/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    issues: []
  },
  mutations: {
    DELETE_ISSUE(state, id) {
      delete state.issues[id];
    },
    PUSH_ISSUE(state, issue) {
      state.issues[issue.id] = issue;
    },
    UPDATE_ISSUES(state, issues) {
      state.issues = issues;
    },
    UPDATE_ISSUE(state, issue) {
      const index = state.issues.findIndex(is => is.id === issue.id);
      Vue.set(state.issues, index, issue);
      // state.issues[index] = issue;
    }
  },
  actions: {
    async deleteIssue({ commit }, id) {
      try {
        const response = await deleteIssue(id);
        if (response.result) {
          commit("DELETE_ISSUE", id);
        }
      } catch (e) {
        console.error(`Error while making request to delete issue ID: ${id}.`);
      }
    },
    async getIssues({ commit }) {
      try {
        const res = await getAllIssues();
        commit("UPDATE_ISSUES", res.data.data);
      } catch (e) {
        console.error("Error while making request to get all issues.");
      }
    },
    async updateIssue({ commit }, { id, issueObject }) {
      try {
        const res = await updateIssue(id, issueObject);
        commit("UPDATE_ISSUE", res.data.data);
      } catch (e) {
        console.error(`Error while making request to update issue ${id}.`);
      }
    }
  }
});
