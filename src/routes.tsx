import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import FindUser from './pages/FindUser';

function Routes(){
  return(
    <BrowserRouter>
    <Route path="/" exact component={Landing} />
    <Route path="/find" component={FindUser} />
    </BrowserRouter>
  )

}

export default Routes;