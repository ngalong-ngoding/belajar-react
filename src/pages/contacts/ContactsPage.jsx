import { Pencil, Search, Trash } from "lucide-react";
import Button from "../../components/Button";
import Avatar from "../../components/Avatar";
import Badge from "../../components/Badge";

const ContactsPage = () => {
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
        <Button>New contact</Button>
      </div>
      <div className="border border-[#E0E0E0] rounded-xl overflow-hidden">
        <div>
          <div className="grid grid-cols-5">
            <h6 className="p-4">Name</h6>
            <h6 className="p-4">Company</h6>
            <h6 className="p-4">Role</h6>
            <h6 className="p-4">Last Touch</h6>
            <h6 className="p-4">Actions</h6>
          </div>
          <div className="grid grid-cols-5 gap-4 bg-white">
            <div className="p-4 flex items-center gap-x-3">
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
            <div className="p-4">Northwind Labs</div>
            <div className="p-4">
              <Badge label="Recruiter" />
            </div>
            <div className="p-4">Sep 12, 2026</div>
            <div className="p-4">
              <div className="flex items-center gap-2">
                <button className="border border-[#E0E0E0] p-2 rounded-full">
                  <Pencil className="text-[#0066CC]" size={16} />
                </button>
                <button className="border border-[#E0E0E0] p-2 rounded-full">
                  <Trash size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {/* <div className="fixed bg-black/30 h-dvh w-full top-0 left-0 flex items-center justify-center">
        <div className="bg-white w-64 h-64">FORM</div>
      </div> */}
    </div>
  );
};

export default ContactsPage;
