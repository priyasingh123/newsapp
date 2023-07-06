import React, { Component } from 'react'
import NewsItemComponent from './NewsItemComponent'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export default class NewsComponent extends Component {
    constructor () {
        super()
        this.state = {
            articles: [],
            totalResults: 0,
            page: 1,
            loading: false
        }
    }

    static defaultProps = {
        country: 'in',
        pageSize: 10,
        category: 'business'
    }

    static propTypes = {
        country: PropTypes.string.isRequired,
        pageSize: PropTypes.number.isRequired,
        category: PropTypes.string,
    }
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

    handleDisableNextButtton = () => {
        console.log ('inside next')
        // return true
        // console.log (this.state.totalResults - this.state.page*20)
        // if (this.state.totalResults - this.state.page*20) { //more news is there
        //     return false
        // }
        // else {
        //     return true
        // }
    }

    fetchData = async (page) => {
        this.setState({loading: true})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=76c30e14f0584cf09bed3f0b213fee1d&page=${page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState ({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false}, () => {
            // console.log (this.state.totalResults)
        }) 
    }

    componentDidMount () {
        this.fetchData(this.state.page)
    }

    onPreviousClick = () => {
        //no need to handle pages less than 1 as button will be disabled
        this.setState ({page: this.state.page-1}, () => {
            this.fetchData(this.state.page)
        })
    }

    onNextClick = () => {
        this.setState({
            page: this.state.page+1
        }, () => {//using callback as setState is asynchronous 
            this.fetchData(this.state.page)
        } )
    }

    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center' style={{margin: '20px'}}>News App - Daily news bites</h2>
                {this.state.loading && <Spinner/>}
                {!this.state.loading && <div className='row'>
                    {this.state.articles.map((element) => {
                        // console.log (element)
                        return (
                        <div className='col-md-4 my-3' key={element.url}>
                            <NewsItemComponent title={element.title?.slice(0,45)} description={element.description?.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>)
                    })}
                </div>
                }
                <div className='d-flex justify-content-between'>
                    <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.onPreviousClick}>&larr; Previous </button>
                    <button disabled={this.state.totalResults - this.state.page*this.props.pageSize > 0? false: true}type="button" className="btn btn-dark" onClick={this.onNextClick}>Next &rarr;</button>
                    {/* <button disabled={this.handleDisableNextButtton} type="button" className="btn btn-dark" onClick={this.onNextClick}>Next &rarr;</button> */}
                    {/* disabled was not working  */}
                </div>
            </div>
        )
    }
}