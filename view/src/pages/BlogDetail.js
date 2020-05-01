import React,{ Component } from "react";
import axios from 'axios';
import { withRouter } from "react-router-dom";

class BlogDetail extends Component{
    constructor(props){
        super(props);

        this.state = {
            article:'',
            load:true,
        }
    }


    componentWillMount(){
        const {articleId} = this.props.match.params
        console.log("detail",articleId);

        axios.get(`/article/${articleId}`)
        .then((response)=>{
            this.setState({
                article: response.data,
                load:false
            })
            console.log(response.data);
        })
    }

    renderLoading() {
        return <h3 className="mt-5 text-center App-header">
            Loading...
        </h3>
    }
    render(){

        return (
        <div>
            {this.state.load && this.renderLoading()}
            {!this.state.load &&
            <div className="container">
                <div className="row my-5">
                    <div className="col text-left">
                        <a href="/blog">Blog</a> > {this.state.article.title}
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-12">
                    <div class="card w-100 text-black p-5">
                        <h1 class="card-title">{this.state.article.title}</h1>
                    <div class="card-body text-left">
                        <h6 class="card-subtitle mb-2 text-muted">
                            author : {this.state.article.username}
                        <br/>
                            created at : {this.state.article.createdAt}</h6>
                        <p class="card-text"><div
                        dangerouslySetInnerHTML={{
                            __html: this.state.article.body
                        }}></div></p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>

            }
        </div>
        )
    }
}

export default withRouter(BlogDetail);