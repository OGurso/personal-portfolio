import { Link } from 'react-router-dom';
import styled from 'styled-components'
import React from 'react';
import Logo from './Logo';
import './navbar.css';


const StyledUL = styled.ul`
    list-style: none;
    color: black;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`



function Navbar() {
    return (
        <div className="nav-container">
            <Logo />
            <StyledUL>
                <StyledLink to="/home">Home</StyledLink>
                <StyledLink to="/about">About</StyledLink>
                <StyledLink to="/projects">Projects</StyledLink>
                <StyledLink to="/contact">Contact</StyledLink>
            </StyledUL>
        </div>
    )
}

export default Navbar;



// import { Link } from 'react-router-dom';

// import styled from 'styled-components';

// const StyledUL = styled.ul`
// list-style: none;
// `;

// const StyledLink = styled(Link)`
// background-color: green;
// color: white;
// `;

// function Navigation() {
//     return (
//         <nav>
//             <StyledUL>
//                 <li>
//                     <StyledLink to="/">Home</StyledLink>
//                 </li>
//                 <li>
//                     <StyledLink to="/about">About</StyledLink>
//                 </li>
//                 <li>
//                     <StyledLink to="/projects">Projects</StyledLink>
//                 </li>
//                 <li>
//                     <StyledLink to="/contact">Contact</StyledLink>
//                 </li>
//             </StyledUL>
//         </nav>
//     );
// }

// export default Navigation;