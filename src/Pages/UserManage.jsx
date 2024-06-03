// import React, { useState, useEffect } from "react";

// const UserManage = () => {
//   const [users, setUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     // Fetch users from the API or data source
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     // Fetch users from an API and set the users state
//     // For demonstration, we use a hardcoded list
//     const usersData = [
//       {
//         email: "john.doe@example.com",
//         fullName: "John Doe",
//         phoneNumber: "123-456-7890",
//         address: "123 Main St",
//         role: "user",
//         city: "New York",
//         country: "USA",
//       },
//       {
//         email: "jane.doe@example.com",
//         fullName: "Jane Doe",
//         phoneNumber: "987-654-3210",
//         address: "456 Elm St",
//         role: "admin",
//         city: "San Francisco",
//         country: "USA",
//       },
//     ];
//     setUsers(usersData);
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleUpdate = (email) => {
//     // Handle update user logic
//     console.log(`Update user with email: ${email}`);
//   };

//   const handleDelete = (email) => {
//     // Handle delete user logic
//     setUsers(users.filter((user) => user.email !== email));
//   };

//   const handleAddUser = () => {
//     // Handle add user logic
//     console.log("Add new user");
//   };

//   const filteredUsers = users.filter((user) =>
//     user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="user-manage">
//       <div className="user-manage-header">
//         <h1>User Management</h1>
//         <button className="btn-add-user" onClick={handleAddUser}>
//           Add New User
//         </button>
//       </div>
//       <div className="user-manage-search">
//         <input
//           type="text"
//           placeholder="Search by full name..."
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </div>
//       <table className="user-manage-table">
//         <thead>
//           <tr>
//             <th>Email</th>
//             <th>Full Name</th>
//             <th>Phone Number</th>
//             <th>Address</th>
//             <th>Role</th>
//             <th>City</th>
//             <th>Country</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredUsers.map((user) => (
//             <tr key={user.email}>
//               <td>{user.email}</td>
//               <td>{user.fullName}</td>
//               <td>{user.phoneNumber}</td>
//               <td>{user.address}</td>
//               <td>{user.role}</td>
//               <td>{user.city}</td>
//               <td>{user.country}</td>
//               <td>
//                 <button
//                   className="btn-update"
//                   onClick={() => handleUpdate(user.email)}
//                 >
//                   Update
//                 </button>
//                 <button
//                   className="btn-delete"
//                   onClick={() => handleDelete(user.email)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserManage;
// import React, { useState, useEffect } from "react";

// const UserManage = () => {
//   const [users, setUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch(
//         "http://localhost:8080/hotelManagement/user/getAll",
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const data = await response.json();

//       setUsers(data);
//       console.log(data);
//     } catch (error) {}
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleUpdate = (email) => {
//     // Handle update user logic
//     console.log(`Update user with email: ${email}`);
//   };

//   const handleDelete = async (email) => {};

//   const handleAddUser = () => {
//     // Handle add user logic
//     console.log("Add new user");
//   };

//   return (
//     <div className="user-manage">
//       <>
//         <div className="user-manage-header">
//           <h1>User Management</h1>
//           <button className="btn-add-user" onClick={handleAddUser}>
//             Add New User
//           </button>
//         </div>
//         <div className="user-manage-search">
//           <input
//             type="text"
//             placeholder="Search by full name..."
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//         </div>
//         <table className="user-manage-table">
//           <thead>
//             <tr>
//               <th>Email</th>
//               <th>Full Name</th>
//               <th>Phone Number</th>
//               <th>Address</th>
//               <th>Role</th>
//               <th>City</th>
//               <th>Country</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.values(users).map((user) => (
//               <tr key={user.id}>
//                 <td>{user.email}</td>
//                 <td>{user.fullName}</td>
//                 <td>{user.phoneNumber}</td>
//                 <td>{user.address}</td>
//                 <td>{user.role}</td>
//                 <td>{user.city}</td>
//                 <td>{user.country}</td>
//                 <td>
//                   <button
//                     className="btn-update"
//                     onClick={() => handleUpdate(user.email)}
//                   >
//                     Update
//                   </button>
//                   <button
//                     className="btn-delete"
//                     onClick={() => handleDelete(user.email)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </>
//     </div>
//   );
// };

// export default UserManage;

// import { useHistory } from "react-router-dom";
// import React, { useState, useEffect } from "react";

// const UserManage = () => {
//   const [users, setUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [error, setError] = useState(null);
//   const history = useHistory();

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch(
//         "http://localhost:8080/hotelManagement/user/getAll",
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           data.msg || "Đã xảy ra lỗi khi lấy dữ liệu người dùng."
//         );
//       }

//       setUsers(data.users);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleUpdate = (id) => {
//     history.push(`/admin/update/${id}`);
//   };

//   const handleDelete = async (userName) => {
//     // Handle delete user logic
//   };

//   const handleAddUser = () => {
//     // Handle add user logic
//     console.log("Add new user");
//   };

//   return (
//     <div className="user-manage">
//       <>
//         <div className="user-manage-header">
//           <h1>User Management</h1>
//           <button className="btn-add-user" onClick={handleAddUser}>
//             Add New User
//           </button>
//         </div>
//         <div className="user-manage-search">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//         </div>
//         {error && <div className="error">{error}</div>}
//         <table className="user-manage-table">
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Email</th>
//               <th>Full Name</th>
//               <th>Phone Number</th>
//               <th>Address</th>
//               <th>Role</th>
//               <th>City</th>
//               <th>Country</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id}>
//                 <td>{user.id}</td>
//                 <td>{user.email}</td>
//                 <td>{user.fullName}</td>
//                 <td>{user.phoneNumber}</td>
//                 <td>{user.address}</td>
//                 <td>{user.role}</td>
//                 <td>{user.city}</td>
//                 <td>{user.country}</td>
//                 <td>
//                   <button
//                     className="btn-update"
//                     onClick={() => handleUpdate(user.id)}
//                   >
//                     Update
//                   </button>
//                   <button
//                     className="btn-delete"
//                     onClick={() => handleDelete(user.userName)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </>
//     </div>
//   );
// };

// export default UserManage;
// import { useHistory } from "react-router-dom";
// import React, { useState, useEffect } from "react";

// const UserManage = () => {
//   const [users, setUsers] = useState([]); // Initialize users as an empty array
//   const [searchTerm, setSearchTerm] = useState("");
//   const [error, setError] = useState(null);
//   const history = useHistory();

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async (searchTerm = "") => {
//     try {
//       const token = localStorage.getItem("token");
//       const url = searchTerm
//         ? `http://localhost:8080/hotelManagement/user/search?keyword=${encodeURIComponent(
//             searchTerm
//           )}`
//         : "http://localhost:8080/hotelManagement/user/getAll";
//       const response = await fetch(url, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           data.msg || "Đã xảy ra lỗi khi lấy dữ liệu người dùng."
//         );
//       }

//       setUsers(data.users || []); // Ensure data.users is an array or fallback to an empty array
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleSearch = (e) => {
//     const encodedSearchTerm = encodeURIComponent(e.target.value);
//     setSearchTerm(e.target.value);
//     console.log(searchTerm);
//     fetchUsers(encodedSearchTerm);
//   };

//   const handleUpdate = (id) => {
//     history.push(`/admin/update/${id}`);
//   };

//   const handleDelete = async (userName) => {
//     // Handle delete user logic
//   };

//   const handleAddUser = () => {
//     // Handle add user logic
//     console.log("Add new user");
//   };

//   return (
//     <div className="user-manage">
//       <>
//         <div className="user-manage-header">
//           <h1>User Management</h1>
//           <button className="btn-add-user" onClick={handleAddUser}>
//             Add New User
//           </button>
//         </div>
//         <div className="user-manage-search">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//         </div>
//         {error && <div className="error">{error}</div>}
//         <table className="user-manage-table">
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Email</th>
//               <th>Full Name</th>
//               <th>Phone Number</th>
//               <th>Address</th>
//               <th>Role</th>
//               <th>City</th>
//               <th>Country</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users?.length > 0 ? (
//               users.map((user) => (
//                 <tr key={user.id}>
//                   <td>{user.id}</td>
//                   <td>{user.email}</td>
//                   <td>{user.fullName}</td>
//                   <td>{user.phoneNumber}</td>
//                   <td>{user.address}</td>
//                   <td>{user.role}</td>
//                   <td>{user.city}</td>
//                   <td>{user.country}</td>
//                   <td>
//                     <button
//                       className="btn-update"
//                       onClick={() => handleUpdate(user.id)}
//                     >
//                       Update
//                     </button>
//                     <button
//                       className="btn-delete"
//                       onClick={() => handleDelete(user.userName)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="9">No users found.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </>
//     </div>
//   );
// };

// export default UserManage;
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";

const UserManage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter(
        (user) =>
          user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.phoneNumber.includes(searchTerm)
      )
    );
  }, [searchTerm, users]);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "http://localhost:8080/hotelManagement/user/getAll",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.msg || "Đã xảy ra lỗi khi lấy dữ liệu người dùng."
        );
      }

      setUsers(data.users);
      setFilteredUsers(data.users); // Initialize filteredUsers with all users
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleUpdate = (id) => {
    history.push(`/admin/update/${id}`);
  };

  const handleDelete = async (userName) => {
    // Handle delete user logic
  };

  const handleAddUser = () => {
    // Handle add user logic
    console.log("Add new user");
  };

  return (
    <div className="user-manage">
      <>
        <div className="user-manage-header">
          <h1>User Management</h1>
          <button className="btn-add-user" onClick={handleAddUser}>
            Add New User
          </button>
        </div>
        <div className="user-manage-search">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        {error && <div className="error">{error}</div>}
        <table className="user-manage-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Role</th>
              <th>City</th>
              <th>Country</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.fullName}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.address}</td>
                <td>{user.role}</td>
                <td>{user.city}</td>
                <td>{user.country}</td>
                <td>
                  <button
                    className="btn-update"
                    onClick={() => handleUpdate(user.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(user.userName)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </div>
  );
};

export default UserManage;
