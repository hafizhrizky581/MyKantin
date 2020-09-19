import React, { Component, Fragment } from 'react'

class Food extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    {/* KATEGORI */}
                    <div className="judul mt-4 mb-4">
                        <h3 className="font-weight-bold">Kategori</h3>
                    </div>
                    <div className="kategori pilihan">
                        <div className="atas d-flex">
                            <div className="container p-0">
                                <a href="">
                                    <div className="isi">
                                        <img src="https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg" class="edgeimage d-block" style={{ width: '100%', filter: 'brightness(50%)' }} alt="..." />
                                        <div className="centered">Semua</div>
                                    </div>
                                </a>
                            </div>
                            <div className="container p-0">
                                <a href="">
                                    <div className="isi">
                                        <img src="https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/phut_0.jpg?itok=h30EAnkk" class="edgeimage d-block" style={{ width: '100%', filter: 'brightness(50%)' }} alt="..." />
                                        <div className="centered">Pizza</div>
                                    </div>
                                </a>
                            </div>
                            <div className="container p-0">
                                <a href="">
                                    <div className="isi">
                                        <img src="https://www.helpguide.org/wp-content/uploads/fast-foods-candy-cookies-pastries-768.jpg" class="edgeimage d-block" style={{ width: '100%', filter: 'brightness(50%)' }} alt="..." />
                                        <div className="centered">Burger</div>
                                    </div>
                                </a>
                            </div>
                            <div className="container p-0">
                                <a href="">
                                    <div className="isi">
                                        <img src="https://www.acure-fun.net/lounge/assets_c/2019/12/19Q3_12W2_juice_00-thumb-768xauto-2725.jpg" class="edgeimage d-block" style={{ width: '100%', filter: 'brightness(50%)' }} alt="..." />
                                        <div className="centered">Jus</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* END KATEGORI */}

                    {/* POPULER */}
                    <div className="judul mt-4 mb-1">
                        <h3 className="font-weight-bold">Populer</h3>
                    </div>
                        <div className="row">
                            <div className="col-sm-4 mt-3">
                                <a href="">
                                    <div className="isimakan">
                                        <img src="https://tse1.mm.bing.net/th?id=OIP.idTn0AU-nI6vy-QJm5roOQHaEK&pid=Api&P=0&w=280&h=158" class="edgeimage d-block" style={{ width: '100%' }} alt="..." />
                                        <div className="bottom-left">5-15 min</div>
                                    </div>
                                </a>
                                <h6 className="ukuranjudul mt-3">Nasi Goreng Complete</h6>
                                <span className="ukurantext mt-1"><i class="far fa-star"></i> 8.8</span>
                                <span className="ukurantext ml-4">Rp 13.000</span>
                            </div>
                            <div className="col-sm-4 mt-3">
                                <a href="">
                                    <div className="isimakan">
                                        <img src="https://tse1.mm.bing.net/th?id=OIP.f8oMyYMyPQHKSZGCJYvzPgHaEo&pid=Api&P=0&w=277&h=174" class="edgeimage d-block" style={{ width: '100%' }} alt="..." />
                                        <div className="bottom-left">5 min</div>
                                    </div>
                                </a>
                                <h6 className="ukuranjudul mt-3">Nasi Uduk Complete</h6>
                                <span className="ukurantext mt-1"><i class="far fa-star"></i> 6.9</span>
                                <span className="ukurantext ml-4">Rp 10.000</span>
                            </div>
                            <div className="col-sm-4 mt-3">
                                <a href="">
                                    <div className="isimakan">
                                        <img src="https://img.okezone.com/content/2018/10/09/298/1961736/yuk-bikin-pizza-mozzarella-dan-baked-macaroni-kudapan-spesial-untuk-anak-dan-suami-Ypnzwt7Bhy.jpg" class="edgeimage d-block" style={{ width: '100%' }} alt="..." />
                                        <div className="bottom-left">40-45 min</div>
                                    </div>
                                </a>
                                <h6 className="ukuranjudul mt-3">Mozarella</h6>
                                <span className="ukurantext mt-1"><i class="far fa-star"></i> 4.7</span>
                                <span className="ukurantext ml-4">Rp 30.000</span>
                            </div>
                            <div className="col-sm-4 mt-3">
                                <a href="">
                                    <div className="isimakan">
                                        <img src="https://tse1.mm.bing.net/th?id=OIP.L7iyyjQQ2xgsOn9E-sMDnAHaFD&pid=Api&P=0&w=221&h=151" class="edgeimage d-block" style={{ width: '100%' }} alt="..." />
                                        <div className="bottom-left">50-55 min</div>
                                    </div>
                                </a>
                                <h6 className="ukuranjudul mt-3">Ayam Penyet</h6>
                                <span className="ukurantext mt-1"><i class="far fa-star"></i> 4.7</span>
                                <span className="ukurantext ml-4">Rp 12.000</span>
                            </div>
                            <div className="col-sm-4 mt-3">
                                <a href="">
                                    <div className="isimakan">
                                        <img src="http://cdn2.tstatic.net/tribunnews/foto/bank/images/tribuntravelcom-punya-rekomendasi-bakso-enak-di-jabodetabek_20181104_133321.jpg" class="edgeimage d-block" style={{ width: '100%' }} alt="..." />
                                        <div className="bottom-left">10-15 min</div>
                                    </div>
                                </a>
                                <h6 className="ukuranjudul mt-3">Baso Lava</h6>
                                <span className="ukurantext mt-1"><i class="far fa-star"></i> 6.7</span>
                                <span className="ukurantext ml-4">Rp 15.000</span>
                            </div>
                            <div className="col-sm-4 mt-3">
                                <a href="">
                                    <div className="isimakan">
                                        <img src="https://tse1.mm.bing.net/th?id=OIP.3YwH6KktP2DfcjMw5mIw7gHaE8&pid=Api&P=0&w=253&h=170" class="edgeimage d-block" style={{ width: '100%' }} alt="..." />
                                        <div className="bottom-left">5-10 min</div>
                                    </div>
                                </a>
                                <h6 className="ukuranjudul mt-3">Ayam Geprek</h6>
                                <span className="ukurantext mt-1"><i class="far fa-star"></i> 8.7</span>
                                <span className="ukurantext ml-4">Rp 14.000</span>
                            </div>
                        </div>
                    {/* END POPULER */}
                </div>
            </Fragment>
        );
    }
}
export default Food;