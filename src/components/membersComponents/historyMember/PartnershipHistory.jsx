const PartnershipHistory = ({ member }) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 table-fixed">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-2 py-3">
            Since
          </th>
          <th scope="col">Until</th>
        </tr>
      </thead>
      <tbody className="bg-white border-b hover:bg-gray-50">
        <tr className="bg-white border-b hover:bg-gray-50 ">
          <td className="text-left w-4 px-2 py-3">
            <p>{member.partnership.since}</p>
          </td>
          <td className="text-left">
            <p>{member.partnership.until}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default PartnershipHistory;
