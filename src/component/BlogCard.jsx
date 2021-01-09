import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Hidden,
  Typography,
} from "@material-ui/core";
import { Component } from "react";
import { Link } from "react-router-dom";

class BlogCard extends Component {
  render() {
    let { imageUrl, title, author, id, content } = this.props;
    return (
      <div>
        <CardActionArea>
          <Card>
            <div>
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
            <Hidden xsDown>
              <CardMedia image={imageUrl} title={"blog" + title} />
            </Hidden>
          </Card>
        </CardActionArea>
      </div>
    );
  }
}

export default BlogCard;
