import React from 'react';

function Saran() {
    return (
        <div className="row">
            <div className="col-12">
                <div className=" text-center text-black mb-5 bg-white p-md-5 p-2" style={{borderRadius:"20px"}}>
                    <h2>Saran</h2>
                    <hr/>
                    <h3 className="my-5">Perlengkapan Perlindungan dari Covid-19</h3>
                

                    <div className="row">
                        <div className="col-md-3 col-12">
                            
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="horizontal">
                                <a className="nav-link active bg-black" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">General</a>
                                <a className="nav-link " id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Medical Staff</a>
                            
                            </div>
                        </div>
                        <div className="col-md-9 col-12">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <img src={require('../../assets/img/advice/generaladvice.png')} alt="aa" className="mb-5 mb-0"/>
                                        </div>
                                        <div className="col-md-6 col-12">

                                            <div className="row text-md-left text-center">
                                                <div className="col-12 mb-4">
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <img className="w-100" src={require('../../assets/img/advice/facemask.png')} alt=""/>

                                                        </div>
                                                        <div className="col d-flex align-items-center text-left">
                                                            <h3>Face Mask</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 mb-4">
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <img className="w-100" src={require('../../assets/img/advice/washhands.png')} alt=""/>

                                                        </div>
                                                        <div className="col d-flex align-items-center text-left">
                                                            <h3>Wash Hands</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 mb-4">
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <img className="w-100" src={require('../../assets/img/advice/avoidcontact.png')} alt=""/>

                                                        </div>
                                                        <div className="col d-flex align-items-center text-left">
                                                            <h3>Avoid Contact</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 mb-4">
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <img className="w-100" src={require('../../assets/img/advice/donttouchface.png')} alt=""/>

                                                        </div>
                                                        <div className="col d-flex align-items-center text-left">
                                                            <h3>Don't Touch Face</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 mb-4">
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <img className="w-100" src={require('../../assets/img/advice/keepdistance.png')} alt=""/>

                                                        </div>
                                                        <div className="col d-flex align-items-center text-left">
                                                            <h3>Keep Distance</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                                
                                <div className="tab-pane fade  " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <img src={require('../../assets/img/advice/medicalstaff.png')} alt="aa" className="mb-5 mb-0"/>
                                        </div>
                                        <div className="col-md-6 col-12">

                                            <div className="row text-md-left text-center">
                                                <div className="col-12 mb-4">
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <img className="w-100" src={require('../../assets/img/advice/eyegear.png')} alt=""/>

                                                        </div>
                                                        <div className="col d-flex align-items-center text-left">
                                                            <h3>Eye Gear</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 mb-4">
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <img className="w-100" src={require('../../assets/img/advice/n95mask.png')} alt=""/>

                                                        </div>
                                                        <div className="col d-flex align-items-center text-left">
                                                            <h3>N95 Mask</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 mb-4">
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <img className="w-100" src={require('../../assets/img/advice/disposablecloth.png')} alt=""/>

                                                        </div>
                                                        <div className="col d-flex align-items-center text-left">
                                                            <h3>Disposable Cloth</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 mb-4">
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <img className="w-100" src={require('../../assets/img/advice/surgicalgloves.png')} alt=""/>

                                                        </div>
                                                        <div className="col d-flex align-items-center text-left">
                                                            <h3>Surgical Gloves</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 mb-4">
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <img className="w-100" src={require('../../assets/img/advice/shoecover.png')} alt=""/>

                                                        </div>
                                                        <div className="col d-flex align-items-center text-left">
                                                            <h3>Shoe Cover</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                
                            
                    <div className="row text-left text-black">
                        <div className="col-12">
                            <hr className="my-5"/>
                            <h3>Langkah-Langkah perlindungan dasar terhadap Covid-19</h3>
                            <ol>
                                <li>
                                    Sering mencuci tangan
                                    <p>Secara teratur dan menyeluruh bersihkan tangan Anda dengan digosok menggunakan air berbasis alkohol atau cuci dengan sabun dan air.

                                    Mengapa? Mencuci tangan dengan sabun dan air atau menggunakan air berbasis alkohol membunuh virus yang mungkin ada di tangan Anda.</p>
                                </li>
                                <li>
                                    Menjaga jarak fisik
                                    <p>Pertahankan jarak setidaknya 1 meter antara Anda dan siapa saja yang batuk atau bersin.

                                    Mengapa? Ketika seseorang batuk atau bersin, mereka menyemprotkan tetesan cairan kecil dari hidung atau mulut mereka yang mungkin mengandung virus. Jika Anda terlalu dekat, Anda bisa menghirup tetesan air, termasuk virus COVID-19 jika orang tersebut menderita batuk.</p>
                                </li>
                                <li>
                                    Hindari menyentuk mata, hidung, dan mulut
                                    <p> Tangan menyentuh banyak permukaan dan dapat mengambil virus. Setelah terkontaminasi, tangan dapat memindahkan virus ke mata, hidung, atau mulut Anda. Dari sana, virus bisa masuk ke tubuh Anda dan bisa membuat Anda sakit.</p>
                                </li>
                                <li>
                                    Mempraktikan kebersihan pernafasan
                                    <p> Pastikan Anda, dan orang-orang di sekitar Anda, mengikuti kebersihan pernapasan yang baik. Ini berarti menutupi mulut dan hidung Anda dengan siku atau jaringan yang tertekuk saat Anda batuk atau bersin. Kemudian segera buang tisu bekas. Dengan mengikuti kebersihan pernafasan yang baik Anda melindungi orang-orang di sekitar Anda dari virus seperti flu, flu dan COVID-19.</p>
                                </li>
                                <li>
                                    Jika mengalami demam, batuk, dan kesulitan bernafas, segera cari perawatan medis sejak dini
                                    <p>
                                    Tetap di rumah jika Anda merasa tidak sehat. Jika Anda mengalami demam, batuk dan kesulitan bernapas, cari bantuan medis dan hubungi terlebih dahulu. Ikuti arahan otoritas kesehatan setempat Anda. Otoritas nasional dan lokal akan memiliki informasi terbaru tentang situasi di daerah Anda. Menelepon terlebih dahulu akan memungkinkan penyedia layanan kesehatan Anda dengan cepat mengarahkan Anda ke fasilitas kesehatan yang tepat. Ini juga akan melindungi Anda dan membantu mencegah penyebaran virus dan infeksi lainnya.

                                    </p>
                                </li>
                                <li>
                                    Tetap update informasi dan ikuti saran yang diberikan layanan kesehatan setempat
                                    <p>
                                    Tetap update informasi tentang perkembangan terbaru tentang COVID-19. Ikuti saran yang diberikan oleh penyedia layanan kesehatan Anda, otoritas kesehatan publik nasional dan lokal Anda atau majikan Anda tentang cara melindungi diri sendiri dan orang lain dari COVID-19. Otoritas nasional dan lokal akan memiliki informasi terbaru tentang apakah COVID-19 menyebar di daerah Anda. Mereka ditempatkan paling baik untuk memberi nasihat tentang apa yang harus dilakukan orang di daerah Anda untuk melindungi diri mereka sendiri.
                                    </p>
                                </li>
                            </ol>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Saran;
