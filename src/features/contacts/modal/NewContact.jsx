import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { useState } from "react";

const defaultForm = {
  id: "",
  name: "",
  email: "",
  company: "",
  role: "recruiter",
  phone: "",
  notes: "",
};

const NewContact = ({
  opened = true,
  onClose = () => {},
  onAdd = () => {},
  onEdit = () => {},
  defaultValue = null,
}) => {
  const [contactForm, setContactForm] = useState(defaultValue ?? defaultForm);

  const isEdit = Boolean(defaultValue);

  // const onChangeName = (event) => {
  //   const value = event.target.placeholder;
  //   setContactForm((prev) => {
  //     const result = { ...prev, name: value };
  //     return result;
  //   });
  // };

  // const onChangeCompany = (event) => {
  //   const value = event.target.value;
  //   setContactForm((prev) => ({ ...prev, company: value }));
  // };

  const onChangeForm = (e) => {
    // const value = e.target.value;
    // const name = e.target.name;
    const { name, value } = e.target;
    setContactForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmit = () => {
    if (isEdit) {
      onEdit(contactForm);
    } else {
      onAdd({ ...contactForm, id: Date.now() });
    }
    onClose();
  };

  return (
    <Modal opened={opened}>
      <div className="border-b border-[#E0E0E0] p-5">
        <h2 className="text-xl font-bold mb-0.5">
          {isEdit ? "Edit" : "New"} contact
        </h2>
        <p className="text-[#7A7A7A] text-sm">
          Who you talk to, and when you last did.
        </p>
      </div>
      <div className="p-5 grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2 col-span-2">
          <label className="text-[#7A7A7A] text-sm font-semibold">
            Full name
          </label>
          <input
            name="name"
            placeholder="Enter full name"
            className="border border-[#E0E0E0] focus:border-[#0066CC] outline-none rounded-full py-2 px-3"
            onChange={onChangeForm}
            value={contactForm.name}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#7A7A7A] text-sm font-semibold">
            Company
          </label>
          <input
            name="company"
            placeholder="Enter company"
            className="border border-[#E0E0E0] focus:border-[#0066CC] outline-none rounded-full py-2 px-3"
            onChange={onChangeForm}
            value={contactForm.company}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#7A7A7A] text-sm font-semibold">Role</label>
          <select
            name="role"
            className="border border-[#E0E0E0] focus:border-[#0066CC] outline-none rounded-full py-2 px-3"
            onChange={onChangeForm}
            value={contactForm.role}
          >
            <option value="recruiter">Recruiter</option>
            <option value="hiringManager">Hiring manager</option>
            <option value="engineer">Engineer</option>
            <option value="referral">Referral</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label name="email" className="text-[#7A7A7A] text-sm font-semibold">
            Email
          </label>
          <input
            name="email"
            placeholder="Enter email"
            className="border border-[#E0E0E0] focus:border-[#0066CC] outline-none rounded-full py-2 px-3"
            onChange={onChangeForm}
            value={contactForm.email}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label name="phone" className="text-[#7A7A7A] text-sm font-semibold">
            Phone
          </label>
          <input
            name="phone"
            placeholder="Enter phone number"
            className="border border-[#E0E0E0] focus:border-[#0066CC] outline-none rounded-full py-2 px-3"
            onChange={onChangeForm}
            value={contactForm.phone}
          />
        </div>
        <div className="flex flex-col gap-2 col-span-2">
          <label className="text-[#7A7A7A] text-sm font-semibold">Notes</label>
          <textarea
            name="notes"
            rows={3}
            placeholder="Enter notes"
            className="border border-[#E0E0E0] focus:border-[#0066CC] outline-none rounded-xl resize-y py-2 px-3"
            onChange={onChangeForm}
            value={contactForm.notes}
          />
        </div>
      </div>

      <div className="p-5 flex items-center justify-end gap-2">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onSubmit}>{isEdit ? "Save" : "Add"}</Button>
      </div>
    </Modal>
  );
};

export default NewContact;
