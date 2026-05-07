import React from 'react'
import { HelmetComponent, TemplateOneHeader } from '../..';
import { Link } from 'react-router-dom';

const OurTeam = () => {
    return (
        <>
            <HelmetComponent 
                page_title="Our Teams - Dedicated and Expert Teams for delivering successful IT projects"
                meta_title="Our Teams - Dedicated and Expert Teams for delivering successful IT projects"
                meta_desc="By investing in dedicated and expert teams, InnotechSavvy demonstrates its commitment to delivering exceptional results and providing value to its clients in every project it undertakes."
                meta_keyword="Our Teams - Dedicated and Expert Teams for delivering successful IT projects"
            />

            <TemplateOneHeader pagename='Our Team' />

            <div className='body-content'>
                
                <section className="section-spacing pt-0">
                    <div className="container">
                        
                        <div className="row">
                            <div className="col-lg-10 col-xl-6 mx-auto text-center">
                                <div className="section-title text-center"><span>Team We Have</span>
                                    <h2 className="wow">Our Buddy's Always Ready <strong>To Solve Your Issues</strong></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non accumsan in, tempor dictum neque. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 col-xl-6 col-lg-6">
                                <div className="team-wrap">
                                    <div className="img">
                                        <Link to={'/team-single/akhilesh'}>
                                            <img src="assets/images/team/team_img_1.jpg" alt />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h6><Link to={'/team-single/akhilesh'}>Akhilesh</Link></h6>
                                        <div className="post">Marketing Head</div>
                                        <ul className="list-unstyled social-icons">
                                        <li><a href="javascript:"><i className="bi bi-facebook" /></a></li>
                                        <li><a href="javascript:"><i className="bi bi-twitter-x" /></a></li>
                                        <li><a href="javascript:"><i className="bi bi-instagram" /></a></li>
                                        <li><a href="javascript:"><i className="bi bi-linkedin" /></a></li>
                                        <li><a href="javascript:"><i className="bi bi-youtube" /></a></li>
                                        </ul>
                                        <div className="arrow-read-more"><Link to={'/team-single/akhilesh'}>read more <i className="srn-arrow-right" /></Link></div>
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

export default OurTeam
