import {
  VoucherHistory,
  EditingMemberHistory,
  PartnershipHistory,
  PaymentHistory,
} from "./historyMember";
const ModalHistory = ({ setShowModalHistory, member }) => {
  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-50">
        <div className="relative w-[55rem] bg-white">
          {/* <!-- Payment Modal--> */}
          <div className="flex flex-col gap-10 relative p-4 bg-white rounded-lg shadow ">
            <div>
              {/* header*/}
              <div className="flex justify-between items-center pb-4 mb-4  border-b">
                <h3 className="text-xl font-semibold text-gray-900">
                  Payment History
                </h3>
                <button
                  type="button"
                  className="text-gray-400 hover:bg-gray-200 rounded-lg p-1.5"
                  onClick={() => setShowModalHistory(false)}
                >
                  <img src="x.svg" alt="closeIcon" />
                </button>
              </div>
              {/*body*/}
              <div className="flex flex-col items-center max-h-[300px] overflow-y-auto">
                <PaymentHistory member={member} />
              </div>
            </div>
          </div>
          {/* <!-- Voucher Modal--> */}
          <div className="flex flex-col gap-10 relative p-4 bg-white rounded-lg shadow ">
            <div>
              {/* header */}
              <div className="flex justify-between items-center pb-4 mb-4 border-b ">
                <h3 className="text-xl font-semibold text-gray-900">
                  Voucher History
                </h3>
              </div>
              {/*body*/}
              <div className="flex flex-col items-center max-h-[300px] overflow-y-auto">
                <VoucherHistory member={member} />
              </div>
            </div>
          </div>
          {/* <!-- Partnership and Edition  Modal--> */}
          <div className="flex flex-row w-full">
            {/* <!-- Partnership  Modal--> */}
            <div className="flex flex-col gap-10 relative p-4 bg-white shadow w-2/4">
              <div>
                {/* header */}
                <div className="flex justify-between items-center pb-4 mb-4 border-b ">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Partnership history
                  </h3>
                </div>
                {/*body*/}
                <div className="flex flex-col items-center max-h-[300px] overflow-y-auto">
                  <PartnershipHistory member={member} />
                </div>
              </div>
            </div>
            {/* <!-- Edition  Modal--> */}
            <div className="flex flex-col gap-10 relative p-4 bg-white shadow w-2/4">
              <div>
                {/* header */}
                <div className="flex justify-between items-center pb-4 mb-4 border-b ">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Edition history
                  </h3>
                </div>
                {/*body*/}
                <div className="flex flex-col items-center max-h-[300px] overflow-y-auto">
                  <EditingMemberHistory member={member} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModalHistory;
