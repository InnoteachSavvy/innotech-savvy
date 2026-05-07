import React from 'react'
import { HelmetComponent, TemplateOneHeader } from '../..';

const AboutUs = () => {
    return (
        <>
            <HelmetComponent 
                page_title="About Us : Your Trusted IT Solutions Partner and company Milestone"
                meta_title="About Us : Your Trusted IT Solutions Partner and company Milestone"
                meta_desc="As a trusted IT solutions partner, InnotechSavvy has reached several significant milestones over its five-year journey. Our commitment to excellence, innovation, and customer satisfaction, establishing it as a trusted partner in the IT consulting space."
                meta_keyword="About Us : Your Trusted IT Solutions Partner and company Milestone"
            />

            <TemplateOneHeader pagename='About Us' />

            <div className='body-content'>                
                <section className="section-spacing pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 mb-0">
                                <div className="img-gradient"><img src="assets/images/about_us_img.jpg" alt="" /></div>
                                <div className="years-started wow fadeInUp">
                                    <div className="years">10<sup>+</sup> <span>Years</span></div>
                                    <div className="content fun-fact">
                                    <h1 className='d-none'>
                                        <span className="timer" data-to={2010} data-speed={2000}>2010</span> 
                                        <span>Making Business Since</span>
                                    </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 mt-4 mt-lg-0">
                                <div className="section-title text-start">
                                    {/* <span>Who We Are</span> */}
                                    <h5 style={{ color: 'goldenrod' }}>Who We Are</h5>
                                    <h4 className="wow" style={{ color: '#282E67' }}>Discover effortless <strong>Business and Marketing in one</strong></h4>
                                    <p>At InnotechSavvy, we are more than just an IT services provider. With 5 years of unwavering commitment, we've been at the forefront of technology, empowering businesses to thrive in the digital age. Our dedication to innovation, excellence in new technologies, and relentless focus on customer success truly sets you apart. Our journey has been marked by innovation, new technology excellence, and a relentless pursuit of customer success.</p>
                                    <p>It's evident that InnotechSavvy is not just about delivering solutions but about co-creating impactful and enduring success stories with clients. Our journey and commitment to empowering businesses in the digital age. We don't just provide solutions; we architect success stories. Let’s shape the future together!</p>
                                </div>
                                <div className="row align-items-center d-none">
                                    <div className="col-md-8 col-sm-7 mb-0">
                                    <div className="progress-wrap">
                                        <h6>Project delivered on time</h6>
                                        <div className="progress">
                                        <div className="progress-bar" role="progressbar" data-width={90}><span>90%</span></div>
                                        </div>
                                    </div>
                                    <div className="progress-wrap">
                                        <h6>Availability</h6>
                                        <div className="progress">
                                        <div className="progress-bar" role="progressbar" data-width={70}><span>70%</span></div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-md-4 col-sm-5">
                                    <ul className="list-unstyled icons-listing theme-dark mb-0 check">
                                        <li>Intregrations</li>
                                        <li>Business Strategy</li>
                                        <li>Business Setup</li>
                                        <li>Easy Documentation</li>
                                    </ul>
                                    </div>
                                </div>
                                <p className="mt-4 d-none">Let’s Come Up With a <strong>Start Free Trial 30-Day Money Back Guarantee</strong> For New Purchases​.</p>
                                <a href="contact.html" className="btn btn-default d-none"><span className="outer-wrap"><span data-text="Read more">Read more</span></span></a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-spacing p-0 d-none">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-8 col-sm-12 mx-auto">
                        <div className="portfolio-slider-wrap-outer">
                            <div className="square-top"><img src="assets/images/square_large.svg" alt="" /></div>
                            <div className="portfolio-slider-wrap mt-0">
                            <div className="owl-carousel owl-theme" id="portfolio-slider-single">
                                <div className="item"><img src="assets/images/portfolio/slider_single_2.jpg" alt="" /></div>
                                <div className="item"><img src="assets/images/portfolio/slider_single_1.jpg" alt="" /></div>
                                <div className="item"><img src="assets/images/portfolio/slider_single_3.jpg" alt="" /></div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                
                <section className="section-spacing pattern-white-bg section-padding d-none">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-8 col-sm-12 mx-auto">
                        <div className="about-video-intro">
                            <div className="section-title text-center light"><span>Achievement</span>
                            <h2 className="wow">Products successfully launced <strong>in the <u>previous 12 months</u></strong></h2>
                            </div>
                            <div className="play-btn wow fadeInUp"><a className="popup-video" href="https://player.vimeo.com/video/7449107" target="_blank" role="button"><i className="srn-play" /> </a>Play Intro Video</div>
                        </div>
                        </div>
                        <div className="col-lg-10 col-xl-8 col-sm-12 mx-auto intro-stats">
                        <div className="row">
                            <div className="col-md-4 col-6">
                            <div className="icon-statistics light wow pulse" data-wow-delay="0.1s"><i className="bi bi-arrow-up-circle" />
                                <div className="text-space fun-fact">
                                <h3><span className="timer" data-to={93} data-speed={2000}>93</span>%</h3>
                                <div>Increase In Monthly</div>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4 col-6">
                            <div className="icon-statistics light wow pulse" data-wow-delay="0.2s"><i className="bi bi-arrow-up-circle" />
                                <div className="text-space fun-fact">
                                <h3><span className="timer" data-to={50} data-speed={2000}>50</span>K</h3>
                                <div>Revenue generated</div>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4 col-6 mx-auto">
                            <div className="icon-statistics light wow pulse" data-wow-delay="0.3s"><i className="bi bi-arrow-up-circle" />
                                <div className="text-space fun-fact">
                                <h3><span className="timer" data-to={57} data-speed={2000}>57</span>K</h3>
                                <div>Total Downloads</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                <section className="section-spacing d-none">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-6 mx-auto text-center">
                        <div className="section-title text-center"><span>Team We Have</span>
                            <h2 className="wow">Our Buddy's Always Ready <strong>To Solve Your Issues</strong></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non accumsan in, tempor dictum neque. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                        </div>
                        </div>
                    </div>
                    <div className="team-wrap-outer">
                        <div className="row">
                        <div className="col-md-6 col-xl-4 col-lg-6">
                            <div className="team-wrap">
                            <div className="img">
                                <a href="team-single.html"><img src="assets/images/team/team_img_1.jpg" alt="" /></a>
                            </div>
                            <div className="content">
                                <h6><a href="team-single.html">Richard Simpson</a></h6>
                                <div className="post">VP of Engineering</div>
                                <ul className="list-unstyled social-icons">
                                <li><a href="javascript:"><i className="bi bi-facebook" /></a></li>
                                <li><a href="javascript:"><i className="bi bi-twitter-x" /></a></li>
                                <li><a href="javascript:"><i className="bi bi-instagram" /></a></li>
                                <li><a href="javascript:"><i className="bi bi-linkedin" /></a></li>
                                <li><a href="javascript:"><i className="bi bi-youtube" /></a></li>
                                </ul>
                                <div className="arrow-read-more"><a href="team-single.html">read more <i className="srn-arrow-right" /></a></div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4 col-lg-6">
                            <div className="team-wrap">
                            <div className="img">
                                <a href="team-single.html"><img src="assets/images/team/team_img_2.jpg" alt="" /></a>
                            </div>
                            <div className="content">
                                <h6><a href="team-single.html">Louis Crawford</a></h6>
                                <div className="post">Human Resources</div>
                                <ul className="list-unstyled social-icons">
                                <li><a href="javascript:"><i className="bi bi-facebook" /></a></li>
                                <li><a href="javascript:"><i className="bi bi-twitter-x" /></a></li>
                                <li><a href="javascript:"><i className="bi bi-instagram" /></a></li>
                                <li><a href="javascript:"><i className="bi bi-linkedin" /></a></li>
                                <li><a href="javascript:"><i className="bi bi-youtube" /></a></li>
                                </ul>
                                <div className="arrow-read-more"><a href="team-single.html">read more <i className="srn-arrow-right" /></a></div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4 col-lg-6">
                            <div className="team-wrap">
                            <div className="img">
                                <a href="team-single.html"><img src="assets/images/team/team_img_3.jpg" alt="" /></a>
                            </div>
                            <div className="content">
                                <h6><a href="team-single.html">Peter White</a></h6>
                                <div className="post">Employee Resources</div>
                                <ul className="list-unstyled social-icons">
                                <li><a href="javascript:"><i className="bi bi-facebook" /></a></li>
                                <li><a href="javascript:"><i className="bi bi-twitter-x" /></a></li>
                                <li><a href="javascript:"><i className="bi bi-instagram" /></a></li>
                                <li><a href="javascript:"><i className="bi bi-linkedin" /></a></li>
                                <li><a href="javascript:"><i className="bi bi-youtube" /></a></li>
                                </ul>
                                <div className="arrow-read-more"><a href="team-single.html">read more <i className="srn-arrow-right" /></a></div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4 col-lg-6">
                            <div className="team-wrap">
                            <div className="img">
                                <a href="team-single.html"><img src="assets/images/team/team_img_4.jpg" alt="" /></a>
                            </div>
                            <div className="content">
                                <h6><a href="team-single.html">Shannon O'Connor</a></h6>
                                <div className="post">Head of Product</div>
                                <ul className="list-unstyled social-icons">
                                <li><a href="javascript:"><i className="bi bi-facebook" /></a></li>
                                <li><a href="javascript:"><i className="bi bi-twitter-x" /></a></li>
                                <li><a href="javascript:"><i className="bi bi-instagram" /></a></li>
                                <li><a href="javascript:"><i className="bi bi-linkedin" /></a></li>
                                <li><a href="javascript:"><i className="bi bi-youtube" /></a></li>
                                </ul>
                                <div className="arrow-read-more"><a href="team-single.html">read more <i className="srn-arrow-right" /></a></div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4 col-lg-6">
                            <div className="team-wrap">
                            <div className="img">
                                <a href="team-single.html"><img src="assets/images/team/team_img_5.jpg" alt="" /></a>
                            </div>
                            <div className="content">
                                <h6><a href="team-single.html">Kevin Qwestlove</a></h6>
                                <div className="post">Chief Design Officer</div>
                                <ul className="list-unstyled social-icons">
                                <li><a href="javascript:"><i className="bi bi-facebook" /></a></li>
                                <li><a href="javascript:"><i className="bi bi-twitter-x" /></a></li>
                                <li><a href="javascript:"><i className="bi bi-instagram" /></a></li>
                                <li><a href="javascript:"><i className="bi bi-linkedin" /></a></li>
                                <li><a href="javascript:"><i className="bi bi-youtube" /></a></li>
                                </ul>
                                <div className="arrow-read-more"><a href="team-single.html">read more <i className="srn-arrow-right" /></a></div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4 col-lg-6">
                            <div className="team-wrap">
                            <div className="img">
                                <a href="team-single.html"><img src="assets/images/team/team_img_6.jpg" alt="" /></a>
                            </div>
                            <div className="content">
                                <h6><a href="team-single.html">Sarah Albert</a></h6>
                                <div className="post">Human Resources</div>
                                <ul className="list-unstyled social-icons">
                                <li><a href="javascript:"><i className="bi bi-facebook" /></a></li>
                                <li><a href="javascript:"><i className="bi bi-twitter-x" /></a></li>
                                <li><a href="javascript:"><i className="bi bi-instagram" /></a></li>
                                <li><a href="javascript:"><i className="bi bi-linkedin" /></a></li>
                                <li><a href="javascript:"><i className="bi bi-youtube" /></a></li>
                                </ul>
                                <div className="arrow-read-more"><a href="team-single.html">read more <i className="srn-arrow-right" /></a></div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                <section className="section-spacing bg-light-blue about-why-choose section-padding">
                    <div className="container">
                    <div className="row">
                        {/* <div className="col-lg-12 col-xl-4 mb-0">
                            <div className="section-title text-start">
                                <h5>Our Expertise</h5>
                                <div className="text-space tick-icon-bordered">
                                    <h6 className="wow">We build our team and <strong>our product on core values</strong></h6>
                                </div>
                                <p>Our expertise in software development, offering expertise in various technologies and programming languages to create custom software solutions to clients' as per their needs.</p>
                            </div>
                        </div> */}

                        <div className="col-lg-4 col-md-6 col-xl-4">
                            <div className="section-title text-start m-0">
                                <h5 style={{ color: 'goldenrod' }}>Our Expertise</h5>
                            </div>
                            <div className="tick-icon-bordered">
                                <div className="text-space">
                                    <h6>We build our team and <strong>our product on core values</strong></h6>
                                    <p>We specialize in managed IT services, offering end-to-end solutions that streamline your operations, enhance efficiency, and drive growth. Our team of seasoned professionals ensures that your IT infrastructure remains robust, secure, and optimized.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-xl-4">
                            <div className="tick-icon-bordered">
                                <div className="icon-space"><i className="bi bi-check2" /></div>
                                <div className="text-space">
                                    <h6>Managed IT Services</h6>
                                    <p>We specialize in managed IT services, offering end-to-end solutions that streamline your operations, enhance efficiency, and drive growth. Our team of seasoned professionals ensures that your IT infrastructure remains robust, secure, and optimized.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-xl-4">
                            <div className="tick-icon-bordered">
                                <div className="icon-space"><i className="bi bi-check2" /></div>
                                <div className="text-space">
                                <h6>System Integration</h6>
                                <p>Seamless integration is our forte. Whether it’s connecting legacy systems or implementing cutting-edge solutions, we bridge gaps and create cohesive ecosystems. Our approach is holistic, ensuring that your technology stack aligns with your business goals.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-xl-4">
                            <div className="tick-icon-bordered">
                                <div className="icon-space"><i className="bi bi-check2" /></div>
                                <div className="text-space">
                                <h6>Cloud, Digital, and Automation</h6>
                                <p>Embracing the cloud? Seeking digital transformation? Look no further. We bring together world-class expertise in cloud computing, digital strategy, and process automation. Let us guide you toward agility, scalability, and competitive advantage.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-xl-4">
                            <div className="tick-icon-bordered">
                                <div className="icon-space"><i className="bi bi-check2" /></div>
                                <div className="text-space">
                                <h6>Cybersecurity</h6>
                                <p>In an interconnected world, safeguarding your digital assets is paramount. Our cybersecurity solutions fortify your defenses, mitigate risks, and protect your critical data. From threat detection to incident response, we’ve got you covered.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-xl-4">
                            <div className="tick-icon-bordered">
                                <div className="icon-space"><i className="bi bi-check2" /></div>
                                <div className="text-space">
                                <h6>Product Development Support</h6>
                                <p>Got an innovative idea? We’ll turn it into reality. Our product development team collaborates closely with clients to build custom software solutions that address unique business challenges. From concept to launch, we’re your partners in innovation.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    </div>
                </section>

                <section className="section-spacing d-none">
                    <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-6 mb-0">
                        <div className="section-title text-start mb-0"><span>Call to action</span>
                            <h2 className="wow">Ready to get started? Try <strong>Different work environment</strong></h2>
                            <p>In our workspaces, you will find everything you need to carry out your activity but not only. Ned ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                            <div className="arrow-read-more"><a href="#">Contact Us Now <i className="srn-arrow-right" /></a></div>
                        </div>
                        </div>
                        <div className="col-md-12 col-lg-5 offset-lg-1 mt-5 mt-lg-0">
                        <div className="border-style-accordian secondary">
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">First and foremost, you never want to go?</button></h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque Arya.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">How can i customized this theme?</button></h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque Arya.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Can I cancel or change my order?</button></h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque Arya.</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                <section className="section-spacing bg-light-blue d-none">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 mb-0 p-0">
                        <div className="faqs-side-img"><img src="assets/images/testimonials_img.jpg" className="d-lg-none d-block" alt="" /></div>
                        </div>
                        <div className="col-lg-6 p-0">
                        <div className="testimonial-single-wrap wow slideInUp">
                            <div className="owl-carousel owl-theme" id="testimonials-slider-leftimg">
                            <div className="item">
                                <div className="testimonial-single">
                                <h6>My business is growing faster and I’m very happy with that</h6>
                                <p>Thank you for your excellent work. No one could hear us as well as you and make our wishes come true so beautifully and beautifully.</p>
                                <div className="testimonial-box">
                                    <div className="thumb-img"><img src="assets/images/thumb_1.jpg" alt="" /></div>
                                    <div className="content">
                                    <h6 className="name">Rider Smith</h6>
                                    <div className="post">Marketing Envato Pty Ltd.</div>
                                    <div className="rating"><i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> <i className="bi bi-star" /></div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-single">
                                <h6>My business is growing faster and I’m very happy with that</h6>
                                <p>Thank you for your excellent work. No one could hear us as well as you and make our wishes come true so beautifully and beautifully.</p>
                                <div className="testimonial-box">
                                    <div className="thumb-img"><img src="assets/images/thumb_2.jpg" alt="" /></div>
                                    <div className="content">
                                    <h6 className="name">Kevin Martin</h6>
                                    <div className="post">Marketing Consultant</div>
                                    <div className="rating"><i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> <i className="bi bi-star" /></div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-single">
                                <h6>My business is growing faster and I’m very happy with that</h6>
                                <p>Thank you for your excellent work. No one could hear us as well as you and make our wishes come true so beautifully and beautifully.</p>
                                <div className="testimonial-box">
                                    <div className="thumb-img"><img src="assets/images/thumb_3.jpg" alt="" /></div>
                                    <div className="content">
                                    <h6 className="name">Sarah Albert</h6>
                                    <div className="post">Senior Advisor</div>
                                    <div className="rating"><i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> <i className="bi bi-star" /></div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                <section className="section-spacing">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-lg-6 mx-auto text-center">
                        <div className="section-title text-center"><span>Changing things with</span>
                            <h2 className="wow">They are partners inspire <strong>us to drive ongoing results</strong></h2>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-2 col-lg-4 col-sm-6 col-6 mb-0">
                        <div className="img-partner"><img src="assets/images/partner/img-client1.png" alt="" /></div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-sm-6 col-6 mb-0">
                        <div className="img-partner"><img src="assets/images/partner/img-client2.png" alt="" /></div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-sm-6 col-6 mb-0">
                        <div className="img-partner"><img src="assets/images/partner/img-client3.png" alt="" /></div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-sm-6 col-6 mb-0">
                        <div className="img-partner"><img src="assets/images/partner/img-client4.png" alt="" /></div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-sm-6 col-6 mb-0">
                        <div className="img-partner"><img src="assets/images/partner/img-client5.png" alt="" /></div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-sm-6 col-6 mb-0">
                        <div className="img-partner"><img src="assets/images/partner/img-client6.png" alt="" /></div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-5 col-md-9 mx-auto">
                        <div className="partner-text arrow-read-more fun-fact">
                            <p>Over <span><small className="timer" data-to={75000} data-speed={2000}>75000</small>+ Clients</span> all over the world</p><a href="contact.html" className="btn-link-secondary">Book Services Now <i className="srn-arrow-right" /></a></div>
                        </div>
                    </div>
                    </div>
                </section>            
            </div>
        </>
    )
}

export default AboutUs
