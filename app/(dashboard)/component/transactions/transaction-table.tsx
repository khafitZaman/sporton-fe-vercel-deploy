import priceFormatter from "@/app/utils/price-formatter";
import { FiEye } from "react-icons/fi";

const transactionData = [
  {
    date: "25/01/2026",
    customerName: "John Doe",
    customerContact: "081",
    total: 200000,
    status: "Pending",
  },
  {
    date: "24/01/2026",
    customerName: "Johnny Doel",
    customerContact: "082",
    total: 250000,
    status: "Paid",
  },
  {
    date: "24/01/2026",
    customerName: "Johnan Doey",
    customerContact: "083",
    total: 100000,
    status: "Rejected",
  },
];

type TTransactionModalProps = {
  onViewDetail: () => void;
}

const TransactionTable = ({onViewDetail}: TTransactionModalProps) => {
  const getStatusColor =(status: string) => {
    switch(status.toLowerCase()){
      case "pending":
        return "bg-yellow-100 text-yellow-600 border-yellow-300";
        break;
      case "rejected": 
        return  "bg-red-100 text-red-600 border-red-300";
        break;
      case "paid":
        return "bg-green-100 text-green-600 border-green-300";
        break;
    }
  }
  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-6 py-4 font-semibold">Date</th>
            <th className="px-6 py-4 font-semibold">Customer</th>
            <th className="px-6 py-4 font-semibold">Contact</th>
            <th className="px-6 py-4 font-semibold">Total</th>
            <th className="px-6 py-4 font-semibold">Status</th>
            <th className="px-6 py-4 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((data, index) => (
            <tr key={index} className="border-b border-gray-200 last:border-b-0">
              <td className="px-6 py-4 font-medium">
                {data.date}
              </td>
              <td className="px-6 py-4 font-medium">
                {data.customerName}
              </td>
              <td className="px-6 py-4 font-medium">
                {data.customerContact}
              </td>
              <td className="px-6 py-4 font-medium">
                {priceFormatter(data.total)}
              </td>
              <td className="px-6 py-4 font-medium">
                <span className={`px-6 py-1 rounded-full border text-center w-fit text-sm uppercase ${getStatusColor(data.status)} `}>
                  {data.status}
                </span>
              </td>
              <td className="px-6 py-4 font-medium flex gap-3 text-gray-600 justify-center items-center">
                <button className="flex gap-2 cursor-pointer hover:bg-gray-100 w-fit py-1 px-2 rounded-md items-center" onClick={onViewDetail}>
                  <FiEye size={18} />
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionTable;