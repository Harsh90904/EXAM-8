const { Router } = require("express");
const { getblog, createblog, updateblog, deleteblog } = require("../controllers/blog.controller");

const blogpost = Router();

blogpost.get("/blogp", getblog);
blogpost.post("/blogpost", createblog);
blogpost.patch("/blogp/:id", updateblog);
blogpost.delete("/blogp/:id", deleteblog);




blogpost.get("/blog" , (req, res) => {
    res.render("blog")
})
module.exports = blogpost;