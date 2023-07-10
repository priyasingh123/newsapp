import React, { Component } from 'react'

export default class NewsItemComponent extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props
        return (
            <div className='container'>
                <div className="card" >
                    <div style={{display: 'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
                        <span className="badge rounded-pill bg-danger">
                            {source}
                            <span className="visually-hidden">source</span>
                        </span>
                    </div>
                    <img className="card-img-top" src={imageUrl} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className='text-muted'>By {author ?? 'Unknown'} </small></p>
                        <p className='card-text'><small className='text-muted'>date:{new Date(date).toGMTString()} </small></p>
                        <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}