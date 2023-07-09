import React, { Component } from 'react'

export default class NewsItemComponent extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props
        return (
            <div className='container'>
                <div className="card" >
                    <img className="card-img-top" src={imageUrl} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className='text-muted'>By {author ?? 'Unknown'} </small></p>
                        <p className='card-text'><small className='text-muted'>date:{new Date(date).toGMTString()} </small></p>
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'96%', zIndex:'1'}}>
                            {source}
                            <span className="visually-hidden">source</span>
                        </span>
                        <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}