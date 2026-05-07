import { Link } from 'react-router-dom'

const WelcomPageFooter = () => {
    return (
        <>
            <div className="footer-wrap">
                <div className="container">
                    <div className="footer-subscribe">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4">
                        <div className="social-icons">
                            <ul className="list-unstyled">
                            <li>
                                <Link to={'https://www.facebook.com/profile.php?id=61558151842551'}><i className="bi bi-facebook" /></Link>
                            </li>
                            <li>
                                <Link to={'https://twitter.com/innotechsavvy'}><i className="bi bi-twitter-x" /></Link>
                            </li>
                            <li>
                                <Link to={'https://www.instagram.com/innotechsavvy/'}><i className="bi bi-instagram" /></Link>
                            </li>
                            <li>
                                <Link to={'https://linkedin.com/company/innotechsavvy'}><i className="bi bi-linkedin" /></Link>
                            </li>
                            <li>
                                <Link to={'https://www.youtube.com/@Innotechsavvy'}><i className="bi bi-youtube" /></Link>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-9 col-md-8">
                        <div className="align-items-center row form-inputs">
                            <div className="col-md-6 col-lg-7 text-lg-end">
                            <h6>Subscribe Our Newsletter</h6>Best for one-man bands, web creators, and freelancers.</div>
                            <div className="col-md-6 col-lg-5">
                            <div className="d-flex"><input type="text" name="subscribe" placeholder="Enter your email address" className="form-control bordered" /> <button type="submit" className="btn btn-secondary bordered"><i className="bi bi-send" /></button></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <footer>
                    <div className="container">
                    <div className="row no-gutters">
                        <div className="col-xxl-7 col-lg-6">
                        <div className="row">
                            <div className="col-xxl-5 col-md-6">
                            <div className="footer-widget">
                                <div className="logo-footer">
                                {/* <Link to={'/'}><img src="assets/images/logo_dark.svg" alt /></Link> */}
                                <Link to={'/'}>
                                    {/* <img src="assets/images/innotechsavvy_logo.png" alt /> */}
                                    <img src="/assets/images/ITS_logo_03.png" alt />
                                </Link>
                                </div>
                                <div className="footer-widget-contact">
                                <ul className="list-unstyled">
                                    <li>
                                    <div><i className="bi bi-geo-alt" /></div>
                                    <div>
                                        <span>
                                            Innotechsavvy A-505, <br /> 
                                            Vasant Blossom,  Makwana Road, <br /> 
                                            Marol,  Andheri East, Mumbai - 59
                                        </span> 
                                    </div>
                                    </li>
                                    <li>
                                    <div><i className="bi bi-phone" /></div>
                                    <div><a href="tel:+91 8329385017">(+91) 832 938 5017</a></div>                                    
                                    </li>
                                    <li>
                                    <div><i className="bi bi-envelope" /></div>
                                    <div><a href="mailto:info@innotechsavvy.com"><span className="__cf_email__" data-cfemail="c0a8a5acb080b3a5b2a5aea9b4a5b4eea3afad">
                                        {/* [email&nbsp;protected] */}
                                        info@innotechsavvy.com
                                        </span></a></div>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-xxl-5 col-md-6 ms-auto">
                            <div className="footer-widget">
                                <h4 className="widget-title">About Us</h4>
                                <p className="footer-text">At InnotechSavvy, we are more than just an IT services provider. With 5 years of unwavering commitment... <Link to={'/about-us'}> read more</Link></p>
                                <div className="opening-hours"><i className="bi bi-clock" />
                                <div className="text">
                                    <h4>Opening Hours</h4>
                                    <div>Mon-Sat 9:30 - 6:00,<br />Sunday - CLOSED</div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-xxl-5 col-lg-6 mr-top-footer">
                        <div className="row">
                            <div className="col-md-4 col-12">
                            <div className="footer-widget">
                                <h4 className="widget-title">Company</h4>
                                <ul className="list-unstyled icons-listing mb-0 widget-listing">
                                <li><Link to={'/about-us'}>About</Link></li>
                                <li><Link to={'/our-team'}>Our Team</Link></li>
                                <li><Link to={'/contact-us'}>Contact Us</Link></li>
                                {/* <li><a href="javascript:">Blog</a></li> */}
                                {/* <li><a href="javascript:">Culture</a></li> */}
                                {/* <li><a href="javascript:">Jobs</a></li> */}
                                </ul>
                            </div>
                            </div>
                            <div className="col-md-4 col-12">
                            <div className="footer-widget">
                                <h4 className="widget-title">Services</h4>
                                <ul className="list-unstyled icons-listing mb-0 widget-listing">
                                    <li><Link to={'/service-tech/mobile-application-development'}>App Development</Link></li>
                                    <li><Link to={'/service-tech/web-development'}>Web Development</Link></li>
                                    <li><Link to={'/service-tech/ui-ux-development'}>UI/UX Development</Link></li>
                                    <li><Link to={'/service-tech/chatbot-development'}>Chatbot Development</Link></li>
                                    <li><Link to={'/service-innovate/internet-of-things'}>Internet of Things</Link></li>
                                </ul>
                            </div>
                            </div>
                            <div className="col-md-4 col-12">
                            <div className="footer-widget">
                                <h4 className="widget-title">&nbsp;</h4>
                                <ul className="list-unstyled icons-listing mb-0 widget-listing">
                                    <li><Link to={'/service-social-savvy/digital-marketing'}>Digital Marketing</Link></li>
                                    <li><Link to={'/service-social-savvy/social-media-management'}>Social Media</Link></li>
                                    <li><Link to={'/service-social-savvy/analytis-and-big-data'}>Analytis & Big Data</Link></li>
                                    <li><Link to={'/service-innovate/ai-and-machine-learning'}>AI & Machine Learning</Link></li>
                                    <li><Link to={'/service-innovate/clound-solution'}>Cloud Solution</Link></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="tiny-footer">
                        <div className="row align-items-center">
                        <div className="col-md-6 mb-0">Copyright © <span id="yearText" /> <strong>Innotechsavvy</strong> All rights reserved.</div>
                        <div className="col-md-6">
                            <div className="tiny-footer-links">
                            <ul className="list-unstyled list-inline">
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default WelcomPageFooter
