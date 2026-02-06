"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Setting from "../../assets/icons/sidebar/setting";
import Usermanagement from "../../assets/icons/sidebar/usermanagement";
import Klarna from "../../assets/icons/sidebar/klarna";
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
    { name: "SpaceX", route: "/klarna", icon: Klarna },
    { name: "Einstellungen", route: "/setting", icon: Setting },
  ];

  return (
    <>
      {isAdminLoggingOut && <LoadingBackdrop />}
      <div
        className={`w-full md:w-[250px] md:h-[calc(100dvh-104px)] bg-black md:border-t md:border-[#545454] p-4 ${
          openMenu ? "h-fit absolute top-[97px] z-10" : "hidden"
        } md:block`}
      >
        <p className="text-[#6C7278] text-[12px]/[150%] mb-3">HAUPTMENÜ</p>
        <div className="flex flex-col gap-2">
          {options.map(({ name, route, icon: Icon }, index) => {
            const fullPath = `${BASE}${route}`;
            const isActive =
              pathname === fullPath || pathname.startsWith(`${fullPath}/`);
            const colorClass = isActive ? "text-white" : "text-[#ACB5BB]";
            return (
              <Link
                key={fullPath}
                href={fullPath}
                onClick={() => setOpenMenu(false)}
                className={`flex items-center p-[8.5px_12px] gap-3 rounded-md px-2 py-2 hover:bg-[#111] w-fit md:w-full ${
                  isActive
                    ? "bg-[rgba(246,247,250,0.2)] border-1 border-[#6e7179]"
                    : ""
                }
                `}
              >
                <Icon className={`size-[16px] shrink-0 ${colorClass}`} />
                <p className={`text-[14px]/[150%] font-medium ${colorClass}`}>
                  {name}
                </p>
              </Link>
            );
          })}
        </div>
        <div
          onClick={handleLogout}
          className={`flex md:hidden items-center justify-center size-[48px] rounded-full bg-[#FFFFFF29] cursor-pointer my-8`}
        >
          <Logout className={`text-white size-[24px]`} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
