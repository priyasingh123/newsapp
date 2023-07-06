import React, { Component } from 'react'

export default class NewsItemComponent extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props
        return (
            <div className='container'>
            <div className="card" >
                <img className="card-img-top" src={imageUrl} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-dark">Read More</a>
                </div>
            </div>
            </div>
        )
    }
}