import { useEffect, useState } from "react";
import members from "../utils/members.json";
import {
  Actions,
  Searchbar,
  EditMember,
  ModalHistory,
} from "../components/membersComponents";
import ModalDetailAssistance from "../components/membersComponents/ModalDetailAssistance";
const Members = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  //modal for locations
  const [showModal, setShowModal] = useState(false);
  const [modalMember, setModalMember] = useState(null);
  //modal for history
  const [showModalHistory, setShowModalHistory] = useState(false);

  const startEditing = (member) => {
    setEditingMember(member);
    setIsEditing(true);
  };
  //modal locations
  const handleShowLocationModal = (member) => {
    setModalMember(member);
    setShowModal(true);
  };
  //modal history
  const handleShowHistoryModal = (member) => {
    setModalMember(member);
    setShowModalHistory(true);
  };
  console.log(editingMember);
  // Función para guardar cambios al editar
  const saveChanges = (updatedMember) => {
    members.forEach((member, index) => {
      if (member.id === updatedMember.id) {
        members[index] = updatedMember; // Actualiza el miembro en el array members
      }
    });

    setIsEditing(false);
    setEditingMember(null);
  };

  return (
    <>
      {isEditing ? (
        <EditMember
          setIsEditing={setIsEditing}
          setEditingMember={setEditingMember}
          editingMember={editingMember}
          onSave={saveChanges}
        />
      ) : (
        <div className="relative overflow-x-auto ">
          <div className="shadow-md flex items-center justify-between pb-4 bg-white ">
            <Actions />
            <Searchbar />
          </div>

          <div>
            {showModal ? (
              <ModalDetailAssistance
                member={modalMember}
                setShowModal={setShowModal}
              />
            ) : null}
            {showModalHistory ? (
              <ModalHistory
                member={modalMember}
                setShowModalHistory={setShowModalHistory}
              />
            ) : null}
            <table className="w-full text-sm text-left text-gray-500 table-auto">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Members
                  </th>
                  <th scope="col">Contact Info</th>
                  <th scope="col">Assistance</th>
                  <th scope="col">Age</th>
                  <th scope="col">Membership</th>
                  <th scope="col">Billing Status</th>
                  <th scope="col">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                {members.map((member, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b hover:bg-gray-50 "
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
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
                        <button>
                          <img src="mail.svg" alt="email" className="h-5" />
                        </button>
                        <span className="text-sm">{member.contacto.email}</span>
                      </div>
                      <div className="flex flex-row gap-1">
                        <button>
                          <img
                            src="brand-whatsapp.svg"
                            alt="email"
                            className="h-5"
                          />
                        </button>
                        <span className="text-sm">
                          {member.contacto.celular}
                        </span>
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
                    <td className="text-left">{member.edad}</td>
                    <td>{member.membership}</td>
                    {member.billingStatus === "Active" ? (
                      <td className="text-green-600 ">
                        {member.billingStatus}
                      </td>
                    ) : member.billingStatus === "Pending" ? (
                      <td className="text-yellow-600 ">
                        {member.billingStatus}
                      </td>
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
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline "
                        >
                          History
                        </button>
                        <button
                          onClick={() => startEditing(member)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline "
                        >
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Members;
