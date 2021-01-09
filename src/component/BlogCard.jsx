import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./BlogCard.module.css";

class BlogCard extends Component {
  render() {
    let { imageUrl, title, author, id, content } = this.props;
    return (
      <div>
        <CardActionArea className={styles["card-action"]}>
          <Card className={styles["card"]}>
            <div className={styles["div-con"]}>
              <CardContent>
                <Link
                  to={{
                    pathname: `blog/${id}`,
                    state: { id: id },
                  }}
                  className="Link"
                >
                  <Typography gutterBottom variant="h5" component="h2">
                    {title}
                  </Typography>
                </Link>
                <Typography variant="body2" color="textSecondary" component="p">
                  {" "}
                  {author}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  {" "}
                  {content}
                </Typography>
              </CardContent>
            </div>
            <CardMedia
              image={imageUrl}
              title={"blog" + title}
              className={styles["card-media"]}
            />
          </Card>
        </CardActionArea>
      </div>
    );
  }
}

export default BlogCard;
