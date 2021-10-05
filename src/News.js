import React, { Component } from 'react'
import Spinner from './component/Spinner';
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": "BBC Sport",
            "title": "Connor 'not surprised' by batter reaction",
            "description": "Clare Connor says she is not surprised by the adverse reaction to the gender-neutral term 'batter' replacing 'batsman' in cricket's laws.",
            "url": "http://www.bbc.co.uk/sport/cricket/58751706",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/589C/production/_120748622_gettyimages-1343153470.jpg",
            "publishedAt": "2021-09-30T15:07:28.0740875Z",
            "content": "The MCC says the move to 'batter' is a natural progression\r\nClare Connor, managing director of women's cricket at the England and Wales Cricket Board, says she is not surprised by the adverse reactio… [+2724 chars]"
        },
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": "BBC Sport",
            "title": "Sunrisers Hyderabad v Chennai Super Kings - Cricket - BBC Sport",
            "description": "Find out the in depth batting and bowling figures for Sunrisers Hyderabad v Chennai Super Kings in the Indian Premier League on BBC Sport.",
            "url": "https://www.bbc.co.uk/sport/cricket/scorecard/ECKO50849",
            "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.21.1/images/bbc-sport-logo.png",
            "publishedAt": "2021-09-30T14:07:22.7708644Z",
            "content": "<table><tr><th>Batter</th><th>How Out</th><th>Bowler</th><th>Runs</th><th>Balls</th><th>4s</th><th>6s</th><th>Mins</th><th>SR</th></tr>\r\n<tr><th>Total</th><th>(1.2 overs)</th><th>4-for0wickets</th><t… [+1143 chars]"
        },
        {
            "source": {
                "id": "abc-news-au",
                "name": "ABC News (AU)"
            },
            "author": "ABC News",
            "title": "Cricket Australia scrambles to reschedule Sheffield matches ahead of Ashes series",
            "description": "Contenders for the Australia XI to face England in the men's Ashes may not get much of a chance to play red-ball cricket before the series begins in December.",
            "url": "http://www.abc.net.au/news/2021-09-30/cricket-australia-scrambling-to-reschedule-sheffield-shield/100505546",
            "urlToImage": "https://live-production.wcms.abc-cdn.net.au/9148df72b1c3bd9dd61852631f06c980?impolicy=wcms_crop_resize&cropH=1517&cropW=2709&xPos=291&yPos=51&width=862&height=485",
            "publishedAt": "2021-09-30T09:51:26Z",
            "content": "The Sheffield Shield remains in a state of flux, as Cricket Australia (CA) attempts to ensure Test stars and hopefuls have ample time in red-ball cricket ahead of the men's Ashes.\r\nKey points:\r\n<ul><… [+2577 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }


    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=412204cb6c3246d28545beb5cf819692&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles})
    }

    handlePrevClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=412204cb6c3246d28545beb5cf819692&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }

    handleNextClick = async ()=>{

        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=412204cb6c3246d28545beb5cf819692&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    }

    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center">News-Express- Top Headlines</h2>
                <Spinner />
                <div className="row">
                    {this.state.articles.map((element)=>{
                      return <div className="col-md-4" key={element.url}>
                            <NewsItems title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-warning" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button type="button" className="btn btn-warning" onClick={this.handleNextClick}>Next &rarr; </button>
                </div>
            </div>
        )
    }
}



News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.protoTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}


export default News;
                



                

