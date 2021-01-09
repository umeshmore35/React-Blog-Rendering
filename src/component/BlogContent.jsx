import { Link } from "react-router-dom";

const BlogContent = (props) => {
  let { title, content, imageUrl, links, author } = props;
  return (
    <div>
      <h1>{title}</h1>
      <img src={imageUrl} alt={"blog" + author} />
      <p>{content}</p>
      {links &&
        links.map((link, i) => {
          return (
            <div key={i}>
              <Link
                to={{
                  pathname: `/blog/${link.id}`,
                }}
              >
                {link.title}
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default BlogContent;
