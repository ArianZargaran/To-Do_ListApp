import React, {Component} from 'react';

import '../style/Header.css';

export default class Header extends Component {
  render(){
    const {
      click = () => {},
      children = 'This is a Title',
    } = this.props;

    const className='tdl-main_title';

    return ( 
      <a href="#" className={className+'-link'} onClick={(event) => click(event, children, className)}>
        <h1 className={className}>{children}</h1>
      </a>
    )}
  }


// El usuario hace click y llama a la función onClick nativa de JS.
// a.onClick(event);

// La función anónima dentro del onClick de <a> ((event)) "recoge y permite utilizar" event, children y className.
// Después, esta función llama/invoca a la función que nosotros hemos definido en const (en este caso 'click'). 
// Puede acceder a los datos (event, children, className) porque está dentro del return. Si definiéramos esa función,
// además tiene this.props asociado por delante (this.props.click = function(event){*por definir en props*})

// var anonymous = function(event){
//  onClick(event, children, className);
// }

// Arriba, en const, definimos (o en este caso permitimos al desarrollador) que utilice los parámetros 
//invocados en (el callback) de la función anterior, en este caso click.
//
//** Como en el caso del texto que alberga children ('This is a title'), nos interesa que click por defecto
// y como medida de seguridad, devuelva una función vacía (así no peta la página). Esto es solo un default value
// que puede ser modificado en la props del elemento donde se coloque.