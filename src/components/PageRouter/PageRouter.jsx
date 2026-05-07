import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { AboutUs, AiAndMachineLearning, AnalytisAndBigData, ChatbotDevelopment, CloundSolution, ContactUs, DigitalMarketing, InternetOfThings, MobileApplicationDevelopment, OurTeam, PublicLayout, ServiceInnovate, ServiceSocialSavvy, ServiceTech, SocialMediaManagement, TeamSingle, TemplateOneLayout, UiUxDevelopment, WebDevelopment, WelcomePage, DocumentScanningAndDigitization } from '..';

const PageRouter = () => {
    return (
        <>
            <Routes >
                <Route path='/' element={<PublicLayout />}>
                    <Route index element={<WelcomePage /> } />
                </Route>
                
                <Route path='/' element={<TemplateOneLayout />}>
                    <Route path='/about-us' element={<AboutUs /> } />
                    <Route path='/our-team' element={<OurTeam /> } />
                    <Route path='/team-single/:name' element={<TeamSingle /> } />
                    
                    <Route path='/service-innovate' element={<ServiceInnovate /> } />
                    <Route path='/service-innovate/internet-of-things' element={<InternetOfThings /> } />
                    <Route path='/service-innovate/clound-solution' element={<CloundSolution /> } />
                    <Route path='/service-innovate/ai-and-machine-learning' element={<AiAndMachineLearning /> } />
                    
                    <Route path='/service-tech' element={<ServiceTech /> } />
                    <Route path='/service-tech/mobile-application-development' element={<MobileApplicationDevelopment /> } />
                    <Route path='/service-tech/web-development' element={<WebDevelopment /> } />
                    <Route path='/service-tech/ui-ux-development' element={<UiUxDevelopment /> } />
                    <Route path='/service-tech/chatbot-development' element={<ChatbotDevelopment /> } />

                    <Route path='/service-social-savvy' element={<ServiceSocialSavvy /> } />
                    <Route path='/service-social-savvy/digital-marketing' element={<DigitalMarketing /> } />
                    <Route path='/service-social-savvy/social-media-management' element={<SocialMediaManagement /> } />
                    <Route path='/service-social-savvy/analytis-and-big-data' element={<AnalytisAndBigData /> } />
                    <Route path='/service-social-savvy/document-scanning-and-digitization' element={<DocumentScanningAndDigitization /> } />

                    <Route path='/contact-us' element={<ContactUs /> } />
                </Route>
            </Routes>
        </>
    )
}

export default PageRouter
