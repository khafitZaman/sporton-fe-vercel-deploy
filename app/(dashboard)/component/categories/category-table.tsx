import { getImageUrl } from "@/app/lib/api";
import { Category } from "@/app/types";
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

type TCategoryTableProps = {
  categories: Category[];
  onDelete: (id: string) => void;
  onEdit: (category: Category) => void;
}

const CategoriesTable = ({categories, onDelete, onEdit}: TCategoryTableProps) => {
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
          {categories.map((data) => (
            <tr key={data._id} className="border-b border-gray-200 last:border-b-0">
              <td className="px-6 py-4 font-medium">
                <div className="flex gap-2 items-center">
                  <div className="aspect-square bg-gray-200 rounded-md">
                    <Image src={getImageUrl(data.imageUrl)} alt={data.name} width={52} height={52} className="aspect-square object-contain" />
                  </div>
                  <span>{data.name}</span>
                </div>
              </td>
              <td className="px-6 py-4 font-medium">
                {data.description}
              </td>
              <td className="px-6 py-4 font-medium flex gap-3 text-gray-600 justify-center items-center">
                <button onClick={()=> onEdit?.(data)} className="cursor-pointer">
                  <FiEdit2 size={20} />
                </button>
                <button onClick={()=> onDelete?.(data._id)} className="cursor-pointer">
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