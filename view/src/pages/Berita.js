import React from 'react';
import Card from '../components/berita/Card';
import WeatherCard from '../components/berita/WeatherCard';

import '../App.css'

import { getNews } from '../data/newsapi';

class Berita extends React.Component {
    state = {
        page: 1,
        dataArticle: [],
        loading: true,
        error: false,
    };

    componentDidMount() {
        this.fetchNews();
    }

    fetchNews(page = 1) {
        getNews(page)
        .then(data => {
            console.log(data);
            const { dataArticle } = this.state;
            const nextData = dataArticle.concat(data.articles);
            this.setState({
            dataArticle: nextData,
            loading: false,
            })
        })
        .catch(error => {
            console.log(error);
            this.setState({
            loading: false,
            error: true,
            })
        });
    }

    fetchNextPage() {
        const { page } = this.state;
        const nextPage = page + 1;
        this.fetchNews(nextPage);
        this.setState({ page: nextPage });
    }

    renderLoading() {
        return <h3 className="mt-5 text-center">
        Loading...
        </h3>
    }

    renderEmpty() {
        return <h5 className="mt-5 text-center text-muted">
        Tidak ada berita.
        </h5>
    }

    renderError() {
        return (
        <div>
            <h5 className="mt-5 text-center text-danger">
            Terdapat Error Saat Meload Berita.
            </h5>
        </div>
        )
    }

    render() {
        const { dataArticle, loading, error } = this.state;
        const isEmpty = !loading && dataArticle.length === 0;
        if (error) return this.renderError();
        return (
            <div>
                {loading && this.renderLoading()}
                {isEmpty && this.renderEmpty()}
                {!loading && (
                <div className="container">
                    <div className="row">
                    <div className="col-3 d-none d-md-block">
                    <WeatherCard/>

                    </div>
                    <div className="col-md-9 col-12">
                        <div className="news-container " >

                        {dataArticle.map((article) => {
                        return <Card
                            url={article.url}
                            image={article.urlToImage}
                            title={article.title}
                            author={article.author}
                            description={article.description}
                            published={article.publishedAt}
                        />
                        })}
                        </div>
                    </div>
                    <div className="col-3">

                    </div>
                    </div>
                </div>
                
                )}
                {!isEmpty && (
                <div className="mb-5 mt-5 text-center">
                    <button
                    onClick={() => this.fetchNextPage()}
                    className="btn btn-outline-primary btn-lg">
                    Load More
                    </button>
                </div>
                )}
            </div>
        )
    }
}

export default Berita;
