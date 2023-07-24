import React, { Component } from 'react';

class NewsItem extends Component {

  render() {
    let {title, description, articleUrl, imgUrl} = this.props;
    return (
    <div className="card" style={{width : "80%"}}>
      <div>
        <img id="newsItemImage" src={imgUrl} className="card-img-top" alt="..." />
      </div>
      <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={articleUrl} className="btn btn-sm btn-primary">Read More</a>
      </div>
    </div>
    )
  }
}

export default NewsItem;
