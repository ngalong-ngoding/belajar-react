import Button from "@/components/Button";
import Modal from "@/components/Modal";

const DeleteContact = ({
  opened = false,
  onClose = () => {},
  onDelete = () => {},
}) => {
  return (
    <Modal opened={opened} className="p-5 w-3/12">
      <h2 className="text-base font-semibold text-[#1D1D1F] mb-2">
        Delete this contact?
      </h2>
      <p className="text-sm text-[#7A7A7A] mb-3">
        Dana Whitfield at Northwind Labs will be removed from your list.
      </p>
      <div className="flex items-center justify-end gap-2">
        <Button variant="secondary" onClick={onClose}>
          Keep
        </Button>
        <Button variant="destruction" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteContact;
