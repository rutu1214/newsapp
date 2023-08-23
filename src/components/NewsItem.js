import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title, description, imgUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}>
          <span className="badge rounded-pill bg-danger">
    {source}</span> 
    </div>
            <img src={imgUrl?imgUrl:"https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2014/7/174318220-620x480.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
