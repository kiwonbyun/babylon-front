export const postsKeys = {
  all: ['posts'],
  getPosts: () => [...postsKeys.all, 'getPosts'],
  getPostsNoSsr: () => [...postsKeys.all, 'getPostsNoSsr'],
};
