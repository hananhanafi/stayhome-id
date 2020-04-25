import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from '../pages/Home';
import Berita from '../pages/Berita';
import Edukasi from '../pages/Edukasi';
import Blog from '../pages/Blog';
import Hotline from '../pages/Hotline';
import BlogDetail from '../pages/BlogDetail';
import Login from '../pages/admin/Login';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



class Router extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/">
                        <Navbar/>
                        <Home/>
                        <Footer/>
                    </Route>
                    <Route path="/berita">
                        <Navbar/>
                        <Berita/>
                        <Footer/>
                    </Route>
                    <Route path="/konten">
                        <Navbar/>
                        <Edukasi/>
                        <Footer/>
                    </Route>
                    <Route path="/blog/:articleId">
                        <Navbar/>
                        <BlogDetail/>
                        <Footer/>
                    </Route>
                    <Route path="/blog">
                        <Navbar/>
                        <Blog/>
                        <Footer/></Route>
                    <Route path="/hotline">
                        <Navbar/>
                        <Hotline/>
                        <Footer/>
                    </Route>
                    
                </Switch>
                
            </div>

        )
    }
}

export default Router;