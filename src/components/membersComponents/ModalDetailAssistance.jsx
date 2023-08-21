const ModalDetailAssistance = ({ setShowModal, member }) => {
  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-50 ">
        <div className="relative w-auto">
          {/*content*/}
          <div className="relative p-4 bg-white rounded-lg shadow">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b">
              <h3 className="text-xl font-semibold text-gray-900">
                Assisted Branches
              </h3>
              <button
                type="button"
                className="text-gray-400 hover:bg-gray-200 rounded-lg p-1.5"
                onClick={() => setShowModal(false)}
              >
                <img src="x.svg" alt="closeIcon" />
              </button>
            </div>
            {/*body*/}
            <div className="flex flex-col items-center p-6 gap-3">
              <div className="flex flex-row gap-10">
                <div className="flex flex-row gap-2">
                  <p className="text-[15px] font-medium text-gray-900">
                    Belgrano branch :
                  </p>
                  <p className="text-[15px]">{member?.accessGym.belgrano}</p>
                </div>
                <div className="flex flex-row gap-2">
                  <p className="text-[15px] font-medium text-gray-900 ">
                    Barracas branch :
                  </p>
                  <p className="text-[15px]">{member?.accessGym.barracas}</p>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <p className="text-[15px] font-medium text-gray-900 ">
                  Avellaneda Branch :
                </p>
                <p className="text-[15px]">{member?.accessGym.avellaneda}</p>
              </div>
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModalDetailAssistance;
