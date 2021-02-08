import React from 'react';
import Header from './components/Header';
import Productos from './components/Productos';
import Nuevoproductos from './components/Nuevoproducto';
import Editarproducto from './components/EditarProducto';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Redux

import store from './store';
import { Provider } from 'react-redux';


function App() {
  return (
  <Router>
     <Provider store={store}>
        <Header/>

        <div className="container mt-5">
          <Switch>
              <Route exact path="/" component={Productos} />
              <Route exact path="/productos/nuevo" component={Nuevoproductos} />
              <Route exact path="/productos/editar/:id" component={Editarproducto} />
            </Switch>
        </div>
      </Provider>  
     </Router>
  );
}

export default App;
