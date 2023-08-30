import CreatePost from "../helper/CreatePost"
import {Request, Response} from "express"
// const { CreatePost } = require("../helper/CreatePost");

const CreatePostController = async (request: Request, response: Response) => {
  console.log(`Getting request body ${JSON.stringify(request.body)}`);

  const title = request.body.title;
  const description = request.body.description;

  const { message, statusCode } = await CreatePost(title, description);
  return response.status(statusCode).json({
    message,
  });
};

export default CreatePostController
// module.exports = { CreatePostController };
