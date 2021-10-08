import React, { Component } from 'react'

export class NewsItems extends Component {
   
    render() {
        let {title, description, imageUrl, newsUrl, author,date, source} = this.props;
        return (
            <div className="my-3">
            <div className="card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }
                }>

                    <span className="badge rounded-pill bg-warning"> {source} </span>
                </div>
                <img src={!imageUrl ? "https://english.cdn.zeenews.com/sites/default/files/2021/10/01/975723-cyclone-filepic.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}  </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-warning">Read More</a>
                </div>
            </div>
        </div>
        )
    }
}

export default NewsItems;
