import React, { Component } from 'react'
import Spinner from './component/Spinner';
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'

export class News extends Component {

    capitalizeFirstLetter = (string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    constructor(props){
        super(props); // eslint-disable-next-line
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsExpress`;    }


    async componentDidMount(){
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=412204cb6c3246d28545beb5cf819692&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false})
            this.props.setProgress(100);
    }




    handlePrevClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;        
        let data = await fetch(url);
        this.setState({loading: true});
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    handleNextClick = async ()=>{

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;        
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    render() {
        return (
            <div className="container my-3 mx-auto">
                <h2 className="text-center">News-Express- Top Headlines</h2>
                {this.state.loading && <Spinner />}
                <div className="row">
                {!this.state.loading && this.state.articles.map((element)=>{
                      return <div className="col-md-4" key={element.url}>
                            <NewsItems title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-warning" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-warning" onClick={this.handleNextClick}>Next &rarr; </button>
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
                



                

