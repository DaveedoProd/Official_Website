import React, {useEffect} from 'react'
import Button from '../../components/ButtonContact';
import './Contact.css'

const Contact = () => {

        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

    return (
        <div className='contact-all'>
            <h1 className='contact-head'>Get In Touch</h1>
            <div className='contact-content'>
                <p className='contact-para'>Hit us up, and let's make some magic happen together. <br /> We can't wait to hear from you!</p>
                <div className='contact-button'>
                    <Button
                        id="realm-btn"
                        before="DM ON WHATSAPP"
                        after="https://api.whatsapp.com/message/RY4S3UFR3T6VC1?autoload=1&app_absent=0"
                        containerClass="mt-5"
                    />
                    <Button
                        id="realm-btn"
                        before="SHOOT US A MAIL"
                        after="ma23btech11002@iith.ac.in"
                        containerClass="mt-5"
                    />
                    <Button
                        id="realm-btn"
                        before="CALL US NOW"
                        after="+91 123456789"
                        containerClass="mt-5"
                    />
                </div>
            </div>
        </div>
    )
}

export default Contact