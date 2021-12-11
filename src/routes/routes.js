// Modulos

// Componentes
// import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import User from "../pages/auth/User";
import ListProjectsLeader from "../pages/ListProjectsLeader";
import ListProjectsStudents from "../pages/ListProjectsStudents";
import ListProjectsAdmin from "../pages/ListProjectsAdmin";
import Inscriptions from "../pages/inscriptions/Inscriptions";


import Error404 from "../pages/Error404";

const routes = [
  {
    path: "/",
    element: <Home/>,
    exact: true
  },
  {
    path: "/user",
    element: <User/>,
    exact: true
  },
  {
    path: "/listarproyectoslider",
    element: <ListProjectsLeader/>,
    exact: true
  },
  {
    path: "/listarproyectosestudiantes",
    element: <ListProjectsStudents/>,
    exact: true
  },
  {
    path: "/listarproyectosadministrador",
    element: <ListProjectsAdmin/>,
    exact: true
  },
  {
    path: "/inscriptions",
    element: <Inscriptions/>,
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
