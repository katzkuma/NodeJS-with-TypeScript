import express from "express";
// const express = require("express");

const app = express();

// const {
//   CreatePostController,
// } = require("./src/controllers/CreatePost.Controller");
// const {
//   GetAllPostsController,
// } = require("./src/controllers/GetAllPosts.Controller");
import GetAllPostsController from "./src/controllers/GetAllPosts.Controller"
// const {
//   GetOnePostController,
// } = require("./src/controllers/GetOnePost.Controller");
// const {
//   DeletePostController,
// } = require("./src/controllers/DeletePost.Controller");
// const {
//   UpdatePostController,
// } = require("./src/controllers/UpdatePost.Conytoller");

app.use(express.json());

app
  // // Get one post
  // .get("/api/v1/posts/post/:postId", GetOnePostController)
  // Get all posts
  .get("/api/v1/posts", GetAllPostsController)
  // // Delete post
  // .delete("/api/v1/posts/post/:postId", DeletePostController)
  // // Update post
  // .put("/api/v1/posts/post/:postId", UpdatePostController)
  // // Create Post controller
  // .post("/api/v1/posts", CreatePostController);

module.exports = { app };
