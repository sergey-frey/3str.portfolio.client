import { AdminSidebar } from "@/widgets/admin-sidebar";
import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex px-4 lg:px-10 pt-[100px] pb-10 h-screen w-full">
      <AdminSidebar />
      <main className="flex-1 ml-3 px-10 py-7 bg-neutral-800 rounded-xl">
        {children}
      </main>
    </div>
  );
}
