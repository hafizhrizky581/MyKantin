import React, { Component, Fragment } from 'react'
import Car from './img/car.png'

class Order extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <div className="card">
                        <div className="card-header"><h3 className="p-0">Pesanan Saya</h3></div>
                        <div className="card-body">
                            {/* KARTU ATM */}
                            <div className="container kartuatm mb-3">
                                <p className="">Hafizh Thaifatur Rizky</p>
                                <h3 className="mb-4">Rp. 1000000000000</h3>
                                <p className="nomorkartu">12345678910</p>
                            </div>
                            {/* PESANAN */}
                            <table className="font-weight-bold ukurantable">
                                <tbody>
                                    <tr>
                                        <th><img src="https://tse4.mm.bing.net/th?id=OIP.V61Lm-ky37iUm55usNYQZwHaDs&pid=Api&P=0&w=356&h=179" className="edgeimage mt-4" height="50" alt="" /></th>
                                        <td><span className="ml-3 mr-3 mt-2">5</span></td>
                                        <td><span className="mr-3 mt-2">x</span></td>
                                        <td><span className="mt-2">Cheese Pizza Enak Aja</span></td>
                                        <td><span className="text-muted ml-2 mt-2">Rp.20k</span></td>
                                    </tr>
                                    <tr>
                                        <th><img src="https://tse1.mm.bing.net/th?id=OIP.h2r3px2G94Z7T1S-IpOJ_AHaFj&pid=Api&P=0&w=208&h=157" className="edgeimage mt-4" height="50" alt="" /></th>
                                        <td><span className="ml-3 mr-3 mt-2">5</span></td>
                                        <td><span className="mr-3 mt-2">x</span></td>
                                        <td><span className="mt-2">Jus Mangga Rasa Jeruk</span></td>
                                        <td><span className="text-muted ml-2 mt-2">Rp.10k</span></td>
                                    </tr>
                                    <tr>
                                        <th><img src="https://img-global.cpcdn.com/recipes/7369e12b717fc0e6/751x532cq70/salad-sayur-foto-resep-utama.jpg" className="edgeimage mt-4" height="50" alt="" /></th>
                                        <td><span className="ml-3 mr-3 mt-2">5</span></td>
                                        <td><span className="mr-3 mt-2">x</span></td>
                                        <td><span className="mt-2">Salad Sayur-sayuran</span></td>
                                        <td><span className="text-muted ml-2 mt-2">Rp 10k</span></td>
                                    </tr>
                                    <tr>
                                        <th><img src={Car} className="edgeimage mt-2 mb-2 ml-2" height="50" alt="" /></th>
                                        <td colSpan="3"><span className="ml-3 mr-3">Jl. Cikarang utara No 4, Bekasi</span></td>
                                        <td><span className="text-muted ml-2 mt-2">Bayar setelah kenyang</span></td>
                                    </tr>
                                    <tr>
                                        <th><div className="container totaljarak"></div></th>
                                    </tr>
                                    <tr>
                                        <th><span className="mb-2 ml-2">Total :</span></th>
                                        <td colSpan="4"><h3 className="font-weight-bold text-right">Rp 40.000</h3></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="5">
                                            <button className="btn btn-warning bg-notif btn-block mt-3 pt-3 pb-3">
                                                <span className="sizepesan">Pesan<i class="fas fa-chevron-right ml-5"></i></span>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Order;