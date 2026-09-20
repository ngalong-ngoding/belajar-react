import { Pencil, Search, Trash } from "lucide-react";
import Button from "../../components/Button";
import Avatar from "../../components/Avatar";
import Badge from "../../components/Badge";
import { useState } from "react";

const ContactsPage = () => {
  const [openModal, setOpenModal] = useState(false);

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
        <Button onClick={() => setOpenModal(true)}>New contact</Button>
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
                Last Touch
              </th>
              <th className="p-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-4">
                <div className="flex items-center gap-x-3">
                  <Avatar name="Dana Whitfield" />
                  <div className="flex flex-col">
                    <span className="text-[#1D1D1F] font-semibold">
                      Dana Whitfield
                    </span>
                    <span className="text-[#7A7A7A] text-sm">
                      dana.w@northwindlabs.io
                    </span>
                  </div>
                </div>
              </td>
              <td className="p-4">Northwind Labs</td>
              <td className="p-4">
                <Badge label="Recruiter" />
              </td>
              <td className="p-4">Sep 12, 2026</td>
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
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed bg-black/30 h-dvh w-full top-0 left-0 flex items-center justify-center">
          <div className="bg-white rounded-xl w-4/12">
            <div className="border-b border-[#E0E0E0] p-5">
              <h2 className="text-xl font-bold mb-0.5">New contact</h2>
              <p className="text-[#7A7A7A] text-sm">
                Who you talk to, and when you last did.
              </p>
            </div>
            <div className="p-5 flex flex-col gap-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-[#7A7A7A] text-sm font-semibold">
                  Full name
                </label>
                <input
                  placeholder="Enter full name"
                  className="border border-[#E0E0E0] active:border-[#0066CC] outline-none rounded-full py-2 px-3"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#7A7A7A] text-sm font-semibold">
                  Company
                </label>
                <input
                  placeholder="Enter company"
                  className="border border-[#E0E0E0] active:border-[#0066CC] outline-none rounded-full py-2 px-3"
                />
              </div>
            </div>

            <div className="p-5 flex items-center justify-end gap-2">
              <Button variant="secondary" onClick={() => setOpenModal(false)}>
                Cancel
              </Button>
              <Button>Add contact</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactsPage;
