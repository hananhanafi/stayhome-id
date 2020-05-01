import React,{ Component } from "react";
import './Login.css';
import axios from 'axios';
import Swal from 'sweetalert2';


class Login extends Component{
    constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			errors: [],
			loading: false
		};
    }
    handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

    handleSubmit = (event) => {
        event.preventDefault();
        
        const userData = {
            email : this.state.email,
            password : this.state.password
        }
        axios
            .post('/login',userData)
            .then((response)=>{
                localStorage.setItem('AuthToken', `Bearer ${response.data.token}`);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login success',
                    showConfirmButton: false,
                    timer: 1500
                })
				this.props.history.push('/admin/dashboard');
            })
            .catch((error)=>{
                console.log(error.response)
                if(error.request.status == 400){
                    
                    if(error.response.data.email!=undefined){
                        var message = "Email " + error.response.data.email 
                    }else{
                        var message = "Password " + error.response.data.password
                    }

                    Swal.fire({
                        title: 'Error!',
                        text: message,
                        icon: 'error',
                        confirmButtonText: 'Close'
                    })

                }else{
                    Swal.fire({
                        title: 'Error!',
                        text: error.response.data.general,
                        icon: 'error',
                        confirmButtonText: 'Close'
                    })
                }
            })
            

    }
    render(){

        return (
        <div className="App-header">
            <div class="container">
                <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card card-signin my-5">
                    <div class="card-body">
                        <h5 class="card-title text-center">Sign In</h5>
                        <img src={require('../../assets/img/stayhome-logo.png')} alt=""/>

                        <form class="form-signin">
                        <div class="form-label-group">
                            <input name="email" onChange={this.handleChange} type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                            <label for="inputEmail">Email address</label>
                        </div>

                        <div class="form-label-group">
                            <input name="password" onChange={this.handleChange} type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                            <label for="inputPassword">Password</label>
                        </div>
                        <button onClick={this.handleSubmit} class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                        <hr class="my-4"/>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>


        </div>
        )
    }
}

export default Login;