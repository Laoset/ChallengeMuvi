import { useState } from "react";

const Actions = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100   font-medium rounded-lg text-sm px-3 py-1.5"
        type="button"
      >
        Actions
      </button>
      {isOpen ? (
        <div className=" absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
          <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left text-sm text-gray-700 ">
            Baja de socio
          </button>

          <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left text-sm text-gray-700 ">
            Bloquear acceso
          </button>

          <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left text-sm text-gray-700 ">
            Dar de alta
          </button>

          <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left text-sm text-gray-700 ">
            Aplicar cupon
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Actions;
