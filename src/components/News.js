import React, { Component } from "react";
import NewsItem from "./NewsItem";
import notFound from "../not_found.jpeg";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  
  constructor() {
    super();
    this.state={
        articles:[],
        totalResults:0,
        loading:true,
        pageSize:6,
        page: 1
    }
  }
  PreviousPage =()=>{
    this.setState({page: this.state.page - 1})
    this.ShowNews();
  }
  NextPage =()=>{
    this.setState({page: this.state.page + 1})
    this.ShowNews();
  }
  ShowNews = async ()=>{
    let {apiKey, category} = this.props;
    //this.setState({loading: true, articles:[]})
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&pageSize=${this.state.pageSize}&page=${this.state.page}`;
    let data = await fetch(url)
    let parsedData = await data.json()
    
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
    document.title = category+" - NewsHP"
  }
  fetchMoreData = async ()=>{
    this.setState({page: this.state.page + 1})
    let {apiKey, category} = this.props;
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&pageSize=${this.state.pageSize}&page=${this.state.page}`;
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles), 
      totalResults: parsedData.totalResults
    })
  }
  componentDidMount(){
      this.ShowNews()  
  }
  render() {
    return (
      <div className="container my-4 mt-5 pt-5">
        <h1 className="text-center mb-3">NewsHP - Top Headlines</h1>
        {this.state.loading && <Loading/>}
        <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Loading/>}
          >
          <div className="container">
            <div className="row">
            {this.state.articles.map((e)=>{
                return (
                <div className="col-sm-4 my-3" key={e.url}>
                    <NewsItem title={e.title} description={e.description}
                     imageUrl={e.urlToImage?e.urlToImage:notFound} url={e.url} />
                </div>)
            })}
            {/*<div className="col-md-12">
              <div className="d-flex bd-highlight mb-3">
                <div className="me-auto p-2">
                  <button disabled={this.state.page === 1?true:""} onClick={this.PreviousPage} className="btn btn-md btn-dark">Previous</button>
                </div>
                <div className="p-2">
                  <button onClick={this.NextPage} className="btn btn-md btn-dark">Next</button>
                </div>
              </div>
          </div>*/}
          </div>
        </div>
        </InfiniteScroll>
      </div>
    );
  }
}
