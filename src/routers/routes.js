// Modulos

// Componentes
// import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import User from "../pages/auth/User";
import Error404 from "../pages/Error404";
import Projects from "../pages/Projects";
import ListProjects from "../pages/Projects";
const routes = [
  {
    path: "/",
    element: <Home/>,
    exact: true
  },
  {
    path: "/projects",
    element: <Projects/>,
    exact: true
  },
  {
    path: "/listarproyectos",
    element: <ListProjects/>,
    exact: true
  },
  {
    path: "/user",
    element: <User/>,
    exact: true
  },
  {
    element: <Error404/>
  },
];

export default routes;

// export default function AppRouter() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route exact path="/" element={<Auth />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/user" element={<User />} />
//           <Route path="*" element={<Error404 />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }
