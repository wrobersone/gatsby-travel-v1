import { DiScala } from "react-icons/di";
import styled from "styled-components";
import { Link } from "gatsby";

export const FooterContainer = styled.div`
    background-color: #101522;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 20px auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color: #fff;
    cursor: pointer;
    justify-self: start;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`

export const SocialIcon = styled(DiScala)`
    margin-right: 10px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;

    &:hover {
        color: #ed9d62;
        transition: all 0.3s ease;
        transform: scale(1.3);
    }
`

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`