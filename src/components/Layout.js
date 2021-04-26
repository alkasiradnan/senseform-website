  
import React from 'react';
import { Container } from 'react-bootstrap';
// import { Helmet, HelmetProvider } from 'react-helmet-async';

const Layout = (props) => (
 
//     <HelmetProvider>
//         <Helmet titleTemplate="%s | Michael D'Angelo" defaultTitle="Michael D'Angelo">
//   {props.title && <title>{props.title}</title>}
//   <meta name="description" content={props.description} />
// </Helmet>
  <Container> 
      {/* {props} */}
    {props.children}
  </Container>
//   </HelmetProvider>

)

export default Layout;