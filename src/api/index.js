import axiosWrapper from "@/api/axiosWrapper";
import endpoints from "@/api/endpoints";

export function getAllIssues() {
  return axiosWrapper.get(endpoints.get.issues());
}

export function getIssue(id) {
  return axiosWrapper.get(endpoints.get.issue(id));
}

export function createIssue(issueObject) {
  return axiosWrapper.post(endpoints.post.issue, issueObject);
}

export function updateIssue(id, issueObject) {
  return axiosWrapper.put(endpoints.put.issue(id), issueObject);
}

export function deleteIssue(id) {
  return axiosWrapper.delete(endpoints.delete.issue(id));
}
