import React,{ Component } from "react";
import axios from 'axios';
import {authMiddleWare} from '../../util/auth';
import { Editor } from '@tinymce/tinymce-react'; 
import Swal from 'sweetalert2';


class Article extends Component{
    constructor(props) {
		super(props);

		this.state = {
			articles: '',
			title: '',
			body: '',
			articleId: '',
			errors: [],
			open: false,
			uiLoading: true,
			buttonType: '',
			viewOpen: false
        };
    }
    componentWillMount = () => {
		// authMiddleWare(this.props.history);
		const authToken = localStorage.getItem('AuthToken');
		axios.defaults.headers.common = { Authorization: `${authToken}` };
		axios
			.get('/articles')
			.then((response) => {
				this.setState({
					articles: response.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
    };

    requestArticles = () =>{
        const authToken = localStorage.getItem('AuthToken');
		axios.defaults.headers.common = { Authorization: `${authToken}` };
		axios
			.get('/articles')
			.then((response) => {
				this.setState({
					articles: response.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
    }

    handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

    handleEditorChange = (e) => {
        
        this.setState({
            body:e.target.getContent()
        })
        console.log(
            'Content was updated:',
            this.state.body
        );
    }

    createHandleSubmit = (event) =>{
        authMiddleWare(this.props.history);
        event.preventDefault();
        const newArticle={
            title : this.state.title,
            body : this.state.body
        }
        const authToken = localStorage.getItem('AuthToken');
        axios.defaults.headers.common = { Authorization: `${authToken}` };
        axios.post('/article',newArticle)
        .then((response)=>{
            this.requestArticles();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Success',
                showConfirmButton: false,
                timer: 1500
            })
        })
        .catch((error)=>{
            console.log(error)
        })
        this.setState({
            title:"",
            body:""
        })
    }
        
    deleteArticleHandler(data) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
        if (result.value) {
            
            authMiddleWare(this.props.history);
            const authToken = localStorage.getItem('AuthToken');
            axios.defaults.headers.common = { Authorization: `${authToken}` };
            let articleId = data.article.articleId;
            axios
                .delete('/article/'+`${articleId}`)
                .then(() => {
                    this.requestArticles()
                })
                .then(()=>{
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'Delete succesfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        })

		
    }
    handleEditClickOpen(data) {
		this.setState({
			title: data.article.title,
			body: data.article.body,
			articleId: data.article.articleId,
		});
    }
    
    editHandlerSubmit = (event)=>{
        const authToken = localStorage.getItem('AuthToken');
		axios.defaults.headers.common = { Authorization: `${authToken}` };
		const formRequest = {
			title: this.state.title,
			body: this.state.body,
        };
        let articleId = this.state.articleId;
        axios.put('/article/'+`${articleId}`,formRequest)
        .then(()=>{
            this.requestArticles();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Update succesfully',
                showConfirmButton: false,
                timer: 1500
            })

        })
        .catch((error)=>{
            console.log(error)
        })

        

    }
    render(){
        return(
            <div>
            <div className="row">
                <div className="col text-left">
                    {/* <!-- Page Heading --> */}
                    {/* <h1 class="h3 mb-2 text-gray-800">Articles</h1> */}

                    {/* <!-- DataTales Example --> */}
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary float-left">Articles </h6>
                        <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#modalCreate">
                        ADD +
                        </button>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Title</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.keys(this.state.articles).map((key)=>{
                                            {var article = this.state.articles[key]}
                                            return (
                                                <tr>
                                                    <td>{parseInt(key)+1}</td>
                                                    <td>{article.title}</td>
                                                    <td>
                                                        <button className="btn mx-2 btn-warning" onClick={()=>this.handleEditClickOpen({article})} data-toggle="modal" data-target="#modalEdit"> Edit</button>
                                                        <button className="btn mx-2  btn-danger" onClick={() => this.deleteArticleHandler({article})}>Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                        
                                    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                

                {/* <!-- Modal --> */}
                <div class="modal fade" id="modalCreate" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Create new article</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body text-left">
                                <label for="inputTitle">Title</label>
                                <input name="title" onChange={this.handleChange} type="text" class="form-control" id="inputTitle" aria-describedby="emailHelp"></input>
                                <label for="exampleInputEmail1">Body</label>

                                <Editor
                                    name="body"
                                    apiKey="8ypfbow8mpjv1wvtnpgg5tt4m8bpqo0wgvsnmukzs7z8ahtv"
                                    init={{
                                    height: 500,
                                    menubar: false,
                                    plugins: [
                                        'advlist autolink lists link image', 
                                        'charmap print preview anchor help',
                                        'searchreplace visualblocks code',
                                        'insertdatetime media table paste wordcount'
                                    ],
                                    toolbar:
                                        'undo redo | formatselect | bold italic | \
                                        alignleft aligncenter alignright | \
                                        bullist numlist outdent indent | help'
                                    }}
                                    onChange={this.handleEditorChange}
                                />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={this.createHandleSubmit} data-dismiss="modal" >Add</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Modal --> */}
                <div class="modal fade" id="modalEdit" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Create new article</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body text-left">
                                <label for="inputTitle">Title</label>
                                <input value={this.state.title} name="title" onChange={this.handleChange} type="text" class="form-control" id="inputTitle" aria-describedby="emailHelp"></input>
                                <label for="exampleInputEmail1">Body</label>

                                <Editor
                                value={this.state.body}
                                    name="body"
                                    apiKey="8ypfbow8mpjv1wvtnpgg5tt4m8bpqo0wgvsnmukzs7z8ahtv"
                                    init={{
                                    height: 500,
                                    menubar: false,
                                    plugins: [
                                        'advlist autolink lists link image', 
                                        'charmap print preview anchor help',
                                        'searchreplace visualblocks code',
                                        'insertdatetime media table paste wordcount'
                                    ],
                                    toolbar:
                                        'undo redo | formatselect | bold italic | \
                                        alignleft aligncenter alignright | \
                                        bullist numlist outdent indent | help'
                                    }}
                                    onChange={this.handleEditorChange}
                                />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={this.editHandlerSubmit} data-dismiss="modal" >Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Article;
