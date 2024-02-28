import Post from "../models/Posts.js";


export const post = async (req, res) => {
    const { title, content, name,date,time } = req.body;
    const newPost = new Post({ title, content, name,date,time});
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}


export const getPosts = async (req, res) => {
try{
    const posts=await Post.find();
    res.status(200).json(posts);
}
catch(error){
    res.status(404).json({message:error.message})
}
}