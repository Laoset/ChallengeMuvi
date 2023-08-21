import React from "react";
import {
  handleWspMessage,
  handleEmailMessage,
} from "../../utils/contactFunctions";
const TableMembers = ({
  members,
  handleShowLocationModal,
  handleShowHistoryModal,
  startEditing,
}) => {
  //calculadora de edad
  const calculateAge = (birthdate) => {
    const birthdateDate = new Date(birthdate);
    const today = new Date();
    const yearsDifference = today.getFullYear() - birthdateDate.getFullYear();

    if (
      today.getMonth() < birthdateDate.getMonth() ||
      (today.getMonth() === birthdateDate.getMonth() &&
        today.getDate() < birthdateDate.getDate())
    ) {
      return yearsDifference - 1;
    } else {
      return yearsDifference;
    }
  };
  return (
    <table className="members__table-container ">
      <thead className="members__thead-container">
        <tr>
          <th className="p-4">
            <div className="flex items-center">
              <input type="checkbox" className="input__checkbox-style" />
            </div>
          </th>
          <th className="px-2 py-3">Members</th>
          <th>Contact Info</th>
          <th>Assistance</th>
          <th>Age</th>
          <th>Membership</th>
          <th>Billing Status</th>
          <th>
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody className="members__tbody-container">
        {members.map((member, index) => (
          <tr key={index} className="members__tbody-tr">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input type="checkbox" className="input__checkbox-style" />
              </div>
            </td>
            <th scope="row" className="px-2 font-medium text-gray-900 ">
              <div className="flex flex-row items-center gap-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src={member.profileImage}
                  alt="member-image"
                />
                <p>{`${member.nombre} ${member.apellido}`}</p>
              </div>
            </th>
            <td className="flex flex-col items-start gap-2 py-2">
              <div className="flex flex-row gap-1">
                <button onClick={handleEmailMessage}>
                  <img src="mail.svg" alt="email" className="h-5" />
                </button>
                <span className="text-sm">{member.email}</span>
              </div>
              <div className="flex flex-row gap-1">
                <button onClick={handleWspMessage}>
                  <img src="brand-whatsapp.svg" alt="email" className="h-5" />
                </button>
                <span className="text-sm">{member.celular}</span>
              </div>
            </td>
            <td className="text-left">
              <span>Total : {member.accessGym.total}</span>
              <div className="flex flex-row gap-1">
                <span className="text-sm">Details</span>
                <button>
                  <img
                    src="zoom-in.svg"
                    alt="email"
                    className="h-5"
                    onClick={() => handleShowLocationModal(member)}
                  />
                </button>
              </div>
            </td>
            <td className="text-left">{calculateAge(member.edad)}</td>
            <td>{member.membership}</td>
            {member.billingStatus === "Active" ? (
              <td className="text-green-600 ">{member.billingStatus}</td>
            ) : member.billingStatus === "Pending" ? (
              <td className="text-yellow-600 ">{member.billingStatus}</td>
            ) : member.billingStatus === "Cancel" ? (
              <td className="text-red-600 ">{member.billingStatus}</td>
            ) : member.billingStatus === "Freeze" ? (
              <td className="text-blue-600 ">{member.billingStatus}</td>
            ) : (
              <td>{member.billingStatus}</td>
            )}
            <td>
              <div className="flex flex-row justify-evenly">
                <button
                  onClick={() => handleShowHistoryModal(member)}
                  className="members__buttons-style"
                >
                  History
                </button>
                <button
                  onClick={() => startEditing(member)}
                  className="members__buttons-style"
                >
                  Edit
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableMembers;
