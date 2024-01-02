import Sidebar from "./Sidebar";
import { MdDeleteOutline } from "react-icons/md";
const Users = () => {
  const user = [
    {
      _id: "#5666745466562h",
      name: "Aditya Singh Rawat",
      email: "rawat.aditya002@gmail.com",
      role: "user",
      subscription: {
        status: "active",
      },
    },

    {
      _id: "#5666748562h",
      name: "Mummy Singh Rawat",
      email: "rawat.aditya002@gmail.com",
      role: "user",
      subscription: {
        status: "active",
      },
    },

    {
      _id: "#566674823562h",
      name: "Mummy Singh Rawat",
      email: "rawat.aditya002@gmail.com",
      role: "user",
      subscription: {
        status: "active",
      },
    },

    {
      _id: "#566436748562h",
      name: "Mummy Singh Rawat",
      email: "rawat.aditya002@gmail.com",
      role: "user",
      subscription: {
        status: "active",
      },
    },
    {
      _id: "#5666248562h",
      name: "Mummy Singh Rawat",
      email: "rawat.aditya002@gmail.com",
      role: "user",
      subscription: {
        status: "active",
      },
    },
  ];


  const updateRoleHandler =(id)=>{
   console.log('Admin',id)
  }
  const deleteUserHandler =(id)=>{
    console.log("Id",id);
   }
  return (
    <div
      className="grid grid-cols-2 min-h-screen "
      style={{ gridTemplateColumns: "5fr 1fr" }}
    >
      <div className="flex flex-col justify-start items-center m-10 overflow-x-auto">
        <div className="text-3xl w-full text-center mb-10 font-mono font-bold">
          <h1>ALL USERS</h1>
        </div>

        <div className=" min-h-screen w-full ml-[5vw] ">
          <table className=" text-center w-full min-h-screen ">
            <thead >
              <tr >
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>SUBSCRIPTION</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody className="border-2" >
              
                {user.map((item) => (
                  <Row key={item._id} item={item} updateRoleHandler={updateRoleHandler} deleteUserHandler={deleteUserHandler}  />
                ))}
              
            </tbody>
          </table>
          <h1 className="font-bold w-full  text-center uppercase">
              ALL Available Users in Database
            </h1>
        </div>
      </div>

      <Sidebar />
    </div>
  );
};

export default Users;

const Row = ({ item,updateRoleHandler,deleteUserHandler }) => {
  return (
    <tr className="border-2 ">
      <td>{item._id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.role}</td>
      <td>{item.subscription.status === "active" ? "Active" : "Not Active"}</td>
      <td>
        <div className="flex justify-around items-center gap-10 p-1">
          <button  onClick={()=>updateRoleHandler(item._id)} className="w-[10vw] bg-red-400 text-white rounded-md  p-2">Change Role</button>
          <button onClick={()=>deleteUserHandler(item._id)} className="text-red-600 text-2xl mr-3">
            <MdDeleteOutline  />
          </button>
        </div>
      </td>
    </tr>
  );
};
