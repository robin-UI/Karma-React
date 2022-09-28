import React, {useState} from 'react'

const Footer = () => {

    const [holder, setHolder] = useState("Subscribe")
    let placeholder = holder;

    return (
        <>
            {/* start footer Area */}
            <footer className="footer-area section_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h6>About Us</h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore
                                    magna aliqua.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h6>Newsletter</h6>
                                <p>Stay update with our latest</p>
                                <div id="mc_embed_signup">
                                    <form  method="get" className="form-inline">
                                        <div className="d-flex flex-row">
                                            <input className="form-control" name="EMAIL" placeholder={placeholder} onFocus={()=>setHolder("")} onBlur={()=>setHolder("Subscribe")} required type="email" />
                                            <button className="click-btn btn btn-default"><i className="fa fa-long-arrow-right" aria-hidden="true" /></button>
                                            <div style={{ "position": "absolute", "left": "-5000px" }}>
                                                <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex={-1} defaultValue type="text" />
                                            </div>
                                            {/* <div class="col-lg-4 col-md-4">
												<button class="bb-btn btn"><span class="lnr lnr-arrow-right"></span></button>
											</div>  */}
                                        </div>
                                        <div className="info" />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3  col-md-6 col-sm-6">
                            <div className="single-footer-widget mail-chimp">
                                <h6 className="mb-20">Instragram Feed</h6>
                                <ul className="instafeed d-flex flex-wrap">
                                    <li><img src="img/i1.jpg" alt="ing" /></li>
                                    <li><img src="img/i2.jpg" alt="ing" /></li>
                                    <li><img src="img/i3.jpg" alt="ing" /></li>
                                    <li><img src="img/i4.jpg" alt="ing" /></li>
                                    <li><img src="img/i5.jpg" alt="ing" /></li>
                                    <li><img src="img/i6.jpg" alt="ing" /></li>
                                    <li><img src="img/i7.jpg" alt="ing" /></li>
                                    <li><img src="img/i8.jpg" alt="ing" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h6>Follow Us</h6>
                                <p>Let us be social</p>
                                <div className="footer-social d-flex align-items-center">
                                    <a href="/"><i className="fa fa-facebook" /></a>
                                    <a href="/"><i className="fa fa-twitter" /></a>
                                    <a href="/"><i className="fa fa-dribbble" /></a>
                                    <a href="/"><i className="fa fa-behance" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
                        <p className="footer-text m-0">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href='/'>Colorlib</a>
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        </p>
                    </div>
                </div>
            </footer>
            {/* End footer Area */}

        </>
    )
}

export default Footer