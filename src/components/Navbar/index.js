import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { CgMenuRight } from 'react-icons/cg'
import { IconContext } from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavSearch } from './NavbarElements'
import Logo from '../../images/osm_mobile_logo.png'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleClick = () => setClick(!click)

    const changeNav = () => {
        if (window.scrollY >= 50) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
            <IconContext.Provider value={{ color: "#141414" }}>
                <Nav active={scroll} click={click}> 
                    <NavbarContainer>
                        <NavLogo to='/'>
                            <img src={Logo} alt="" style={{ width: 150, paddingLeft: 10}} />                            
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <CgMenuRight />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/'></NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/osmtravel'>Travel Jobs</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/destinations'>Resources</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/aboutosm'>About Us</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/osmblog'>OSM Blog</NavLinks>
                            </NavItem>
                    
                        </NavMenu>
                        
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar