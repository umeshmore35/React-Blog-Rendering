import { Link } from "react-router-dom";
import styles from "./BlogContent.module.css";
const BlogContent = (props) => {
  let { title, content, imageUrl, links, author } = props;
  return (
    <div className={styles["blog-con"]}>
      <div className={styles["contain"]}>
        <h1>{title}</h1>
        <img src={imageUrl} alt={"blog" + author} className={styles["image"]} />
        <p>{content}</p>
      </div>
      <div className={styles["links"]}>
        {links &&
          links.map((link, i) => {
            return (
              <div key={i} className={styles["map-link"]}>
                <Link
                  to={{
                    pathname: `/blog/${link.id}`,
                  }}
                  className={styles["react-link"]}
                >
                  {link.title}
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BlogContent;
