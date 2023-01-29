// import { Box } from "@mui/material";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { usersDatas } from "../data/usersDatas";
// import { useTheme } from "@mui/material";

// const Users = () => {
//   const theme = useTheme();
//   // const colors = tokens(theme.palette.mode);



//   const columns = [
//     { field: "id", headerName: "ID", flex: 0.5 },
//     { field: "registrarId", headerName: "Registrar ID" },
//     {
//       field: "name",
//       headerName: "Name",
//       flex: 1,
//       cellClassName: "name-column--cell",
//     },
//     {
//       field: "email",
//       headerName: "Email",
//       flex: 1,
//     },
//   ];

//   return (
//     <Box 
//       m="20px"
//     >
//       <h1>Users</h1>
//       <Box
//         m="40px 0 0 0"
//         height="70vh"
//         sx={{
//           "& .MuiDataGrid-root": {
//             border: "none",
//           },
//           "& .MuiDataGrid-cell": {
//             borderBottom: "none",
//             backgroundColor : '#fff',
//             color : '#6c757d'
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             backgroundColor: '#009efb',
//             borderBottom: "none",
//           },
//           "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
//             color: '#6c757d',
//           },
//           "& .MuiDataGrid-footerContainer": {
//             display : 'none'
//           },
//         }}
//       >
//         <DataGrid
//           rows={usersDatas}
//           columns={columns}
//           components={{ Toolbar: GridToolbar }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Users;

import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Users = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/users/usersviews', { replace : true })
  }, [])
 
  return (
    <div>
      <h1>USERS</h1>
      <Outlet/>
    </div>
  )
}

export default Users
