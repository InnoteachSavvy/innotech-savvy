import React from 'react'
import { BoxWithSymbolAndHeader, TemplateOneHeader } from '../../..';

const ServiceSocialSavvy = () => {
    return (
        <>
            <TemplateOneHeader pagename='Social Savvy' />

            <div className='body-content'>

                <section className="our-service-pattern section-padding pt-0">
                    <div className="container">
                        <div className="row pos-rel">
                            <div className="col-xl-6 col-lg-10 mx-auto">
                                <div className="section-title text-center">
                                    {/* <span>What We Do</span> */}
                                    <h2 className="wow"><strong>Social Savvy</strong></h2>
                                    <p>Social Savvy focuses on promoting ideas, behaviors, or products that benefit society as a whole. Unlike traditional marketing, which primarily aims to sell products, social marketing seeks to influence social change, improve public health, and address social issues. Evaluating the effectiveness of social marketing campaigns involves analysing metrics such as engagement rates, behaviour changes, reach, and feedback from the community. Surveys and focus groups can provide qualitative insights into the campaign’s impact. By strategically applying these principles and techniques, social marketing can effectively promote positive societal change and foster community involvement.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">

                            <BoxWithSymbolAndHeader 
                                icon_value={'srn-icon-digital-marketing'} 
                                h6_header={'Digital Marketing'} 
                                p_content={`Our Digital Marketing service offering helps enterprises build deeper customer relationsh...`}
                                link_service_page={'service-social-savvy/digital-marketing'}
                            />

                            <BoxWithSymbolAndHeader 
                                icon_value={'srn-icon-email-maketing'} 
                                h6_header={'Social Media Management'} 
                                p_content={'We are offering social media management services typically providing a range of...'}
                                link_service_page={'service-social-savvy/social-media-management'}
                            />

                            <BoxWithSymbolAndHeader 
                                icon_value={'srn-icon-keyword-research-second'} 
                                h6_header={'Analytis & Big Data '} 
                                p_content={'At Innotechsavvy, By leveraging big data analytics and visualization, businesses can streamlin...'}
                                link_service_page={'service-social-savvy/analytis-and-big-data'}
                            />

                            <BoxWithSymbolAndHeader 
                                icon_value={'srn-icon-keyword-research-second'} 
                                h6_header={'Document Scanning And Digitization'} 
                                p_content={"In today's digital age, converting your paper documents into digital formats is crucial for..."}
                                link_service_page={'service-social-savvy/document-scanning-and-digitization'}
                            />
                            
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default ServiceSocialSavvy
