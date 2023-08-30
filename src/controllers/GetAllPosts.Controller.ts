import GetAllPosts from '../helper/GetAllPosts'
// const { GetAllPosts } = require('../helper/GetAllPosts');

import { Request, Response } from "express"

const GetAllPostsController = async (request: Request, response: Response) => {
    console.log("Getting all posts");

    const {message, statusCode,posts} = await GetAllPosts();
    
    return response.status(statusCode).json({
        message,
        posts
    })
}

// module.exports = {GetAllPostsController};

export default GetAllPostsController
