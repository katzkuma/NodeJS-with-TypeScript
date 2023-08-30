// const { PostModel } = require("../schema/Post.Schema");
import PostModel from "../schema/Post.Schema"

// const { parsePosts } = require("../parser/ParserService");
import parsePosts from "../parser/ParserService"

async function GetAllPosts() {
  try {
    const postsData = await PostModel.find();

    if (!postsData.length) {
      console.error("No posts found");

      return {
        message: "No posts found",
        statusCode: 404,
      };
    }

    const parsedPostData = parsePosts(postsData);

    console.log(`Posts found ${JSON.stringify({ parsedPostData })}`);

    return {
      message: "Post retrieved successfully",
      statusCode: 200,
      posts: parsedPostData,
    };
  } catch (error) {
    console.error(
      `Error occurred while fetching post ${JSON.stringify({ error })}`
    );
    return {
      message: `Internal server error ${JSON.stringify({ error })}`,
      statusCode: 500,
    };
  }
}

// module.exports = {
//   GetAllPosts,
// };

export default GetAllPosts
