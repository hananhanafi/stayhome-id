import React from 'react';

function VideoEdukasi() {
    return (
        <div className="row">
            <div className="col-12">
                <div className=" text-center text-black mb-5 bg-white p-md-5 p-2" style={{borderRadius:"20px"}}>
                    <h2>Informasi</h2>
                    <hr/>
                    <div className="accordion" id="accordionExample">
                        
                        <div className="card">
                            <div className="card-header text-left" id="headingTwo">
                            <h2 className="mb-0">
                                <button className="btn collapsed w-100 text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Apa itu Coronavirus ?
                                </button>
                            </h2>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div className="card-body text-left">
                                    <small>
                                    Coronavirus adalah keluarga besar virus yang dapat menyebabkan penyakit pada hewan atau manusia. Pada manusia, beberapa coronavirus diketahui menyebabkan infeksi pernafasan mulai dari flu biasa hingga penyakit yang lebih parah seperti Sindrom Pernafasan Timur Tengah (MERS) dan Sindrom Pernafasan Akut Parah (SARS). Virus corona yang paling baru ditemukan menyebabkan penyakit coronavirus COVID-19.
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header text-left" id="headingThree">
                            <h2 className="mb-0">
                                <button className="btn collapsed w-100 text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Apa itu Covid-19 ?
                                </button>
                            </h2>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div className="card-body text-left">
                                    <small>
                                    COVID-19 adalah penyakit menular yang disebabkan oleh coronavirus yang paling baru ditemukan. Virus dan penyakit baru ini tidak diketahui sebelum wabah dimulai di Wuhan, Cina, pada bulan Desember 2019.
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header text-left" id="headingFour">
                            <h2 className="mb-0">
                                <button className="btn collapsed w-100 text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Apa gejala covid-19 ?
                                </button>
                            </h2>
                            </div>
                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                <div className="card-body text-left">
                                    <small>
                                    Gejala COVID-19 yang paling umum adalah demam, kelelahan, dan batuk kering. Beberapa pasien mungkin mengalami sakit dan nyeri, hidung tersumbat, pilek, sakit tenggorokan atau diare. Gejala-gejala ini biasanya ringan dan mulai secara bertahap. Beberapa orang menjadi terinfeksi tetapi tidak mengembangkan gejala apa pun dan merasa tidak enak badan. Kebanyakan orang (sekitar 80%) pulih dari penyakit tanpa perlu perawatan khusus. Sekitar 1 dari setiap 6 orang yang mendapatkan COVID-19 sakit parah dan mengalami kesulitan bernapas. Orang yang lebih tua, dan mereka yang memiliki masalah medis yang mendasari seperti tekanan darah tinggi, masalah jantung atau diabetes, lebih mungkin untuk mengembangkan penyakit serius. Orang dengan demam, batuk dan kesulitan bernapas harus mencari perhatian medis.
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header text-left" id="headingFive">
                            <h2 className="mb-0">
                                <button className="btn collapsed w-100 text-left" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Bagaimana cara covid-19 menyebar ?
                                </button>
                            </h2>
                            </div>
                            <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                <div className="card-body text-left">
                                    <small>
                                    Orang dapat menangkap COVID-19 dari orang lain yang memiliki virus. Penyakit ini dapat menyebar dari orang ke orang melalui tetesan kecil dari hidung atau mulut yang menyebar ketika seseorang dengan COVID-19 batuk atau buang napas. Tetesan ini mendarat pada benda dan permukaan di sekitar orang tersebut. Orang lain kemudian menangkap COVID-19 dengan menyentuh benda atau permukaan ini, kemudian menyentuh mata, hidung, atau mulut mereka. Orang-orang juga dapat menangkap COVID-19 jika mereka menghirup tetesan dari seseorang dengan COVID-19 yang batuk atau mengeluarkan tetesan. Inilah sebabnya mengapa penting untuk tinggal lebih dari 1 meter (3 kaki) dari orang yang sakit.
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-left">
                        <small style={{fontSize:"small"}}>Sumber : WHO</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoEdukasi;
