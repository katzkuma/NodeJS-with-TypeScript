function parsePosts(posts: any) {
  return posts.map((post: any) => {
    return {
      _id: post._id,
      title: post.title,
      description: post.description,
    };
  });
}

function parsePost(post: any) {
  return {
    _id: post._id,
    title: post.title,
    description: post.description,
  };
}

export default parsePosts

// module.exports = {
//   parsePosts,
//   parsePost,
// };
