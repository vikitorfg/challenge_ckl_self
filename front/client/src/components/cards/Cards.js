import React from "react";
import "./Cards.css";

class Cards extends React.Component {
  render() {
    if (this.props.article === undefined) {
      return <div />;
    }

    let cardType = this.props.type || "default";

    const { author, hero_image, subject, text, title } = this.props.article;
    return (
      // <div></div>
      <div className={cardType + "-container"}>
        <div className="card-subject" style={{ color: subject.color }}>
          <span>{subject.name}</span>
        </div>
        <div className={cardType + "-hero-div"}>
          <div className={cardType + "-read-more"}>
            <span>Read More</span>
          </div>
          <div>
            <img
              className={cardType + "-hero-image"}
              src={hero_image}
              alt="news"
            />
          </div>
        </div>
        <div className={cardType + "-title"}>{title}</div>
        <div className="container-author">
          <div>
            <img
              className={cardType + "-author-img"}
              src={author.picture}
              alt="Author face"
            />
          </div>
          <div className="author-name">
            <span>By </span>
            {author.name}
          </div>
        </div>
        <div className={cardType + "-text"}>
          <span>{text}...</span>
        </div>
      </div>
    );
  }
}

export default Cards;
