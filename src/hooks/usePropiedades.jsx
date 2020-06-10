import {useStaticQuery, graphql} from 'gatsby'


const usePropiedades = () => {
    const datos = useStaticQuery(graphql`
    query{
        allStrapiPropiedades {
          nodes {
            nombre
            precio
            descripcion
            estacionamiento
            habitaciones
            id
            wc
            categorias {
              categoria
            }
            agentes {
              nombre
              telefono
              email
            }
            imagen {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                } 
              }
            }
          }
        }
    }
    `)
    return datos.allStrapiPropiedades.nodes.map(propiedad => ({
        nombre : propiedad.nombre,
        descripcion : propiedad.descripcion,
        imagen : propiedad.imagen,
        id: propiedad.id,
        wc : propiedad.wc,
        estacionamiento : propiedad.estacionamiento,
        habitaciones : propiedad.habitaciones,
        agentes: propiedad.agentes,
        precio: propiedad.precio,
        categorias : propiedad.categorias
    }))
}
export default usePropiedades ;