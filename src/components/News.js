import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  // articles = [
  //     {
  //       "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
  //       "author": "Al Jazeera",
  //       "title": "US condemns brutal sexual assault video from Indias Manipur - Al Jazeera English",
  //       "description": "US State Department says it is deeply concerned by reports of viral video showing two women paraded naked in the state.",
  //       "url": "https://www.aljazeera.com/news/2023/7/24/us-condemns-brutal-sexual-assault-video-from-indias-manipur",
  //       "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/07/AP23203419551348-1690040018.jpg?resize=1920%2C1440",
  //       "publishedAt": "2023-07-24T09:55:46Z",
  //       "content": "The United States says it is deeply concerned by reports of a viral video showing two women paraded naked in Indias northeastern state of Manipur, a sexual assault case that enraged the country.\r\nThe… [+3011 chars]"
  //     },
  //     {
  //       "source": { "id": "cnn", "name": "CNN" },
  //       "author": "Jacopo Prisco",
  //       "title": "There is a gravity hole in the Indian Ocean, and scientists now think they know why - CNN",
  //       "description": "An anomaly known as the geoid low has long puzzled geologists. One team has found what it believes is a credible explanation, and it’s coming from deep inside Earth.",
  //       "url": "https://www.cnn.com/2023/07/24/world/gravity-hole-geoid-low-indian-ocean-scn/index.html",
  //       "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230720105429-gravity-hole-geoid-low-indian-ocean.jpg?c=16x9&q=w_800,c_fill",
  //       "publishedAt": "2023-07-24T08:45:00Z",
  //       "content": "Editors Note: Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nThere is a gravity hole in the Indian Oc… [+6599 chars]"
  //     },
  //     {
  //       "source": { "id": "cnn", "name": "CNN" },
  //       "author": "Rhea Mogul",
  //       "title": "Sex scene in ‘Oppenheimer’ becomes latest target of India’s Hindu nationalists - CNN",
  //       "description": "Christopher Nolan’s latest blockbuster movie “Oppenheimer” has sparked controversy among the Hindu-right in India, with some calling for a boycott and demanding the removal of a sex scene in which the titular character utters a famous line from the religion’s…",
  //       "url": "https://www.cnn.com/2023/07/24/media/india-oppenheimer-backlash-hindu-right-intl-hnk/index.html",
  //       "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230721154806-cillian-murphy-oppenheimer-still.jpg?c=16x9&q=w_800,c_fill",
  //       "publishedAt": "2023-07-24T07:07:00Z",
  //       "content": "Christopher Nolans latest blockbuster movie Oppenheimer has sparked controversy among the Hindu-right in India, with some calling for a boycott and demanding the removal of a sex scene in which the t… [+4174 chars]"
  //     }
  //   ];

capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  constructor(props) {
    super(props);
    console.log("I am constructor from newsItem component");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedDdata = await data.json();
    console.log(parsedDdata);
    this.setState({
      articles: parsedDdata.articles,
      totalResults: parsedDdata.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8a50520891084045bbbe585a4de7f7b6&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true})
    // let data = await fetch(url);
    // let parsedDdata = await data.json();
    // console.log(parsedDdata);
    // this.setState({
    //     articles: parsedDdata.articles,
    //      totalResults: parsedDdata.totalResults,
    //     loading: false})
    this.updateNews();
  }

//   handlePreviousClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=8a50520891084045bbbe585a4de7f7b6&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true})
    // let data = await fetch(url);
    // let parsedDdata = await data.json();
    // console.log(parsedDdata);
    // this.setState({
    //     page: this.state.page - 1,
    //     articles: parsedDdata.articles,
    //     loading: false
    // })
//     this.setState({ page: this.state.page - 1 });
//     this.updateNews();
//   };

//   handleNextClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8a50520891084045bbbe585a4de7f7b6&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true})
    // let data = await fetch(url);
    // let parsedDdata = await data.json();
    // console.log(parsedDdata);
    // this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedDdata.articles,
    //     loading: false
    // })
//     this.setState({ page: this.state.page + 1 });
//     this.updateNews();
//   };

fetchMoreData =async () => {
    this.setState({page: this.state.page + 1});
    
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedDdata = await data.json();
    // console.log(parsedDdata);
    this.setState({
      articles: this.state.articles.concat(parsedDdata.articles),
      totalResults: parsedDdata.totalResults,
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "20px 0px" }}>
          NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}>

        <div className="container">
        <div className="row">
          {
        //   !this.state.loading &&    -- wont require for infinite scroll
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    date={element.publishedAt ? element.publishedAt : ""}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>

        {/* <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default News;
