"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Setting from "../../assets/icons/sidebar/setting";
import Usermanagement from "../../assets/icons/sidebar/usermanagement";
import Logout from "../../assets/icons/Logout";
import { useAdminLogout } from "@/hooks/auth";
import LoadingBackdrop from "@/features/common/LoadingBackdrop";

const BASE = "/admin";

const Sidebar = ({ openMenu, setOpenMenu }) => {
  const pathname = usePathname();
  const router = useRouter();

  const { mutate: logoutAdmin, isPending: isAdminLoggingOut } = useAdminLogout(
    () => {
      router.push("/login/admin");
    }
  );

  const handleLogout = () => {
    logoutAdmin();
  };

  const options = [
    {
      name: "Benutzerverwaltung",
      route: "/usermanagement",
      icon: Usermanagement,
    },
    { name: "Einstellungen", route: "/setting", icon: Setting },
  ];

  return (
    <>
      {isAdminLoggingOut && <LoadingBackdrop />}
      <div
        className={`dash-sidebar w-full md:w-[250px] md:h-[calc(100dvh-104px)] p-4 ${
          openMenu ? "h-fit absolute top-[97px] z-10" : "hidden"
        } md:block`}
      >
        <p className="dash-sidebar__label mb-3">HAUPTMENÜ</p>
        <div className="flex flex-col gap-2">
          {options.map(({ name, route, icon: Icon }, index) => {
            const fullPath = `${BASE}${route}`;
            const isActive =
              pathname === fullPath || pathname.startsWith(`${fullPath}/`);
            return (
              <Link
                key={fullPath}
                href={fullPath}
                onClick={() => setOpenMenu(false)}
                className={`dash-sidebar__link w-fit md:w-full ${
                  isActive ? "dash-sidebar__link--active" : ""
                }`}
              >
                <Icon className="size-[16px] shrink-0" />
                <p className="font-medium">{name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
