import React,{ Component } from "react";
import './css/sb-admin-2.css';
import './css/sb-admin-2.min.css';
import Article from '../../components/admin/Article';
import axios from 'axios';
import {authMiddleWare} from '../../util/auth';


class Dashboard extends Component{
    logoutHandler = (event) => {
		localStorage.removeItem('AuthToken');
		this.props.history.push('/login');
    };

    constructor(props) {
		super(props);

		this.state = {
			firstName: '',
			lastName: '',
			profilePicture: '',
			uiLoading: true,
			imageLoading: false
		};
	}

    componentWillMount = () => {
		const authToken = localStorage.getItem('AuthToken');
		axios.defaults.headers.common = { Authorization: `${authToken}` };
		axios
			.get('https://us-central1-stayhome-id.cloudfunctions.net/api/user')
			.then((response) => {
				console.log(response.data);
				this.setState({
					firstName: response.data.userCredentials.firstName,
					lastName: response.data.userCredentials.lastName,
					email: response.data.userCredentials.email,
					phoneNumber: response.data.userCredentials.phoneNumber,
					country: response.data.userCredentials.country,
					username: response.data.userCredentials.username,
					uiLoading: false,
					profilePicture: response.data.userCredentials.imageUrl
				});
			})
			.catch((error) => {
				if(error.response.status === 403) {
					this.props.history.push('/login')
				}
				console.log(error);
				this.setState({ errorMsg: 'Error in retrieving the data' });
			});
	};
    
    
    render(){

        return (
        <div id="page-top">

            {/* <!-- Page Wrapper --> */}
            {!this.state.uiLoading &&
            <div id="wrapper">

                {/* <!-- Sidebar --> */}
                <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion text-white d-none d-md-block" id="accordionSidebar">

                    {/* <!-- Sidebar - Brand --> */}
                    <a class="sidebar-brand d-flex align-items-center justify-content-center">
                        <div class="sidebar-brand-icon">
                        <img src={require('../../assets/img/stayhome-logo.png')} className="w-100" alt=""/>
                        </div>
                        <div class="sidebar-brand-text mx-3">Stayhome-ID</div>
                    </a>

                    {/* <!-- Divider --> */}
                    <hr class="sidebar-divider my-0"/>

                    {/* <!-- Nav Item - Dashboard --> */}
                    <li class="nav-item active">
                        <a class="nav-link">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                    </li>

                    

                    {/* <!-- Divider --> */}
                    <hr class="sidebar-divider d-none d-md-block"/>

                </ul>
                {/* <!-- End of Sidebar --> */}

                {/* <!-- Content Wrapper --> */}
                <div id="content-wrapper" class="d-flex flex-column">

                    {/* <!-- Main Content --> */}
                    <div id="content">

                        {/* <!-- Topbar --> */}
                        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                        {/* <!-- Sidebar Toggle (Topbar) --> */}
                        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                            <i class="fa fa-bars"></i>
                        </button>

                        {/* <!-- Topbar Navbar --> */}
                        <ul class="navbar-nav ml-auto">
                            <div class="topbar-divider d-none d-sm-block"></div>

                            {/* <!-- Nav Item - User Information --> */}
                            <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="mr-2 d-lg-inline text-gray-600 small">{this.state.username}</span>
                            </a>
                            {/* <!-- Dropdown - User Information --> */}
                            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#" onClick={this.logoutHandler} data-toggle="modal" data-target="#logoutModal">
                                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                Logout
                                </a>
                            </div>
                            </li>

                        </ul>

                        </nav>
                        {/* <!-- End of Topbar --> */}

                        {/* <!-- Begin Page Content --> */}
                        <div class="container-fluid">

                        {/* <!-- Page Heading --> */}
                        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                        </div>
                        
                            <Article/>

                        

                        </div>
                        {/* <!-- /.container-fluid --> */}

                    </div>
                    {/* <!-- End of Main Content --> */}

                </div>
                {/* <!-- End of Content Wrapper --> */}

            </div>
            }
            {/* <!-- End of Page Wrapper --> */}

        </div>
        )
    }
}

export default Dashboard;