import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {

    
    const { providerLogin } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(error => console.error(error))
    }



    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-3' variant="outline-primary"><FaGoogle></FaGoogle>  Log in with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub>  Log in with GitHub</Button>
            </ButtonGroup>
            <div>
                <h5 className='mt-4 mb-2'>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-3'> <FaFacebook></FaFacebook> Facebook </ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter></FaTwitter> Twiter </ListGroup.Item>
                    <ListGroup.Item className='mb-3'> <FaWhatsapp></FaWhatsapp> Whats app </ListGroup.Item>
                    <ListGroup.Item className='mb-3'> <FaTwitch></FaTwitch> Twitch </ListGroup.Item>
                    <ListGroup.Item className='mb-3'>  Terms & Conditions</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;