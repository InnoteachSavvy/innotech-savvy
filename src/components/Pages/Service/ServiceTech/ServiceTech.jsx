import React from 'react'
import { TemplateOneHeader } from '../../..';
import { Link } from 'react-router-dom';

const ServiceTech = () => {
    return (
        <>
            <TemplateOneHeader pagename='Tech' />

            <div className='body-content'>

                <section className="our-service-pattern section-padding pt-0">
                    <div className="container">
                        <div className="row pos-rel">
                            <div className="col-xl-6 col-lg-10 mx-auto">
                                <div className="section-title text-center">
                                    <h2 className="wow"><strong>Tech</strong></h2>
                                    <p>The Role of Technology Solutions in Business essential for enhancing productivity, improving security and driving innovation. Selecting the right technology solution depends on the specific needs, goals, and resources of an organization or individual. By following these steps, organizations can effectively select technology solutions that drive growth, enhance efficiency, and secure their operations. InnotechSavvy provides "Technology solutions" refer to a wide range of services mobile application development, web development, UI/UX development and chat-bot development.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-lg-3 col-sm-6 mb-0">
                                <div className="icon-style-top-icon">
                                    <div className="icon"><i className="srn-icon-digital-analytics-monitor" /></div>
                                    <div className="text">
                                        <h6>Mobile Application Development</h6>
                                        <p>At our Mobile Application Development Services, we be...</p>
                                    </div>
                                    <div className="arrow-read-more">
                                        <Link to={'/service-tech/mobile-application-development'}>read more <i className="srn-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 mb-0">
                                <div className="icon-style-top-icon">
                                    <div className="icon"><i className="srn-icon-digital-marketing" /></div>
                                    <div className="text">
                                        <h6>Web Development</h6>
                                        <p>With a passion for pushing boundaries and a deep-rooted und...</p>
                                    </div>
                                    <div className="arrow-read-more">
                                        <Link to={'/service-tech/web-development'}>read more <i className="srn-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 mb-0">
                                <div className="icon-style-top-icon">
                                    <div className="icon"><i className="srn-icon-email-maketing" /></div>
                                    <div className="text">
                                        <h6>UI/UX Development</h6>
                                        <p>UI/UX development, often referred to as UI/UX design or user interface/user experience desi...</p>
                                    </div>
                                    <div className="arrow-read-more">
                                        <Link to={'/service-tech/ui-ux-development'}>read more <i className="srn-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-sm-6 mb-0">
                                <div className="icon-style-top-icon">
                                    <div className="icon"><i className="srn-icon-email-maketing" /></div>
                                    <div className="text">
                                        <h6>Chatbot Development</h6>
                                        <p>At Innotech Savvy, we specialize in creating intelligent, conversational chatbots that revolut...</p>
                                    </div>
                                    <div className="arrow-read-more">
                                        <Link to={'/service-tech/chatbot-development'}>read more <i className="srn-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default ServiceTech
