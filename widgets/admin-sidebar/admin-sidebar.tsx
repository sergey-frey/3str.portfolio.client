"use client";

import { usePathname } from "next/navigation";
import { links } from "./constants/links";
import { AdminSidebarLink } from "./ui/admin-sidebar-link";

export const AdminSidebar = () => {
  const pathname = usePathname();
  const getLinkKey = (index: number) => `admin_sidebar_link_${index}`;

  return (
    <aside className="min-h-full p-4 bg-neutral-600 rounded-xl min-w-[250px]">
      <ul className="flex flex-col gap-1">
        {links.map((link, i) => {
          const isActive = pathname === link.href;
          return (
            <li key={getLinkKey(i)}>
              <AdminSidebarLink
                className="block"
                href={link.href}
                isActive={isActive}
              >
                {link.title}
              </AdminSidebarLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
