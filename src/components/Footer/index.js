import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, SocialIcon, SocialIcons, SocialIconLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/'>
                    <SocialIcon />
                    EXPLOR
                </SocialLogo>
                <WebsiteRights>EXPLOR © {new Date().getFullYear()}</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href='https://www.facebook.com/OneStaffMedical/' target='_blank' aria-label='Facebook'>
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href='https://www.instagram.com/onestaffmedical/?hl=en' target='_blank' aria-label='Instagram'>
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink href='https://www.linkedin.com/company/onestaff-medical' target='_blank' aria-label='LinkedIn'>
                        <FaLinkedin />
                    </SocialIconLink>
                    <SocialIconLink href='https://twitter.com/onestaffmedical?lang=en' target='_blank' aria-label='Twitter'>
                        <FaTwitter />
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
    </FooterContainer>
  )
}

export default Footer