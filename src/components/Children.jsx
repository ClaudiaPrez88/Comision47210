import React from 'react';

export default function Children() {
    const Layout = (props) => {
      console.log({props})
      return(
          <div>
              <h1>{props.text}</h1>
              {props.children}
          </div>
      );
  }
  return (
    <div>
    <Layout text='Hola mundo'>
    <span>Soy un span</span>
    <span>Soy un span</span>
    <span>Soy un span</span>
    <span>Soy un span</span>
    <span>Soy un span</span>
    <span>Soy un span</span>
  </Layout>
  </div>
  )
}
