import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby'
import Navegacion from './navegacion';
import styled from '@emotion/styled'

const Heading = styled.header`
    background-color: #0d283b;
    padding: 1rem;
`
const Div = styled.div`
     max-width: 120rem;
     margin: 0 auto;
     text-align: center;

     @media (min-width: 768px){
         display: flex;
         align-items: center;
         justify-content: space-between;
     }
`

const Header = () => {

    const { logo }= useStaticQuery(graphql`
    query MyQuery {
        logo: file(relativePath: {eq: "logo.svg"}) {
          publicURL
        }
      }
      
    `)

    return ( 
        <Heading>
            <Div>
                <Link to="/">
                    <img src={logo.publicURL} alt=""/>
                </Link>

                <Navegacion />
            </Div>
        </Heading>
     );
}
 
export default Header;