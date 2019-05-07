export default {
  get: {
    issues: () => `/issue`,
    issue: id => `/issue/${id}`
  },
  post: {
    issue: () => `/issue`
  },
  put: {
    issue: id => `/issue/${id}`
  },
  delete: {
    issue: id => `/issue/${id}`
  }
};
