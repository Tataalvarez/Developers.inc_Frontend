// Modulos
import React from 'react';

// Componentes
// import Layout from "../components/layout/Layout";
import Lider from "../pages/Lider";
import User from "../pages/User";
import Admin from '../pages/Admin';
import Error404 from "../pages/Error404";
import UserLayout from '../components/user/UserLayout';
import AdminLayout from '../components/admin/AdminLayout';
import LiderLayout from '../components/lider/LiderLayout';
import LiderHome from '../components/lider/LiderHome';

const routes = [
  {
    path: "/user",
    layout: UserLayout,
    component: User,
    exact: true,
  },
  {
    path: "/lider",
    layout: LiderLayout,
    component: Lider,
    exact: true,
    children: [
      {path: "/lider/home", component: LiderHome},
    ]
  },
  {
    path: "/admin",
    layout: AdminLayout,
    component: Admin,
    exact: true,
  },
  {
    component: Error404,
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
