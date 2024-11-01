const BlogList = ({ blogs, title, handleDelete }) => {
  // const blogs= props.blog;
  // const title = props.title;

  return (
    <div className="BlogList">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
