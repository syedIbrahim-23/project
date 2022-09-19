import PostMessage from "../models/postMessage.js";

export const getPost = async (req, res) => {
  try {
    const getAllPost = await PostMessage.find();

    res.status(200).json(getAllPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async(req, res) => {
    const post = req.body;
  try {
    const newPost = await PostMessage(post).save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
