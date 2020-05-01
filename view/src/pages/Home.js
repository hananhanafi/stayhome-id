import React,{ Component } from "react";
import Axios from "axios";
import moment from 'moment';
import Card from '../components/home/Card';



class Home extends React.Component{
    state = {
        dataIndonesia:[],
        dataProvinsi:[],
        loading:true,
        loadGlobal:true,
        totalPositif:[],
        totalSembuh:[],
        totalMeninggal:[],
        
        
    }

    componentWillMount(){

        // total positif
        
        Axios.get('https://api.kawalcorona.com/positif/')
        .then(response => {
            return response.data;
        
        })
        .then(data=>{
            this.setState({
                totalPositif:data,
            })
        })
        .catch(error => {
            console.log(error);
        });

        // total sembuh
        
        Axios.get('https://api.kawalcorona.com/sembuh/')
        .then(response => {
            return response.data;
        
        })
        .then(data=>{
            this.setState({
                totalSembuh:data,
            })
        })
        .catch(error => {
            console.log(error);
        });

        // total meninggal
        
        Axios.get('https://api.kawalcorona.com/meninggal/')
        .then(response => {
            return response.data;
        
        })
        .then(data=>{
            this.setState({
                totalMeninggal:data,
            })
        })
        .catch(error => {
            console.log(error);
        });


        Axios.get('https://api.kawalcorona.com/indonesia/')
        .then(response => {
            return response.data;
        
        })
        .then(data=>{
            this.setState({
                dataIndonesia:data,
            })
        })
        .catch(error => {
            console.log(error);
        });

        // provinsi

        Axios.get('https://api.kawalcorona.com/indonesia/provinsi/')
        .then(response => {
            return response.data;
        
        })
        .then(data=>{
            this.setState({
                dataProvinsi:data,
                loading: false
                
            })
        })
        .catch(error => {
            console.log(error);
        });


        


    }


    renderLoading() {
        return <h3 className="mt-5 text-center">
            Loading...
        </h3>
    }


    
    

    render(){
        const {dataIndonesia,loading,dataProvinsi,loadGlobal,totalPositif,totalMeninggal,totalSembuh} = this.state


        if(!loadGlobal){
            var date = moment(dataProvinsi[0].attributes.Last_Update).format('MMMM Do YYYY, h:mm:ss a');
        }

        return (
        <header className="App-header">
            {loading && this.renderLoading()}
            {!loading && 
            (<div className="container">
                <div className="container text-center my-5 bg-white p-md-5 p-2" style={{borderRadius:"20px"}}>
                    <div className="row mb-3">
                        <div className="col">
                        <h1>Kasus Covid-19 Global Live Data</h1>
                        </div>
                    </div>
                    <div className="row text-left">
                        <Card status="Positif" jumlah={totalPositif.value} urlImage="positif" type="warning"/>
                        <Card status="Sembuh" jumlah={totalSembuh.value} urlImage="sembuh" type="success"/>
                        <Card status="Meninggal" jumlah={totalMeninggal.value} urlImage="meninggal" type="danger"/>
                    </div>
                    <div className="row">
                        <div className="col">
                        <p>last update: {date} </p>
                        </div>
                    </div>
                </div>

                <div className="container text-center my-5 bg-white p-md-5 p-2" style={{borderRadius:"20px"}}>
                    
                    <div className="row mb-3">
                        <div className="col">
                        <h1>Kasus Covid-19 Indonesia Live Data</h1>
                        </div>
                    </div>
                    <div className="row text-left">
                        <Card status="Positif" jumlah={dataIndonesia[0].positif} urlImage="positif" type="warning"/>
                        <Card status="Sembuh" jumlah={dataIndonesia[0].sembuh} urlImage="sembuh" type="success"/>
                        <Card status="Meninggal" jumlah={dataIndonesia[0].meninggal} urlImage="meninggal" type="danger"/>
                    </div>

                    <div className="row">
                        <div className="col">
                        <p>last update: {date} </p>
                        </div>
                    </div>

                    <hr/>

                    <div className="row text-left">
                        <div className="col">
                        <p>Data Kasus Covid-19 berdasarkan provinsi : </p>
                        </div>
                    </div>
                    <div className="row text-left">
                        <div className="col-1">

                        </div>
                        <div className="col">
                        <table style={{maxHeight:"500px"}} className="table table-hover table-sm  table-responsive">
                            <thead className="">
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Provinsi</th>
                                <th scope="col">Positif</th>
                                <th scope="col">Sembuh</th>
                                <th scope="col">Meninggal</th>
                            </tr>
                            </thead>
                            <tbody>
                            {!loading &&
                            dataProvinsi.map((data,index)=>{
                                return <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{data.attributes.Provinsi}</td>
                                    <td>{data.attributes.Kasus_Posi}</td>
                                    <td>{data.attributes.Kasus_Semb}</td>
                                    <td>{data.attributes.Kasus_Meni}</td>
                                </tr>
                            })

                            }
                            
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>

                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-6 col-12 mb-3">
                            <a href="https://infeksiemerging.kemkes.go.id/">

                            <div className="card w-100 bg-primary text-white rounded text-left" >
                                <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>Media Informasi Resmi KEMENKES RI</p>
                                    <footer className=" text-white"><cite title="Source Title">Kemenkes RI</cite></footer>
                                </blockquote>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-12 mb-3">
                            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public">

                            <div className="card w-100 bg-success text-white rounded text-left" >
                                <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>Coronavirus disease (COVID-19) advice for the public</p>
                                    <footer className=" text-white"><cite title="Source Title">WHO</cite></footer>
                                </blockquote>
                                </div>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>)}



            </header>
        )
    }
}

export default Home;