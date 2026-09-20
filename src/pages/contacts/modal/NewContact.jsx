import Button from "@/components/Button";
import { useState } from "react";

const NewContact = ({
  opened = true,
  onClose = () => {},
  onAdd = () => {},
}) => {
  const [contactForm, setContactForm] = useState({
    id: "",
    name: "",
    email: "",
    company: "",
    role: "recruiter",
    phone: "",
    notes: "",
  });

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
    onAdd({ ...contactForm, id: Date.now() });
    onClose();
  };

  return (
    opened && (
      <div className="fixed bg-black/30 h-dvh w-full top-0 left-0 flex items-center justify-center">
        <div className="bg-white rounded-xl w-4/12">
          <div className="border-b border-[#E0E0E0] p-5">
            <h2 className="text-xl font-bold mb-0.5">New contact</h2>
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
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#7A7A7A] text-sm font-semibold">
                Role
              </label>
              <select
                name="role"
                className="border border-[#E0E0E0] focus:border-[#0066CC] outline-none rounded-full py-2 px-3"
                onChange={onChangeForm}
              >
                <option value="recruiter">Recruiter</option>
                <option value="hiringManager">Hiring manager</option>
                <option value="engineer">Engineer</option>
                <option value="referral">Referral</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label
                name="email"
                className="text-[#7A7A7A] text-sm font-semibold"
              >
                Email
              </label>
              <input
                name="email"
                placeholder="Enter email"
                className="border border-[#E0E0E0] focus:border-[#0066CC] outline-none rounded-full py-2 px-3"
                onChange={onChangeForm}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                name="phone"
                className="text-[#7A7A7A] text-sm font-semibold"
              >
                Phone
              </label>
              <input
                name="phone"
                placeholder="Enter phone number"
                className="border border-[#E0E0E0] focus:border-[#0066CC] outline-none rounded-full py-2 px-3"
                onChange={onChangeForm}
              />
            </div>
            <div className="flex flex-col gap-2 col-span-2">
              <label className="text-[#7A7A7A] text-sm font-semibold">
                Notes
              </label>
              <textarea
                name="notes"
                rows={3}
                placeholder="Enter notes"
                className="border border-[#E0E0E0] focus:border-[#0066CC] outline-none rounded-xl resize-y py-2 px-3"
                onChange={onChangeForm}
              />
            </div>
          </div>

          <div className="p-5 flex items-center justify-end gap-2">
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={onSubmit}>Add contact</Button>
          </div>
        </div>
      </div>
    )
  );
};

export default NewContact;
