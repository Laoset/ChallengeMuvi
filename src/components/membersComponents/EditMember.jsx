import { useState } from "react";
const EditMember = ({ setIsEditing, editingMember, onSave }) => {
  const [editedMember, setEditedMember] = useState({ ...editingMember });
  // Convierte la cadena de fecha en un objeto Date
  const birthDate = new Date(editedMember.edad);

  // Formatea la fecha como yyyy-mm-dd (formato ISO 8601)
  const formattedBirthDateISO = `${birthDate.getFullYear()}-${String(
    birthDate.getMonth() + 1
  ).padStart(2, "0")}-${String(birthDate.getDate()).padStart(2, "0")}`;

  const saveChanges = (e) => {
    e.preventDefault();
    onSave(editedMember); // Llama a la función onSave pasando el miembro editado
    setIsEditing(false); // Sale del modo de edición
  };
  //controlador de input
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setEditedMember((prevMember) => ({
      ...prevMember,
      [id]: value,
    }));
  };

  return (
    <form className="editmember__container">
      <div className="editmember__image-container">
        <label className="mb-2">
          <img
            className="editmember__image"
            src={editedMember.profileImage}
            alt="member-image"
          />
          <input type="file" className="hidden" accept="image/*" />
        </label>
        <span className="text-sm text-gray-600">⬆️Change image</span>
      </div>
      <div className="editmember__section-grid-container">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            First name
          </label>
          <input
            type="text"
            id="nombre"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5   "
            value={editedMember.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Last name
          </label>
          <input
            type="text"
            id="apellido"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5   "
            value={editedMember.apellido}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Birthdate
          </label>
          <input
            type="date"
            id="edad"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5   "
            value={formattedBirthDateISO}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            DNI
          </label>
          <input
            type="text"
            id="dni"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5   "
            value={editedMember.dni}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5   "
            value={editedMember.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Phone number
          </label>
          <input
            type="tel"
            id="celular"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5   "
            value={editedMember.celular}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Membership
          </label>
          <input
            type="text"
            id="membership"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5   "
            value={editedMember.membership}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            ID
          </label>
          <input
            type="text"
            id="id"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5   "
            value={editedMember.id}
            onChange={handleInputChange}
            disabled
          />
        </div>
      </div>
      <div className="flex flex-row justify-center gap-10">
        <a
          href="heart-down.svg"
          download
          className="flex flex-row gap-2 mb-6 w-fit"
        >
          <img src="heart-down.svg" alt="medicalCertificate" />
          Medical approval
        </a>
        <label className="flex flex-row gap-2 mb-6 w-fit cursor-pointer">
          <img src="heart-up.svg" alt="medicalCertificate" />
          Upload Medical approval
          <input type="file" className="hidden" accept="image/*" />
        </label>
      </div>
      <div className="editmember__section-grid-container">
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Medical aptitude until
          </label>
          <input
            type="date"
            id="expirationMedicalCertificate"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
            value={editedMember.expirationMedicalCertificate}
            onChange={handleInputChange}
          />
          <div className="flex flex-row mt-6 items-center gap-2">
            <input
              type="checkbox"
              id="healthStatus"
              checked={editedMember.healthStatus}
              value={editedMember.healthStatus}
              onChange={handleInputChange}
              className="input__checkbox-style"
            />
            <span className="text-gray-900 font-medium text-sm">
              Approved for activities
            </span>
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Billing Status
          </label>
          <input
            type="text"
            id="billingStatus"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            value={editedMember.billingStatus}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Current Validity Date
          </label>
          <input
            type="text"
            id="validityDate"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            value={editedMember.validityDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Upcoming Date
          </label>
          <input
            type="text"
            id="upcomingDate"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            value={editedMember.upcomingDate}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <button
          type="submit"
          onClick={saveChanges}
          className="editmember__buttons-style bg-blue-700 hover:bg-blue-800 "
        >
          Submit
        </button>
        <button
          onClick={() => setIsEditing(false)}
          className="editmember__buttons-style bg-red-700 hover:bg-red-800 "
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditMember;
