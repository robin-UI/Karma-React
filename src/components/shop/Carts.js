import React from 'react'
import { Link } from "react-router-dom";


const Carts = (props) => {

    const { product } = props
    // console.log(product);

    return (
        <>
            {/* single product */}
           
                <div className="col-lg-4 col-md-6">
                <div className="single-product">
                    {/* <div style={{width: "225px", height: "330px"}} >
                    </div> */}
                        <img className="img-fluid" src={product.image} alt="img" />
                    <div className="product-details">
                        <h6>{product.title}</h6>
                        <div className="price">
                            <h6>${product.price}</h6>
                            <h6 className="l-through">$210.00</h6>
                        </div>
                        <div className="prd-bottom">
                            <Link href="/" className="social-info">
                                <span className="ti-bag" />
                                <p className="hover-text">add to bag</p>
                            </Link>
                            <Link href="/" className="social-info">
                                <span className="lnr lnr-heart" />
                                <p className="hover-text">Wishlist</p>
                            </Link>
                            <Link href="/" className="social-info">
                                <span className="lnr lnr-sync" />
                                <p className="hover-text">compare</p>
                            </Link>
                            <Link href="/" className="social-info">
                                <span className="lnr lnr-move" />
                                <p className="hover-text">view more</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* single product */}
        </>
    )
}

export default Carts