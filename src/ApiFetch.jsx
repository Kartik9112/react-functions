// import React, { useState } from "react";

// const ApiFetch = () => {
//   const [apidata, setApidata] = useState([]);

//   const fetchUsers = () => {
//     fetch("https://api.artic.edu/api/v1/artworks?page=2&limit=100")
//       .then((res) => res.json())
//       .then((data) => setApidata(data.data))
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <button
//         onClick={fetchUsers}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-6"
//       >
//         Load All Users
//       </button>

//       <div className="bg-violet-400 py-10 px-4">
//         <h1 className="text-3xl font-bold text-center text-white mb-8">Users</h1>
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
//           {apidata.map((user) => (
//             <div
//               key={user.id}
//               className="bg-white rounded-lg shadow-md overflow-hidden"
//             >
//               <div className="p-4">
//                 <h2 className="text-xl font-bold text-gray-800">{user.api_model}</h2>
//                 <p className="text-gray-600">Username: {user.title}</p>
                
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApiFetch;

import React, { useEffect,useState } from 'react'

function ApiFetch() {
  const [users,setUsers] = useState([])
  const [inputdata,setInput] = useState('')
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
    console.log("Data Fetched Sucessfully")
  },[])
  return (
    <div>
      <ul>
        {users.map(user=> <li key={user.id}>{user.name} </li>)}
        <input type="text" className='border' value = {inputdata} onChange={(e)=>setInput(e.target.value)} />
      </ul>
    </div>
  )
}

export default ApiFetch