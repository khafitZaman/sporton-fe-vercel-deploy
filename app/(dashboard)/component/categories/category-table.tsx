import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const categroyData = [
  {
    category: "Running",
    description: "lorem ipsum",
    imageUrl: "/images/categories/category-running.svg",
  },
  {
    category: "Football",
    description: "lorem ipsum",
    imageUrl: "/images/categories/category-football.svg",
  },
  {
    category: "Tennis",
    description: "lorem ipsum",
    imageUrl: "/images/categories/category-tennis.svg",
  }
]
const CategoriesTable = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-6 py-4 font-semibold">Category</th>
            <th className="px-6 py-4 font-semibold">Description</th>
            <th className="px-6 py-4 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {categroyData.map((data, index) => (
            <tr key={index} className="border-b border-gray-200 last:border-b-0">
              <td className="px-6 py-4 font-medium">
                <div className="flex gap-2 items-center">
                  <div className="aspect-square bg-gray-200 rounded-md">
                    <Image src={data.imageUrl} alt={data.category} width={52} height={52} className="aspect-square object-contain" />
                  </div>
                  <span>{data.category}</span>
                </div>
              </td>
              <td className="px-6 py-4 font-medium">
                {data.description} units
              </td>
              <td className="px-6 py-4 font-medium flex gap-3 text-gray-600 justify-center items-center">
                <button>
                  <FiEdit2 size={20} />
                </button>
                <button>
                  <FiTrash2 size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CategoriesTable;