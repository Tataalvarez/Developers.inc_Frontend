// Modulos
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { map } from 'lodash';
import routes from './routes';

// Componentes
import Layout from "../components/Layout";

// export default function Navigation() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route exact path='/' element={<Home/>}>
//             <Route path='home' element={<UserHome/>}/>
//             <Route path='profile' element={<UserProfile/>}/>
//             <Route path='proyectos' element={<UserProjects/>}/>
//             <Route path='avances' element={<UserAvances/>}/>
//           </Route>
//           <Route exact path='/lider' element={<Lider/>}/>
//           <Route exact path='/admin' element={<Admin/>}/>
//           <Route path='*' element={<Error404/>}/>
//         </Routes>
//       </Layout>
//     </Router>
//   )
// }





export default function Navigation() {
  return (
    <Router>
      {/* <Layout> */}
        <Switch>
          {map(routes, (route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <route.layout>
                  <route.component {...props} />
                </route.layout>
              )}
            />
          ))}
        </Switch>
      {/* </Layout> */}
    </Router>
  );
}