import { Pencil, Search, Trash } from "lucide-react";
import Button from "@/components/Button";
import Avatar from "@/components/Avatar";
import Badge from "@/components/Badge";
import { useState } from "react";
import NewContact from "./modal/NewContact";

// [
//   {
//     name: "Dana Whitfield",
//     email: "dana.w@northwindlabs.io",
//     company: "Northwind Labs",
//     role: "recruiter",
//     phone: "08123",
//     notes: "",
//   }
// ];

const ContactsPage = () => {
  const [contactList, setContactList] = useState([]);
  const [openedModal, setOpenedModal] = useState(false);

  const closeModal = () => setOpenedModal(false);

  const onAddContact = (contact) => {
    setContactList((prev) => {
      return [...prev, contact];
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2 bg-white border border-[#E0E0E0] rounded-lg py-2 px-3 w-90">
          <Search className="text-[#7A7A7A] size-4 rotate-90" />
          <input
            placeholder="Search name, company or email"
            className="outline-none w-full"
          />
        </div>
        <Button onClick={() => setOpenedModal(true)}>New contact</Button>
      </div>
      {/* Table */}
      <div className="border border-[#E0E0E0] rounded-xl overflow-hidden">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="">
              <th scope="col" className="p-4 font-semibold">
                Name
              </th>
              <th scope="col" className="p-4 font-semibold">
                Company
              </th>
              <th scope="col" className="p-4 font-semibold">
                Role
              </th>
              <th scope="col" className="p-4 font-semibold">
                Phone Number
              </th>
              <th className="p-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contactList?.length > 0 ? (
              contactList.map(({ id, name, email, company, role, phone }) => {
                return (
                  <tr key={id} className="bg-white">
                    <td className="p-4">
                      <div className="flex items-center gap-x-3">
                        <Avatar name={name} />
                        <div className="flex flex-col">
                          <span className="text-[#1D1D1F] font-semibold">
                            {name}
                          </span>
                          <span className="text-[#7A7A7A] text-sm">
                            {email}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">{company}</td>
                    <td className="p-4">
                      <Badge label={role} className="capitalize" />
                    </td>
                    <td className="p-4">{phone}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button className="border border-[#E0E0E0] p-2 rounded-full">
                          <Pencil className="text-[#0066CC]" size={16} />
                        </button>
                        <button className="border border-[#E0E0E0] p-2 rounded-full">
                          <Trash size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="bg-white">
                <td colSpan={5} className="p-4 text-center text-[#7A7A7A]">
                  Data sedang tidak ada
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <NewContact
        opened={openedModal}
        onClose={closeModal}
        onAdd={onAddContact}
      />
    </div>
  );
};

export default ContactsPage;
