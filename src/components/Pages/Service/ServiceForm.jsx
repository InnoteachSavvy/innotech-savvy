import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ServiceForm = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        enquiry: ''
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
        const templateID = 'template_xg8zfue';
        const publicKey = '4T_HfuIpJBBOpbO0Z';

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                setSubmitted(true);
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    enquiry: ''
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
        <div className="service-sticky-form p-4 rounded-4 shadow" style={{ 
            backgroundColor: '#F9FAFB', 
            position: 'sticky', 
            top: '120px',
            zIndex: 10,
            border: '1px solid #eee'
        }}>
            <h3 className="mb-4" style={{ color: '#1B1642', fontWeight: '700', fontSize: '24px' }}>Get in Touch</h3>
            <form ref={form} onSubmit={handleSubmit}>
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
                        Thank you! Your query has been sent successfully.
                    </div>
                )}
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control py-3 px-3 border-0"
                        style={{ 
                            backgroundColor: '#F1F1F1', 
                            borderRadius: '5px',
                            fontStyle: 'italic',
                            fontSize: '14px'
                        }}
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="tel"
                        className="form-control py-3 px-3 border-0"
                        style={{ 
                            backgroundColor: '#F1F1F1', 
                            borderRadius: '5px',
                            fontStyle: 'italic',
                            fontSize: '14px'
                        }}
                        placeholder="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control py-3 px-3 border-0"
                        style={{ 
                            backgroundColor: '#F1F1F1', 
                            borderRadius: '5px',
                            fontStyle: 'italic',
                            fontSize: '14px'
                        }}
                        placeholder="Email ID"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        className="form-control py-3 px-3 border-0"
                        style={{ 
                            backgroundColor: '#F1F1F1', 
                            borderRadius: '5px', 
                            minHeight: '150px',
                            fontStyle: 'italic',
                            fontSize: '14px'
                        }}
                        placeholder="Your Query"
                        name="enquiry"
                        value={formData.enquiry}
                        onChange={handleChange}
                        rows="5"
                        required
                    ></textarea>
                </div>
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
                    {loading ? 'Sending...' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default ServiceForm;
