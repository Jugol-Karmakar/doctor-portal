import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`https://doctor-portal-server-green.vercel.app/user/admin/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success("Make Admin Successfully!!");
      });
  };

  const handleDeleteUser = () => {
    const sure = window.confirm("Are you sure want to delete user?");
    if (sure) {
      fetch(`https://doctor-portal-server-green.vercel.app/user/${email}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            refetch();
            toast.success("User delete successfully !!");
          }
          console.log(data);
        });
    }
  };

  return (
    <tr>
      <td>
        <FaUserAlt className="text-green-600" />
      </td>
      <td>{email}</td>
      <td>
        {role !== "admin" ? (
          <button
            onClick={makeAdmin}
            className="btn btn-xs bg-green-500 border-0"
          >
            Make Admin
          </button>
        ) : (
          <p className="text-green-500 font-bold">Already Admin</p>
        )}
      </td>
      <td>
        <button
          onClick={handleDeleteUser}
          className="btn btn-xs bg-red-600 border-0"
        >
          Delete User
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
