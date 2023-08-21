import { useState } from "react";
import members from "../utils/members.json";
import {
  Actions,
  Searchbar,
  EditMember,
  ModalHistory,
  TableMembers,
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
        <div className="members__container ">
          <div className="members__actionSearchbar-container">
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
            <div className="members__container-table">
              <TableMembers
                members={members}
                handleShowLocationModal={handleShowLocationModal}
                handleShowHistoryModal={handleShowHistoryModal}
                startEditing={startEditing}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Members;
