import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { TemplateOneHeader } from '../..';

const ContactUs = () => {

    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        email: '',
        phone_number: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmitted(false);

        const serviceID = 'service_yw2jbjn';
        const templateID = 'template_rvozrm6';
        const publicKey = '4T_HfuIpJBBOpbO0Z';

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                setSubmitted(true);
                setFormData({
                    first_name: '',
                    phone_number: '',
                    email: '',
                    message: ''
                });
                
                // Optional: Hide success message after 5 seconds
                setTimeout(() => setSubmitted(false), 5000);
            }, (error) => {
                console.error('Failed to send email:', error.text);
                alert('Oops! Something went wrong. Please try again later.');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <>
            <TemplateOneHeader pagename='Contact Us' />

            <div className='body-content'>
            
                <section className="section-spacing pt-0">
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-9 col-md-12 mx-auto text-center">
                        <div className="section-title text-center"><span>Contact us</span>
                            <h2 className="wow">How can we help you? <strong>Get In Touch!</strong></h2>
                            <p>Loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-9 col-md-12 mx-auto">
                        <div className="p-4 rounded-4 shadow-sm" style={{ backgroundColor: '#F9FAFB', border: '1px solid #eee' }}>
                            <div id="sucessmessage">
                                {submitted && (
                                    <div className="mb-4 p-3 text-center" style={{ 
                                        backgroundColor: '#D1FAE5', 
                                        color: '#065F46', 
                                        borderRadius: '5px',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        border: '1px solid #A7F3D0'
                                    }}>
                                        <i className="bi bi-check-circle-fill me-2"></i>
                                        Thank you! Your message has been sent successfully.
                                    </div>
                                )}
                            </div>
                            <form ref={form} onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input 
                                        className="form-control py-3 px-3 border-0" 
                                        style={{ 
                                            backgroundColor: '#F1F1F1', 
                                            borderRadius: '5px',
                                            fontStyle: 'italic',
                                            fontSize: '14px'
                                        }}
                                        type="text" 
                                        name="first_name" 
                                        placeholder="Your Name" 
                                        value={formData.first_name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                               
                                <div className="mb-3">
                                    <input 
                                        className="form-control py-3 px-3 border-0" 
                                        style={{ 
                                            backgroundColor: '#F1F1F1', 
                                            borderRadius: '5px',
                                            fontStyle: 'italic',
                                            fontSize: '14px'
                                        }}
                                        type="email" 
                                        name="email" 
                                        placeholder="Email Address" 
                                        value={formData.email}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <input 
                                        className="form-control py-3 px-3 border-0" 
                                        style={{ 
                                            backgroundColor: '#F1F1F1', 
                                            borderRadius: '5px',
                                            fontStyle: 'italic',
                                            fontSize: '14px'
                                        }}
                                        type="tel"                                         
                                        name="phone_number" 
                                        placeholder="Phone Number" 
                                        value={formData.phone_number}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <textarea 
                                        name="message" 
                                        rows={6} 
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="form-control py-3 px-3 border-0" 
                                        style={{ 
                                            backgroundColor: '#F1F1F1', 
                                            borderRadius: '5px',
                                            minHeight: '150px',
                                            fontStyle: 'italic',
                                            fontSize: '14px'
                                        }}
                                        placeholder="Your Message" 
                                    />
                                </div>
                                <div className="d-grid">
                                    <button 
                                        type="submit" 
                                        className="btn w-100 py-3 text-white fw-bold"
                                        disabled={loading}
                                        style={{ 
                                            backgroundColor: '#FF7A50', 
                                            borderRadius: '5px',
                                            border: 'none',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            fontSize: '16px',
                                            opacity: loading ? 0.7 : 1
                                        }}
                                    >
                                        {loading ? 'Sending...' : 'Send a Message'}
                                    </button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                <section>
                    <div className="container contact-details-wrap">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                        <div className="contact-details wow fadeInUp" data-wow-delay="0.1s">
                            <div className="icon-style-border-bottom">
                            <div className="icon"><i className="bi bi-geo-alt" /></div>
                            <div className="text">
                                <h6>Our Location</h6>
                                <p>Innotechsavvy Pvt. Ltd.
                                    A-505, Vasant Blossom, 
                                    Makwana Road, Marol, 
                                    Andheri East, Mumbai - 59</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                        <div className="contact-details wow fadeInUp" data-wow-delay="0.2s">
                            <div className="icon-style-border-bottom">
                            <div className="icon"><i className="bi bi-phone" /></div>
                            <div className="text">
                                <h6>Call Us</h6>
                                <p>(+91) 832 938 5017</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mx-auto">
                        <div className="contact-details mt-4 mt-lg-0 mt-0 mt-sm-0 mt-md-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="icon-style-border-bottom">
                            <div className="icon"><i className="bi bi-envelope" /></div>
                            <div className="text">
                                <h6>Email Us</h6>
                                <p>
                                    <a href="mailto:info@innotechsavvy.com">
                                        <span className="__cf_email__" data-cfemail="e8808d8498a89b8d9a8d86819c8dc68b8785">
                                            {/* [email&nbsp;protected] */}
                                            info@innotechsavvy.com
                                        </span>
                                    </a>
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* <div className="map-frame"><iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" /></div> */}

                    <div className="map-frame"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4355.522753546395!2d72.88171849925227!3d19.11361090700137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c950864d39a7%3A0x4eb0d9cbdfdc93d!2sVasant%20Blossom!5e0!3m2!1sen!2sin!4v1719837659299!5m2!1sen!2sin"/></div>
                    
                </section>

            </div>
        </>
    )
}

export default ContactUs
