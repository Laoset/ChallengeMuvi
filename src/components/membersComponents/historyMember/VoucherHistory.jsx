const VoucherHistory = ({ member }) => {
  return (
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
            Voucher
          </th>
          <th scope="col">Discount</th>
          <th scope="col">Since</th>
          <th scope="col">Until</th>
          <th scope="col">
            <span className="sr-only">Download</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
        <tr className="bg-white border-b hover:bg-gray-50 ">
          <td className="w-4 p-4">
            <div className="flex items-center">
              <input
                id="checkbox-table-search-1"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="checkbox-table-search-1" className="sr-only">
                checkbox
              </label>
            </div>
          </td>
          <td className="font-medium text-gray-900 ">
            <p>{member.voucher.name}</p>
          </td>
          <td className="text-left">
            <p>{member.voucher.discount}%</p>
          </td>
          <td className="text-left">
            <p>{member.voucher.discountSince}</p>
          </td>
          <td className="text-left">
            <p>{member.voucher.discountUntil}</p>
          </td>
          <td>
            <div className="flex flex-row justify-evenly">
              <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline ">
                Download
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default VoucherHistory;
