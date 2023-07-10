import React, { useEffect, useState } from 'react'
import NewsItemComponent from './NewsItemComponent'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


const NewsComponent = (props) => {
    const [articles, setArticles] = useState([])
    const [totalResults, setTotalResults] = useState(0)
    const [page, setPage] = useState(1)    
    document.title = `Newsapp - ${props?.category}`


// articles = [
//     {
//         "source": {
//             "id": "news24",
//             "name": "News24"
//         },
//         "author": "sport",
//         "title": "England captain Stokes 'sorry' after cricket report exposes racism and sexism",
//         "description": "England captain Ben Stokes said Tuesday he was \"deeply sorry\" to learn of the scale of discrimination in the sport after a damning report revealed \"widespread\" racism, sexism and classism in the game.",
//         "url": "https://www.news24.com/sport/cricket/england-captain-stokes-sorry-after-cricket-report-exposes-racism-and-sexism-20230627",
//         "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/2586/864324e3e4514a23950a132caa21acc6.jpg",
//         "publishedAt": "2023-06-28T06:57:15+00:00",
//         "content": "<ul><li>England captain Bens Stokes has commented following the publication by the Independent Commission for Equity in Cricket (ICEC) of its much-anticipated report, \"Holding Up a Mirror to Cricket\"… [+4511 chars]"
//     },
//     {
//         "source": {
//             "id": "talksport",
//             "name": "TalkSport"
//         },
//         "author": "Connor Andrews",
//         "title": "Azeem Rafiq accuses England cricket legend Michael Atherton of undermining his experiences ‘at every o...",
//         "description": "Azeem Rafiq has condemned former England cricketer Michael Atherton for his reaction to the ICEC report which found racism, sexism and elitism across the sport. The Independent Commission for Equit…",
//         "url": "https://talksport.com/sport/cricket/1480155/azeem-rafiq-accuses-atherton-undermining-experiences/",
//         "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/06/SD-TALKSPORT-RAFIQ-ATHERTON.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
//         "publishedAt": "2023-06-27T18:11:06Z",
//         "content": "Azeem Rafiq has condemned former England cricketer Michael Atherton for his reaction to the ICEC report which found racism, sexism and elitism across the sport.\r\nThe Independent Commission for Equity… [+1586 chars]"
//     },
//     {
//         "source": {
//             "id": "bbc-sport",
//             "name": "BBC Sport"
//         },
//         "author": null,
//         "title": "Stokes 'deeply sorry' to hear of discrimination",
//         "description": "England captain Ben Stokes said he is \"deeply sorry\" to hear about experiences of discrimination in a report into cricket in England and Wales.",
//         "url": "http://www.bbc.co.uk/sport/cricket/66031285",
//         "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/11787/production/_124395517_bbcbreakingnewsgraphic.jpg",
//         "publishedAt": "2023-06-27T11:07:20.1746876Z",
//         "content": "Racism, sexism, classism and elitism widespread in cricket - report chair Cindy Butts\r\nEngland captain Ben Stokes says he is \"deeply sorry\" to hear of experiences of discrimination in a report into c… [+1716 chars]"
//     },
//     {
//         "source": {
//             "id": "espn-cric-info",
//             "name": "ESPN Cric Info"
//         },
//         "author": null,
//         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
//         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
//         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
//         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
//         "publishedAt": "2020-04-27T11:41:47Z",
//         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
//     },
//     {
//         "source": {
//             "id": "espn-cric-info",
//             "name": "ESPN Cric Info"
//         },
//         "author": null,
//         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
//         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
//         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
//         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//         "publishedAt": "2020-03-30T15:26:05Z",
//         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
//     }
// ]

const handleDisableNextButtton = () => {
    console.log('inside next')
    // return true
    // console.log (this.state.totalResults - this.state.page*20)
    // if (this.state.totalResults - this.state.page*20) { //more news is there
    //     return false
    // }
    // else {
    //     return true
    // }
}

    const fetchMoreData = async () => {
        
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
        setPage(page + 1)
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    }

const fetchData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    let data = await fetch(url)
    props.setProgress(30)
    let parsedData = await data.json()
    props.setProgress(70)
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    props.setProgress(100)
}

useEffect(() =>{
    props.setProgress(10)
    fetchData()
}, [])

//onPreviousClick and onNextClick not needed if using infinite scrolling
/*onPreviousClick = () => {
    //no need to handle pages less than 1 as button will be disabled
    this.setState({ page: this.state.page - 1 }, () => {
        this.fetchData(this.state.page)
    })
}

onNextClick = () => {
    this.setState({
        page: this.state.page + 1
    }, () => {//using callback as setState is asynchronous 
        this.fetchData(this.state.page)
    })
}*/


return (
    <><h2 className='text-center' style={{ marginTop: '70px' }}>News App - Daily news bites</h2>
        <InfiniteScroll dataLength={articles} next={fetchMoreData} hasMore={articles.length < totalResults}
            loader={<Spinner />}
        >
            <div className="container">
                <div className='row'>
                    {articles.map((element) => {
                        // console.log (element)
                        return (
                            <div className='col-md-4 my-3' key={element.url}>
                                <NewsItemComponent title={element.title?.slice(0, 45)} description={element.description?.slice(0, 88)}
                                    imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>)
                    })}
                </div>
            </div>
        </InfiniteScroll>

        {/*<div className='d-flex justify-content-between'>*/}
        {/* <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.onPreviousClick}>&larr; Previous </button> */}
        {/* <button disabled={this.state.totalResults - this.state.page * this.props.pageSize > 0 ? false : true} type="button" className="btn btn-dark" onClick={this.onNextClick}>Next &rarr;</button> */}
        {/* <button disabled={this.handleDisableNextButtton} type="button" className="btn btn-dark" onClick={this.onNextClick}>Next &rarr;</button> */}
        {/* disabled was not working  */}
        {/*</div>*/}
    </>)
}

export default NewsComponent;

NewsComponent.defaultProps = {
    country: 'in',
    pageSize: 20,
    category: 'business'
}

NewsComponent.propTypes = {
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number,
    category: PropTypes.string.isRequired,
}