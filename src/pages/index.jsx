import React from 'react';
import Layout from '../components/layout'
import UseInicio from '../hooks/useInicio'
import ListadoPropiedades from '../components/listadoPropiedades'
import styled from '@emotion/styled'    
import BackgroundImage from 'gatsby-background-image'
import Encuentra from '../components/encuentra'


const Contenedor = styled.div`
    max-width: 800px;
    margin: 0 auto;
`
const Contenido = styled.p`
    text-align: center;
`
const ImagenFondo = styled(BackgroundImage)`
    height: 600px; 
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

const Titulo = styled.h1`
    font-size: 2rem;
    margin: 0;
    max-width: 800px;
     
    @media (min-width: 768px){
        font-size: 4rem;
    } 
`

const Inicio = () => {

     const inicio = UseInicio()
     const {nombre, contenido, imagen} = inicio[0]
        
   
    return ( 
        <Layout>
            <ImagenFondo tag="section" fluid={imagen} fadeIn="soft">
                <Background>
                    <Titulo>Ventas de casas y deparetamentos exclusivos</Titulo>
                </Background>
            </ImagenFondo>
            <main>
                <Contenedor>

                    <h1>{nombre}</h1>
                    <Contenido>{contenido}</Contenido>
                </Contenedor>
            </main>
            <Encuentra />
            <ListadoPropiedades /> 

        </Layout>
     );
}
 
export default Inicio;