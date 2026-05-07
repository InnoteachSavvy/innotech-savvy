import React from 'react'
import { BoxWithSymbolAndHeader, TemplateOneHeader } from '../../..';
import { Link } from 'react-router-dom';

const ServiceInnovate = () => {
    return (
        <>

            <TemplateOneHeader pagename='Innovate' />

            <div className='body-content'>

                <section className="our-service-pattern section-padding pt-0">
                    <div className="container">
                        <div className="row pos-rel">
                            <div className="col-xl-6 col-lg-10 mx-auto">
                                <div className="section-title text-center">
                                    {/* <span>What We Do</span> */}
                                    <h2 className="wow"><strong>Innovate</strong></h2>
                                    <p>Innovative tech services are constantly evolving, driven by advancements in technology and changing consumer needs. Innovation is making a significant impact in the world as well as in technology field. Few of technologies like AI and Machine Learning, Cloud Computing, Internet of Things (IoT), Cybersecurity Solutions, Remote Work Solutions, Health Tech Innovations, Fintech Innovations and many more. Below mentioned areas represent just a glimpse of how innovative tech services are reshaping industries and enhancing everyday life.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">

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

                            {/* <div className="col-lg-4 col-sm-6 mb-0">
                                <div className="icon-style-top-icon">
                                    <div className="icon"><i className="srn-icon-digital-analytics-monitor" /></div>
                                    <div className="text">
                                        <h6>Internet of Things (IoT)</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat laudantium ex velit?</p>
                                    </div>
                                    <div className="arrow-read-more">
                                        <Link to={'/service-innovate/internet-of-things'}>read more <i className="srn-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div> */}

                            {/* <div className="col-lg-4 col-sm-6 mb-0">
                                <div className="icon-style-top-icon">
                                    <div className="icon"><i className="srn-icon-digital-marketing" /></div>
                                    <div className="text">
                                        <h6>Clound Solution</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit optio minus ullam.</p>
                                    </div>
                                    <div className="arrow-read-more">
                                        <Link to={'/service-innovate/clound-solution'}>read more <i className="srn-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div> */}

                            {/* <div className="col-lg-4 col-sm-6 mb-0">
                                <div className="icon-style-top-icon">
                                    <div className="icon"><i className="srn-icon-email-maketing" /></div>
                                    <div className="text">
                                        <h6>AI & Machine Learning</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, modi. Laboriosam, iste.</p>
                                    </div>
                                    <div className="arrow-read-more">
                                        <Link to={'/service-innovate/ai-and-machine-learning'}>read more <i className="srn-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default ServiceInnovate
