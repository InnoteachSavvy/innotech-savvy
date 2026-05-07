import React from 'react'
import { TemplateOneHeader } from '../..';
import { useParams } from 'react-router-dom';

const TeamSingle = () => {

    const { name } = useParams();

    console.log('Member Name : ', name);

    return (
        <>
            <TemplateOneHeader pagename='Team Single' />

            <div className='body-content'>
            
                {
                    name === 'akhilesh' ? (
                        <>
                            <section className>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-10 col-xl-10 col-sm-12 mx-auto">
                                            <div className="portfolio-slider-wrap-outer portfolio-single">
                                                <div className="square-top"><img src="assets/images/square_large.svg" alt /></div>
                                                <div className="portfolio-slider-wrap">
                                                    <div className="team-single">
                                                        <div className="img"><img src="/public/assets/images/team/team-single.jpg" alt /></div>
                                                        <div className="team-content"><span>CEO OF COMPANY</span>
                                                        <h1><strong>Akhilesh</strong></h1>
                                                        <p>With a rich history spanning 15 years in the dynamic realm of digital marketing, He is deeply passionate about leveraging my extensive experience and expertise in digital marketing to help businesses thrive in the digital landscape. His ability to adapt his expertise across diverse industries is a testament to his versatility and skill. With a proven track record of success and a commitment to excellence, he is dedicated to delivering strategic, results-driven solutions that propel the clients towards their goals. He believes in establishing long-term partnerships with clients by consistently delivering exceptional results and exceeding expectations. His extensive experience has allowed me to provide tailored digital marketing solutions to clients in fields ranging from Edtech, health Industry, IT services, Wellness, Real Estate, Media Agencies, and beyond.  It seems like he's not just focused on short-term gains, but rather on fostering sustained success for his clients. That's the mark of a true professional in the field.</p>
                                                        </div>
                                                    </div>
                                                    <div className="team-footer">
                                                        <ul className="list-unstyled social-icons">
                                                        <li><a href="javascript:"><i className="bi bi-facebook" /></a></li>
                                                        <li><a href="javascript:"><i className="bi bi-twitter-x" /></a></li>
                                                        <li><a href="javascript:"><i className="bi bi-instagram" /></a></li>
                                                        <li><a href="javascript:"><i className="bi bi-linkedin" /></a></li>
                                                        <li><a href="javascript:"><i className="bi bi-youtube" /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="section-spacing pattern-white-bg section-padding">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-10 col-xl-8 col-sm-12 mx-auto">
                                            <div className="portfolio-single-details">
                                                <div className="hstack justify-content-between wow fadeInUp" data-wow-delay="0.1s">
                                                    <div className="client-details">
                                                        <div className="head">Experience</div>
                                                        <h6>15 Years</h6>
                                                    </div>
                                                    <div className="client-details">
                                                        <div className="head">Expertise</div>
                                                        <h6>Mobile Apps, Web Softwares, Finance</h6>
                                                    </div>
                                                    <div className="client-details">
                                                        <div className="head">Email</div>
                                                        <div className="tags">
                                                            <a href="https://mannatstudio.com/cdn-cgi/l/email-protection#fc8a9592889392d29a99928f9392bc8f998e9992958899d29f9391">
                                                                <span className="__cf_email__" data-cfemail="f187989f859e9fdf97949f829e9fb1829483949f988594df929e9c">[email&nbsp;protected]</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="hstack justify-content-between wow fadeInUp" data-wow-delay="0.2s">
                                                    <div className="client-details">
                                                        <div className="head">Phone</div>
                                                        <div className="tags"><a href="tel:+91 8329385017">(+91) 832 938 5017</a></div>
                                                    </div>
                                                    <div className="client-details d-none">
                                                        <div className="head">Fax</div>
                                                        <div className="tags"><a href="tel:+1234567899">(+01) 123 456 7890</a></div>
                                                    </div>
                                                    <div className="client-details"><a href="javascript:" className="btn btn-outline-light"><span className="outer-wrap"><span data-text="Contact Me">Contact Me</span></span></a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    ) : (
                        <>
                            <section className>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-10 col-xl-10 col-sm-12 mx-auto">
                                            <div className="portfolio-slider-wrap-outer portfolio-single">
                                                <div className="square-top"><img src="assets/images/square_large.svg" alt /></div>
                                                <div className="portfolio-slider-wrap">
                                                    <div className="team-single">
                                                        <div className="img"><img src="/public/assets/images/team/team-single.jpg" alt /></div>
                                                        <div className="team-content"><span>CEO OF COMPANY</span>
                                                        <h1><strong>Prathamesh</strong></h1>
                                                        <p>Prathmesh is a seasoned IT professional with over 10 years of hands-on experience in software development. Throughout his career, he has demonstrated expertise in a wide range of technologies and programming languages, specializing in delivering customized software solutions tailored to meet clients' specific needs. With a proven track record of successful project delivery, John has consistently exceeded client expectations and contributed significantly to the growth and success of the companies he has worked with. Utilized a diverse set of technologies and programming languages, including Java, Python, JavaScript, and SQL, to develop scalable and robust software applications. Played a key role in project management, overseeing the entire software development lifecycle from inception to delivery, ensuring timely and high-quality execution. Received accolades from clients for delivering innovative solutions that streamlined their business processes and improved operational efficiency.</p>
                                                        </div>
                                                    </div>
                                                    <div className="team-footer">
                                                        <ul className="list-unstyled social-icons">
                                                        <li><a href="javascript:"><i className="bi bi-facebook" /></a></li>
                                                        <li><a href="javascript:"><i className="bi bi-twitter-x" /></a></li>
                                                        <li><a href="javascript:"><i className="bi bi-instagram" /></a></li>
                                                        <li><a href="javascript:"><i className="bi bi-linkedin" /></a></li>
                                                        <li><a href="javascript:"><i className="bi bi-youtube" /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="section-spacing pattern-white-bg section-padding">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-10 col-xl-8 col-sm-12 mx-auto">
                                            <div className="portfolio-single-details">
                                                <div className="hstack justify-content-between wow fadeInUp" data-wow-delay="0.1s">
                                                    <div className="client-details">
                                                        <div className="head">Experience</div>
                                                        <h6>15 Years</h6>
                                                    </div>
                                                    <div className="client-details">
                                                        <div className="head">Expertise</div>
                                                        <h6>Mobile Apps, Web Softwares, Finance</h6>
                                                    </div>
                                                    <div className="client-details">
                                                        <div className="head">Email</div>
                                                        <div className="tags"><a href="https://mannatstudio.com/cdn-cgi/l/email-protection#fc8a9592889392d29a99928f9392bc8f998e9992958899d29f9391"><span className="__cf_email__" data-cfemail="f187989f859e9fdf97949f829e9fb1829483949f988594df929e9c">[email&nbsp;protected]</span></a></div>
                                                    </div>
                                                </div>
                                                <div className="hstack justify-content-between wow fadeInUp" data-wow-delay="0.2s">
                                                    <div className="client-details">
                                                        <div className="head">Phone</div>
                                                        <div className="tags"><a href="tel:+91 8779965785">(+91) 877 996 5785</a></div>
                                                    </div>
                                                    <div className="client-details">
                                                        <div className="head">Fax</div>
                                                        <div className="tags"><a href="tel:+1234567899">(+01) 123 456 7890</a></div>
                                                    </div>
                                                    <div className="client-details"><a href="javascript:" className="btn btn-outline-light"><span className="outer-wrap"><span data-text="Contact Me">Contact Me</span></span></a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    )
                }
                

            </div>
        </>
    )
}

export default TeamSingle
