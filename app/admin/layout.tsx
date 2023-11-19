import { AdminSidebar } from "@/widgets/admin-sidebar";
import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex px-4 lg:px-10 pb-4">
      <AdminSidebar />
      <div className="grow ml-3 px-7 py-7 bg-neutral-800 rounded-xl">
        {children}
      </div>
    </div>
  );
}
