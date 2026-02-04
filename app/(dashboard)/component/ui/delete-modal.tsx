import Modal from "./modal";
import Button from "@/app/(landing)/component/ui/button";

type TDeleteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteModal = ({isOpen, onClose, onConfirm}: TDeleteModalProps) => {
  return(
    <Modal isOpen={isOpen} onClose={onClose} title="Delete Item">
      <p className="text-center py-3">Are you sure to delete this item ?<br /> If you click delete, it will permanently removed.</p>
      <div className="flex gap-5 mt-5">
        <Button variant="ghost" className="w-full rounded-md" onClick={onClose}>Cancel</Button>
        <Button className="w-full rounded-md" onClick={onConfirm}>Yes, Delete it</Button>
      </div>
    </Modal>
  )
}

export default DeleteModal;