import { useState } from "react";

const Actions = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
        type="button"
      >
        Actions
      </button>
      {isOpen ? (
        <div className=" absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
          <button className="actions__buttons-style">
            Downgrade Membership
          </button>

          <button className="actions__buttons-style">Block Access</button>

          <button className="actions__buttons-style">Register</button>

          <button className="actions__buttons-style">Apply Coupon</button>
        </div>
      ) : null}
    </div>
  );
};

export default Actions;
