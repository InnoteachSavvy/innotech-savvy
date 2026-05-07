import { Link } from 'react-router-dom'
import { BoxWithSymbolAndHeader, HelmetComponent } from '../..';
import useOwlCarousel from '../../Common/useOwlCarousel';

const WelcomePage = () => {
    // Initialize the marketing banner slider carousel
    useOwlCarousel('#marketing-banner-slider');
    
    // Initialize the testimonials slider carousel
    useOwlCarousel('#testimonials-slider-single');

    return (
        <>
            {/* Added Page Title */}

            <HelmetComponent 
                page_title="Innotechsavvy - IT Consulting Services | Digital Transformation"
                meta_title="Innotechsavvy - IT Consulting Services | Digital Transformation"
                meta_desc="By offering a comprehensive suite of IT consulting services, Innotechsavvy aims to empower businesses to optimize their technology investments, enhance operational efficiency, and stay competitive in today's digital landscape. Our IT services include IT strategy development, software implementation, website & mobile application development,  cybersecurity solutions, cloud migration, data analytics, and more, depending on the specific needs of their clients."
                meta_keyword="Innotechsavvy - IT Consulting Services | Digital Transformation"
            />



            <section className="section-spacing">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-7 pos-rel">
                        <div className="banner-call">
                            <div className="icon"><i className="bi bi-telephone" /></div>
                            <div className="content">
                                <div className="head">Call Us Now</div>
                                <a href="tel:+91 8329385017">+91 832-9385-017</a>
                            </div>
                        </div>
                        <div className="owl-carousel owl-theme top-right-arrow d-block" id="marketing-banner-slider">
                            <div className="item">
                                <div className=""><img src="/assets/images/ts-logos-06.png" alt /></div>
                            </div>
                            <div className="item">
                                <div className=""><img src="/assets/images/ts-logos-05.png" alt /></div>
                            </div>
                            <div className="item">
                                <div className=""><img src="/assets/images/ts-logos-02.png" alt /></div>
                            </div>
                            <div className="item">
                                <div className=""><img src="/assets/images/ts-logos-04.png" alt /></div>
                            </div>
                            <div className="item">
                                {/* <div className="img-partner"><img src="/assets/images/partner/img-client1.png" alt /></div> */}
                                <div className=""><img src="/assets/images/ts-logos-01.png" alt /></div>
                            </div>
                            <div className="item">
                                <div className=""><img src="/assets/images/ts-logos-03.png" alt /></div>
                            </div>
                            <div className="item">
                                <div className=""><img src="/assets/images/ts-logos-07.png" alt /></div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="section-spacing gdr-light marketing-welcome section-padding">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-6 col-lg-7 mb-0">
                        <div className="section-title text-start"><span>What We Offer</span>
                        <h2 className="wow">Discover effortless <strong>Business and Marketing in one</strong></h2>
                        <p>Combining technology and marketing is a compelling proposition. Absolutely, integrating streamlined business operations with effective brand promotion is key to achieving sustainable growth and success. By optimizing processes and resources internally, you can ensure efficient delivery of products or services, while simultaneously employing strategic marketing tactics to enhance brand visibility and engagement externally.</p>
                        </div>
                        <div className="d-flex flex-column gap-4">
                        <div className="icon-style-left">
                            <div className="icon"><i className="srn-icon-social-attachment" /></div>
                            <div className="text-wrap">
                                <div className="text">
                                    <h6>Technology build the Products</h6>
                                    <p>Innovation is the outcome of a Technology & skills that we live in our daily lifestyle.</p>
                                </div>
                                <div className="arrow-icon">
                                    {/* <a href="our-services.html"> */}
                                    <Link to={'/service-tech'}>
                                        <i className="srn-arrow-right" />
                                    </Link>
                                    {/* </a> */}
                                </div>
                            </div>
                        </div>
                        <div className="icon-style-left">
                            <div className="icon"><i className="srn-icon-love-social" /></div>
                            <div className="text-wrap">
                                <div className="text">
                                    <h6>Social attachment for your Brand</h6>
                                    <p>We use the latest ethical marketing techniques to build your brand identity.</p>
                                </div>
                                <div className="arrow-icon">
                                    {/* <a href="our-services.html"> */}
                                    <Link to={'/service-social-savvy'}>
                                        <i className="srn-arrow-right" />
                                    </Link>
                                    {/* </a> */}
                                </div>
                            </div>
                        </div>
                        </div>
                        {/* <p className="mt-5">Let's Come Up With a <strong className="txt-primary">Start Free Trial 30-Day Money Back Guarantee</strong> For New Purchases​.</p> */}
                    </div>
                    <div className="col-xl-6 col-lg-5 order-lg-first">
                        <div className="img-character"><img src="/assets/images/img-character-welcome.png" alt /></div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="our-service-pattern section-padding pt-0">
                <div className="container">
                    <div className="row pos-rel">
                        <div className="col-xl-6 col-lg-10 mx-auto">
                            <div className="section-title text-center"><span>What We Do</span>
                            <h2 className="wow">Lets check out Our <strong>Technical and Digital Marketing Solutions</strong></h2>
                            <p>We provide comprehensive technical and digital marketing solutions tailored to enhance your online presence and streamline your operations. Our services are designed to optimize your website's performance, increase traffic, and maximize conversion rates through strategic digital strategies and technical expertise. Let's explore how we can elevate your business to the next level together.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <BoxWithSymbolAndHeader 
                            icon_value={'srn-icon-digital-analytics-monitor'} 
                            h6_header={'Application development'} 
                            p_content={'At our Mobile Application Development Services, we believe in turning ideas into reality...'}
                            link_service_page={'service-tech/mobile-application-development'}
                        />
                        <BoxWithSymbolAndHeader 
                            icon_value={'srn-icon-digital-marketing'} 
                            h6_header={'Website Development'}
                            p_content={'With a passion for pushing boundaries and a deep-rooted understanding of the digit...'}
                            link_service_page={'service-tech/web-development'}
                        />
                        <BoxWithSymbolAndHeader 
                            icon_value={'srn-icon-email-maketing'} 
                            h6_header={'UI/UX Development'} 
                            p_content={'UI/UX development, often referred to as UI/UX design or user interface/user experie...'}
                            link_service_page={'service-tech/ui-ux-development'}
                        />
                        
                        <BoxWithSymbolAndHeader 
                            icon_value={'srn-icon-marketing-automation'} 
                            h6_header={'Digital Marketing'}
                            p_content={'Our Digital Marketing service offering helps enterprises build deeper customer relatio...'}
                            link_service_page={'service-social-savvy/digital-marketing'}
                        />
                        <BoxWithSymbolAndHeader 
                            icon_value={'srn-icon-social-media-management'} 
                            h6_header={'Social Media Management'} 
                            p_content={'We are offering social media management services typically providing a range of...'}
                            link_service_page={'service-social-savvy/social-media-management'}
                        />
                        <BoxWithSymbolAndHeader 
                            icon_value={'srn-icon-keyword-research-second'} 
                            h6_header={'Analytics & Big Data'} 
                            p_content={'At Innotechsavvy, By leveraging big data analytics and visualization, businesses can streamlin...'}
                            link_service_page={'service-social-savvy/analytis-and-big-data'}
                        />                        
                        
                        <BoxWithSymbolAndHeader 
                            icon_value={'srn-icon-digital-marketing'} 
                            h6_header={'Internet of Things (IoT)'} 
                            p_content={`Innotechsavvy's focus on helping enterprises develop connected processes, produc...`}
                            link_service_page={'service-innovate/internet-of-things'}
                        />
                        <BoxWithSymbolAndHeader 
                            icon_value={'srn-icon-email-maketing'} 
                            h6_header={'Cloud Solution'} 
                            p_content={'Cloud computing applications address the evolving needs of modern businesses by providi...'}
                            link_service_page={'service-innovate/clound-solution'}
                        />
                        <BoxWithSymbolAndHeader 
                            icon_value={'srn-icon-keyword-research-second'} 
                            h6_header={'AI & Machine Learning'} 
                            p_content={'At its core, AI and ML involve algorithms and techniques for analyzing data, extract...'}
                            link_service_page={'service-innovate/ai-and-machine-learning'}
                        />
                    </div>
                </div>
            </section>

            <section className="section-padding bg-default line-bg d-none">
                <div className="line-1"><svg xmlns="http://www.w3.org/2000/svg" width="1570.917" height="656.371" viewBox="0 0 1570.917 656.371"><path id="ling_abstract" d="M608,101s126-116,320,7,362-21,405,223,126,46,226,255,619,81,619,81" transform="translate(-607.323 -50.436)" fill="none" stroke strokeLinejoin="round" strokeWidth={2} strokeDasharray={10} /></svg></div>
                <div className="line-2"><svg xmlns="http://www.w3.org/2000/svg" width="1570.917" height="656.371" viewBox="0 0 1570.917 656.371"><path id="ling_abstract1" d="M608,101s126-116,320,7,362-21,405,223,126,46,226,255,619,81,619,81" transform="translate(-607.323 -50.436)" fill="none" stroke strokeLinejoin="round" strokeWidth={2} strokeDasharray={10} /></svg></div>
                <div className="line-3"><svg xmlns="http://www.w3.org/2000/svg" width="1570.917" height="656.371" viewBox="0 0 1570.917 656.371"><path id="ling_abstract2" d="M608,101s126-116,320,7,362-21,405,223,126,46,226,255,619,81,619,81" transform="translate(-607.323 -50.436)" fill="none" stroke strokeLinejoin="round" strokeWidth={2} strokeDasharray={10} /></svg></div>
                <div className="line-4"><svg xmlns="http://www.w3.org/2000/svg" width="1570.917" height="656.371" viewBox="0 0 1570.917 656.371"><path id="ling_abstract3" d="M608,101s126-116,320,7,362-21,405,223,126,46,226,255,619,81,619,81" transform="translate(-607.323 -50.436)" fill="none" stroke strokeLinejoin="round" strokeWidth={2} strokeDasharray={10} /></svg></div>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-9 col-xl-5 mx-auto text-center">
                        <div className="section-title text-center light"><span>Real User Reviews</span>
                        <h2 className="wow">What our client's are <strong>Saying about us</strong></h2>
                        </div>
                    </div>
                    </div>
                    <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-6 text-center">
                        <div className="circle-thumbs"><img src="/assets/images/thumb_1.jpg" alt className="thumb one" /> <img src="/assets/images/thumb_2.jpg" alt className="thumb two" /> <img src="/assets/images/thumb_3.jpg" alt className="thumb three" /> <img src="/assets/images/thumb_4.jpg" alt className="thumb four" />                            <img src="/assets/images/thumb_5.jpg" alt className="thumb five" /> <img src="/assets/images/thumb_6.jpg" alt className="thumb six" /> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1168 1168"><g fill="none" stroke="#000" strokeDasharray={5} strokeWidth={2}><g data-name="Ellipse 1"><circle cx={584} cy={584} r={584} stroke="none" /><circle cx={584} cy={584} r={583} /></g><g data-name="Ellipse 2" transform="translate(154 154)"><circle cx={430} cy={430} r={430} stroke="none" /><circle cx={430} cy={430} r={429} /></g><g data-name="Ellipse 3" transform="translate(310 310)"><circle cx={274} cy={274} r={274} stroke="none" /><circle cx={274} cy={274} r={273} /></g></g></svg></div>
                    </div>
                    <div className="col-xl-6 col-lg-6 offset-xl-1">
                        <div className="testimonials-slider-single-wrap">
                            <div className="svg-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M437 75a254 254 0 0 0-362 0 254 254 0 0 0-39 312L1 492a15 15 0 0 0 19 19l105-35a255 255 0 0 0 387-220c0-68-27-133-75-181zM256 482c-43 0-84-12-121-35a15 15 0 0 0-12-2l-84 28 28-84c1-4 1-9-2-12A225 225 0 0 1 256 30a226 226 0 0 1 0 452z" />
                                    <path d="M346 161h-40c-19 0-35 16-35 35v40c0 19 16 35 35 35h43c-7 29-32 50-63 50a15 15 0 0 0 0 30c52 0 95-43 95-95v-60c0-19-16-35-35-35zm-45 75v-40c0-3 2-5 5-5h40c3 0 5 2 5 5v45h-45c-3 0-5-2-5-5zm-95-75h-40c-19 0-35 16-35 35v40c0 19 16 35 35 35h43c-7 29-32 50-63 50a15 15 0 0 0 0 30c52 0 95-43 95-95v-60c0-19-16-35-35-35zm-45 75v-40c0-3 2-5 5-5h40c3 0 5 2 5 5v45h-45c-3 0-5-2-5-5z" />
                                </svg>
                            </div>
                            <div className="owl-carousel owl-theme dots-border-light" id="testimonials-slider-single">
                                <div className="item">
                                <div className="testimonial-single-left">
                                    <hr className="divider-secondary" />
                                    <h6>My business is growing faster and I'm very happy with that</h6>
                                    <p>Thank you for your excellent work. No one could hear us as well as you and make our wishes come true so beautifully and beautifully. Starting from the very first day, the work was inspired and gave positive results.
                                    </p>
                                    <div className="testimonial-box">
                                    <div className="thumb-img"><img src="/assets/images/thumb_1.jpg" alt /></div>
                                    <div className="content">
                                        <div className="name">Rider Smith</div>
                                        <div className="post">Marketing Envato Pty Ltd.</div>
                                        <div className="rating"><i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> <i className="bi bi-star" /></div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="item">
                                <div className="testimonial-single-left">
                                    <hr className="divider-secondary" />
                                    <h6>My business is growing faster and I'm very happy with that</h6>
                                    <p>Thank you for your excellent work. No one could hear us as well as you and make our wishes come true so beautifully and beautifully. Starting from the very first day, the work was inspired and gave positive results.
                                    </p>
                                    <div className="testimonial-box">
                                    <div className="thumb-img"><img src="/assets/images/thumb_2.jpg" alt /></div>
                                    <div className="content">
                                        <div className="name">Kevin Martin</div>
                                        <div className="post">Marketing Consultant</div>
                                        <div className="rating"><i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> <i className="bi bi-star" /></div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="item">
                                <div className="testimonial-single-left">
                                    <hr className="divider-secondary" />
                                    <h6>My business is growing faster and I'm very happy with that</h6>
                                    <p>Thank you for your excellent work. No one could hear us as well as you and make our wishes come true so beautifully and beautifully. Starting from the very first day, the work was inspired and gave positive results.
                                    </p>
                                    <div className="testimonial-box">
                                    <div className="thumb-img"><img src="/assets/images/thumb_3.jpg" alt /></div>
                                    <div className="content">
                                        <div className="name">Sarah Albert</div>
                                        <div className="post">Senior Advisor</div>
                                        <div className="rating"><i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> <i className="bi bi-star-fill" /> <i className="bi bi-star" /></div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="item">
                                <div className="testimonial-single-left">
                                    <hr className="divider-secondary" />
                                    <h6>My business is growing faster and I'm very happy with that</h6>
                                    <p>Thank you for your excellent work. No one could hear us as well as you and make our wishes come true so beautifully and beautifully. Starting from the very first day, the work was inspired and gave positive results.
                                    </p>
                                    <div className="testimonial-box">
                                    <div className="thumb-img"><img src="/assets/images/thumb_4.jpg" alt /></div>
                                    <div className="content">
                                        <div className="name">David Cooper</div>
                                        <div className="post">Freelance Consultant</div>
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



        </>
    )
}

export default WelcomePage
