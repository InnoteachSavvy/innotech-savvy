import { CommonHeader } from '../..';

const WelcomPageHeader = () => {

    

    return (
        <>
            <div className="bg-primary header-bg marketing-home">

                <CommonHeader />

                <div className="marketing-banner-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="marketing-banner">
                                    <div className="title mt-4">
                                        {/* <span>For Marketing and Creative Teams</span> */}
                                        <h1 className="wow">Turn strategy <strong>into workable <u>marketing</u></strong></h1>
                                        <p className="lead">At Innotech Savvy, we are more than just a website development company; we are architects of digital experiences, sculpting online identities that resonate with your audience and drive meaningful engagement. Located in the vibrant city of Mumbai, we pride ourselves on our innovative approach, technical expertise, and unwavering commitment to client success.</p>
                                        {/* <p className="lead">Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious. Kept easy or sons my it done.</p> */}
                                        <div className="cta-group d-none">
                                            <a href="javascript:" className="btn btn-secondary" data-trigger="#signup">
                                                <span className="outer-wrap">
                                                    <span data-text="Try for free">Try for free</span>
                                                </span>
                                            </a> 
                                            <a href="contact.html" className="btn btn-default">
                                                <span className="outer-wrap">
                                                    <span data-text="Request a demo">Request a demo</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="marketing-character"><img src="/assets/images/img-character-mac.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default WelcomPageHeader
