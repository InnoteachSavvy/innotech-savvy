import { MenuWithChildren, MenuWithoutChildren, MenuWithNestedChildren } from '../..';
import { Link } from 'react-router-dom';

const CommonHeader = () => {

    const sub_menus_who_we_are = [
        {
            "name": "About Us",
            "link": "about-us"
        },
        {
            "name": "Our Team",
            "link": "our-team"
        }
    ];

    const sub_menus_our_services = [
        {
            "name": "Innovate",
            "link": "service-innovate",
            "sub_menus": [
                {
                    "name": "IOT",
                    "link": "service-innovate/internet-of-things"
                },
                {
                    "name": "Cloud Solution",
                    "link": "service-innovate/clound-solution"
                },
                {
                    "name": "AI & Machine Learning",
                    "link": "service-innovate/ai-and-machine-learning"
                }
            ]
        },
        {
            "name": "Tech",
            "link": "service-tech",
            "sub_menus": [
                {
                    "name": "Mobile Application Development",
                    "link": "service-tech/mobile-application-development"
                },
                {
                    "name": "Web Development",
                    "link": "service-tech/web-development"
                },
                {
                    "name": "UI/UX Development",
                    "link": "service-tech/ui-ux-development"
                },
                {
                    "name": "Chatbot Development",
                    "link": "service-tech/chatbot-development"
                }
            ]
        },
        {
            "name": "Social savvy",
            "link": "service-social-savvy",
            "sub_menus": [
                {
                    "name": "Digital Marketing",
                    "link": "service-social-savvy/digital-marketing"
                },
                {
                    "name": "Social Media Management",
                    "link": "service-social-savvy/social-media-management"
                },
                {
                    "name": "Analytics and Big Data",
                    "link": "service-social-savvy/analytis-and-big-data"
                },
                {
                    "name": "Document Scanning and Digitization",
                    "link": "service-social-savvy/document-scanning-and-digitization"
                }
            ]
        }
    ];
    // const sub_menus_our_services = [
    //     {
    //         "name": "Web Development",
    //         "link": "web-development"
    //     },
    //     {
    //         "name": "App Development",
    //         "link": "app-development"
    //     },
    //     {
    //         "name": "IOT",
    //         "link": "iot"
    //     },
    //     {
    //         "name": "AI & Machine Learning",
    //         "link": "ai-and-machine-learning"
    //     },
    //     {
    //         "name": "Cloud",
    //         "link": "cloud"
    //     },
    //     {
    //         "name": "Chatbot Development",
    //         "link": "chatbot-development"
    //     }
    // ];

    // const sub_menus_core_expertise = [
    //     {
    //         "name": "Technologies",
    //         "link": "technologies"
    //     },
    //     {
    //         "name": "Enterprise Solution",
    //         "link": "enterprise-solution"
    //     }
    // ];

    return (
        <>
            <header style={{ height: '115.067px' }}>

                <div className="container">
                    <div className="top-bar">
                        <div className="row">
                            <div className="col-md-6 order-md-last">
                                <div className="language-links">
                                    {/* <a href="#">Eng</a> 
                                <a href="#">FR</a> */}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="top-bar-links">
                                    {/* <a href="#">Products</a> 
                                <a href="#">Careers</a> 
                                <a href="#">Support</a>
                                <a href="#">Login</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg header-anim">

                    <div className="container">
                        <Link className="navbar-brand" to={'/'}>
                            {/* <img src="assets/images/logo_light.svg" alt="" /> */}
                            {/* <img src="assets/images/innotechsavvy_logo.png" alt="Innotechsavvy" /> */}
                            <img src="/assets/images/ITS_logo_03.png" alt="Innotechsavvy" style={{ width: "90px" }} />
                        </Link>

                        <form className="d-flex order-lg-last ms-3 align-items-center">
                            <a href="#" id="search_home" className='d-none'><i className="srn-search" /> </a>
                            <a className="signup-btn btn btn-outline-light text-nowrap d-none" data-trigger="#signup">
                                <span className="d-none d-sm-inline-block">
                                    <span className="outer-wrap">
                                        <span data-text="Sing Up">Sing Up</span>
                                    </span>
                                </span>
                                <span className="d-block d-sm-none"><i className="bi bi-door-closed" /></span>
                            </a>

                            <button className="navbar-toggler x collapsed" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                        </form>

                        <div className="navbar-collapse offcanvas offcanvas-start offcanvas-collapse" id="navbarCollapse">

                            <div className="offcanvas-header">
                                <a className="navbar-brand" href="/">
                                    <img src="/assets/images/ITS_logo_03.png" alt="Innotechsavvy" style={{ width: "90px" }} />
                                </a>
                                <button className="navbar-toggler x collapsed" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><i className="bi bi-x-lg" /></button>
                            </div>

                            <div className="offcanvas-body">
                                <ul className="navbar-nav">

                                    <MenuWithoutChildren main_menu_name="Home" main_menu_link="" />

                                    <MenuWithChildren main_menu_name="Who We Are" main_menu_link="who_we_are" sub_menus_array={sub_menus_who_we_are} />

                                    <MenuWithNestedChildren main_menu_name="Our Services" main_menu_link="our-services" sub_menus_array={sub_menus_our_services} />

                                    {/* <MenuWithoutChildren main_menu_name="Portfolio" main_menu_link="portfolio" /> */}

                                    {/* <MenuWithChildren main_menu_name="Core Expertise" main_menu_link="core-expertise" sub_menus_array={sub_menus_core_expertise} /> */}

                                    {/* <MenuWithoutChildren main_menu_name="Career" main_menu_link="career" /> */}

                                    {/* <MenuWithoutChildren main_menu_name="Blogs" main_menu_link="blogs" /> */}

                                    <MenuWithoutChildren main_menu_name="Contact Us" main_menu_link="contact-us" />
                                </ul>
                            </div>

                        </div>
                    </div>

                </nav>

            </header>

            <b className="screen-overlay" />

            <article className="mobile-offcanvas offcanvas-right" id="signup">
                <button className="btn-close"><i className="bi bi-x" /></button>
                <div className="popup-wrapper">
                    <div className="content">
                        <h3>Create an account</h3>
                        <div className="social-login-btn"><a href="javascript:" className="gm"><i className="bi bi-google" /> With Google </a><a href="javascript:" className="fb"><i className="bi bi-facebook" /> With Facebook</a></div>
                        <div className="or-text"><span>Or Signup with your email</span></div>
                    </div>
                    <div className="form-wrap">
                        <div className>
                            <div className="mb-4"><input type="text" className="form-control bordered bottom-only" placeholder="Mobile Number or Email" /></div>
                            <div className="mb-4"><input type="text" className="form-control bordered bottom-only" placeholder="Full Name" /></div>
                            <div className="mb-4"><input type="text" className="form-control bordered bottom-only" placeholder="Username" /></div>
                            <div className="mb-4"><input type="text" className="form-control bordered bottom-only" placeholder="Password" /></div>
                            <div className="mb-4 info-form"><small>By signing up, you agree to our <a href="javscript:">Terms</a> , <a href="javscript:">Data Policy</a> and <a href="javscript:">Cookies Policy</a>.</small></div>
                            <div className="d-grid"><button type="button" className="btn btn-outline-primary btn-sm"><span className="outer-wrap"><span data-text="Singup">Singup</span></span></button></div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default CommonHeader
