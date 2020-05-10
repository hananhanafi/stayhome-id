import React,{ Component } from "react";
import Axios from "axios";
import moment from 'moment';
import Card from '../components/home/Card';
import AnyChart from 'anychart-react';
import anychart from 'anychart'



class Home extends React.Component{
    state = {
        dataIndonesia:[],
        loading:true,
        loadIndonesia:true,
        dataGlobal:[],
        dataCountries:[],
        date:"",
        dataAllIndonesia:[],
    }

    componentWillMount(){

        Axios.get('https://api.covid19api.com/summary')
        .then(response => {
            return response.data;
        })
        .then(data=>{
            this.setState({
                dataGlobal: data.Global,
                dataCountries:data.Countries,
                date:data.Date,
                loading:false,
            })
        })
        .catch(error => {
            console.log(error);
        });

        Axios.get('https://api.covid19api.com/total/country/indonesia')
        .then(response=>{
            return response.data
        })
        .then(data=>{
            this.setState({
                dataIndonesia:data[data.length-1],
                dataAllIndonesia:data,
                loadIndonesia:false,

            })
            console.log(this.state.dataAllIndonesia);
        })
        
    }


    renderLoading() {
        return <h3 className="mt-5 text-center">
            Loading...
        </h3>
    }

    render(){
        const {dataIndonesia,loading,loadIndonesia,dataGlobal,dataCountries,dataAllIndonesia} = this.state
        let dataTableIndonesiaConfirmed = [];
        let dataTableIndonesiaRecovered = [];
        let dataTableIndonesiaDeaths = [];

        if(!loadIndonesia){
            dataAllIndonesia.map((data,index)=>{
                if(index>40){
                    let date = moment(data.Date).format('l'); 
    
                    dataTableIndonesiaConfirmed.push([date,data.Confirmed]);
                    dataTableIndonesiaRecovered.push([date,data.Recovered]);
                    dataTableIndonesiaDeaths.push([date,data.Deaths]);

                }
            })
        }

        

        let stage = anychart.graphics.create();

        let chart2 = anychart.column();
        var series_1 = chart2.column(dataTableIndonesiaConfirmed);
        series_1.name('Positif');
        var series_1 = chart2.line(dataTableIndonesiaConfirmed);
        series_1.name('Positif');

        
        var series_2 =chart2.column(dataTableIndonesiaRecovered);
        series_2.name('Sembuh');
        var series_2 = chart2.line(dataTableIndonesiaRecovered);
        series_2.name('Sembuh');

        var series_3 =chart2.column(dataTableIndonesiaDeaths);
        series_3.name('Meninggal');
        var series_3 = chart2.line(dataTableIndonesiaDeaths);
        series_3.name('Meninggal');
        chart2.bounds(0,0, '100%', '100%');
        

        
        if(!loading){
            var date = moment(this.state.date).startOf('day').fromNow();
        }

        return (
        <header className="App-header">
            {loading && this.renderLoading()}
            {!loading && !loadIndonesia && 
            (<div className="container">
                <div className="container text-center my-5 bg-white p-md-5 p-2" style={{borderRadius:"20px"}}>
                    <div className="row mb-3">
                        <div className="col">
                        <h1>Kasus Covid-19 Global Live Data</h1>
                        </div>
                    </div>
                    <div className="row text-left">
                        <Card status="Positif" jumlah={dataGlobal.TotalConfirmed.toLocaleString()} urlImage="positif" type="warning"/>
                        <Card status="Sembuh" jumlah={dataGlobal.TotalRecovered.toLocaleString()} urlImage="sembuh" type="success"/>
                        <Card status="Meninggal" jumlah={dataGlobal.TotalDeaths.toLocaleString()} urlImage="meninggal" type="danger"/>
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
                        <Card status="Positif" jumlah={dataIndonesia.Confirmed.toLocaleString()} urlImage="positif" type="warning"/>
                        <Card status="Sembuh" jumlah={dataIndonesia.Recovered.toLocaleString()} urlImage="sembuh" type="success"/>
                        <Card status="Meninggal" jumlah={dataIndonesia.Deaths.toLocaleString()} urlImage="meninggal" type="danger"/>
                    </div>

                    <div className="row my-3">
                        <div className="col-12 text-center ">
                            <h1 className="my-3">Grafik Data Kasus Covid-19 di Indonesia</h1>
                        </div>
                        <div className="col-md-4 col-12 text-center ">
                            <div className="d-flex">
                            <div className=" mb-2 " style={{width:"50px",height:"50px",backgroundColor:"rgb(100, 181, 246)"}}></div>
                            <h2 className="mr-auto">Positif</h2>

                            </div>
                        </div>
                        <div className="col-md-4 col-12 text-center ">
                            <div className="d-flex">
                            

                            <div className=" mb-2" style={{width:"50px",height:"50px",backgroundColor:"rgb(239, 108, 0)"}}></div>
                            <h2 className="mr-auto">Sembuh</h2>
                            
                            

                            </div>
                        </div>
                        <div className="col-md-4 col-12 text-center ">
                            <div className="d-flex">
                            
                            <div className=" mb-2" style={{width:"50px",height:"50px",backgroundColor:"rgb(69, 90, 100)"}}></div>
                            <h2 className="mr-auto">Meninggal</h2>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            
                        <AnyChart
                            instance={stage}
                            width="100%"
                            height={600}
                            charts={[chart2]}
                        />
                        </div>
                    </div>
                    
                    <hr/>

                    <div className="row text-left">
                        <div className="col">
                        <p>Data Kasus Covid-19 berdasarkan negara : </p>
                        </div>
                    </div>
                    <div className="row text-left">
                        <div className="col">
                        <table style={{maxHeight:"600px"}} className="table table-hover table-sm  table-responsive">
                            <thead className="text-black">
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Negara</th>
                                <th scope="col">Positif</th>
                                <th scope="col">Sembuh</th>
                                <th scope="col">Meninggal</th>
                            </tr>
                            </thead>
                            <tbody>
                                {dataCountries.map((data,index)=>{
                                    return <tr className="text-black">
                                    <th scope="row">{index+1}</th>
                                    <td>{data.Country}</td>
                                    <td>{data.TotalConfirmed}</td>
                                    <td>{data.TotalRecovered}</td>
                                    <td>{data.TotalDeaths}</td>
                                </tr>
                                })}
                            </tbody>
                        </table>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                        <p>last update: {date} </p>
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