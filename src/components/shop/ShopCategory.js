import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import Carts from './Carts';
import cartContext from '../context/CartContext';

const ShopCategory = () => {
    
    const context = useContext(cartContext)
    let {products} = context

    return (
        <>
            <div>
                {/* Start Banner Area */}
                <section className="banner-area organic-breadcrumb" style={{ marginBottom: "100px" }} >
                    <div className="container">
                        <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                            <div className="col-first">
                                <h1>Shop Category page</h1>
                                <nav className="d-flex align-items-center">
                                    <Link href="/">Home<span className="lnr lnr-arrow-right" /></Link>
                                    <Link href="/shop">Shop<span className="lnr lnr-arrow-right" /></Link>
                                    <Link href="/">Fashon Category</Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Banner Area */}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-8 col-md-7">
                            {/* Start Filter Bar */}
                            <div className="filter-bar d-flex flex-wrap align-items-center">
                                <div className="sorting">
                                    <select>
                                        <option value={1}>Default sorting</option>
                                        <option value={1}>Default sorting</option>
                                        <option value={1}>Default sorting</option>
                                    </select>
                                </div>
                                <div className="sorting mr-auto">
                                    <select>
                                        <option value={1}>Show 12</option>
                                        <option value={1}>Show 12</option>
                                        <option value={1}>Show 12</option>
                                    </select>
                                </div>
                                <div className="pagination">
                                    <Link href="/" className="prev-arrow"><i className="fa fa-long-arrow-left" /></Link>
                                    <Link href="/" className="active">1</Link>
                                    <Link href="/">2</Link>
                                    <Link href="/">3</Link>
                                    <Link href="/" className="dot-dot"><i className="fa fa-ellipsis-h" /></Link>
                                    <Link href="/">6</Link>
                                    <Link href="/" className="next-arrow"><i className="fa fa-long-arrow-right" /></Link>
                                </div>
                            </div>
                            {/* End Filter Bar */}
                            {/* Start Best Seller */}
                            <section className="lattest-product-area pb-40 category-list">
                                <div className="row">
                                    {products.map((product) => {
                                        return (
                                            <Carts product={product} key={product.id} />   
                                        )
                                    })}
                                </div>
                            </section>
                            {/* End Best Seller */}

                            {/* Start Filter Bar */}
                            <div className="filter-bar d-flex flex-wrap align-items-center">
                                <div className="sorting mr-auto">
                                    <select>
                                        <option value={1}>Show 12</option>
                                        <option value={1}>Show 12</option>
                                        <option value={1}>Show 12</option>
                                    </select>
                                </div>
                                <div className="pagination">
                                    <Link href="/" className="prev-arrow"><i className="fa fa-long-arrow-left" /></Link>
                                    <Link href="/" className="active">1</Link>
                                    <Link href="/">2</Link>
                                    <Link href="/">3</Link>
                                    <Link href="/" className="dot-dot"><i className="fa fa-ellipsis-h" /></Link>
                                    <Link href="/">6</Link>
                                    <Link href="/" className="next-arrow"><i className="fa fa-long-arrow-right" /></Link>
                                </div>
                            </div>
                            {/* End Filter Bar */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ShopCategory