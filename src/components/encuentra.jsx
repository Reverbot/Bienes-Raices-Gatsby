import React from 'react';
import {useStaticQuery, graphql} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled' 

const Image = styled(BackgroundImage)`
    height: 300px;
`
const Titulo = styled.h1`
    font-size: 2rem;
    margin: 0;
    max-width: 800px;
     
    @media (min-width: 768px){
        font-size: 4rem;
    } 
`
const Background = styled.div`
    color: #fff;
    height: 100%;
    max-width:  1200px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Encuentra = () => {


    const {imagen} = useStaticQuery(graphql`
    query {
        imagen : file(relativePath: {eq: "encuentra.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1500 ) {
                ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `)
    return ( 
    <Image
        tag="section"
        fluid={imagen.childImageSharp.fluid}
        fadeIn="soft"
    >
        <Background>
            <Titulo>Encuentra la casa de tus sueños</Titulo>
            <p>15 años de experiencia</p>
        </Background>
    </Image> );
}
 
export default Encuentra;