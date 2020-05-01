import React,{ Component } from "react";
import axios from 'axios';
import { withRouter } from "react-router-dom";
import moment from 'moment';

class Blog extends Component{

    constructor(props){
        super(props);

        this.state = {
            articles:'',
            load:true,
        }
    }

    componentWillMount = () =>{
        axios.get('https://us-central1-stayhome-id.cloudfunctions.net/api/articles')
        .then((response)=>{
            this.setState({
                articles : Array.from(response.data),
                load:false

            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    showHandle(data){
        let articleId = data.data.articleId
        console.log(data.data.articleId)
        this.props.history.push(`/blog/${articleId}`)
    }

    renderLoading() {
        return <h3 className="text-center App-header">
            Loading...
        </h3>
    }


    render(){

        return (
        <div>
            
            {this.state.load && this.renderLoading()}
            {!this.state.load && 
            <div className="container text-black">
                <div className="row">
                    <div className="col-12 my-5">
                        <h1>Blog</h1>

                    </div>
                </div>
                <div className="row mb-5">
                    {Object.keys(this.state.articles).map((key)=>{
                    {var data = this.state.articles[key]}
                    {var date = moment(data.createdAt, "YYYYMMDD").fromNow()}
                    return (
                        <div className="col-12 mb-2">
                            <div class="card w-100">
                                <div class="card-body text-left">
                                    <h5 class="card-title">{data.title}</h5>
                                    <small>{date}</small>
                                    <button onClick={()=>this.showHandle({data})} class="btn btn-primary float-right">Baca</button>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                    
                    
                </div>
            </div>
                }


        </div>
        )
    }
}

export default withRouter(Blog);