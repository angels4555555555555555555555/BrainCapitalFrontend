"use client";
import React from "react";
import Logout from "../../assets/icons/Logout";
import BurgerIcon from "../../assets/icons/BurgerIcon";
import BackArrow from "../../assets/icons/backArrow";
import { useRouter, usePathname } from "next/navigation";
import { X } from "lucide-react";
import { useAdminLogout, useUserLogout } from "@/hooks/auth";
import LoadingBackdrop from "@/features/common/LoadingBackdrop";

const NavbarPortal = ({ admin = false, openMenu, setOpenMenu }) => {
  const router = useRouter();
  const pathname = usePathname();

  const { mutate: logoutAdmin, isPending: isAdminLoggingOut } = useAdminLogout(
    () => {
      router.push("/login/admin");
    }
  );

  const { mutate: logoutUser, isPending: isUserLoggingOut } = useUserLogout(
    () => {
      router.push("/login");
    }
  );

  const handleLogout = () => {
    if (admin) {
      logoutAdmin();
    } else {
      logoutUser();
    }
  };

  return (
    <>
      {(isAdminLoggingOut || isUserLoggingOut) && <LoadingBackdrop />}

      <div className="px-[24.5px_16px] py-2 flex justify-between items-center">
        {admin ? (
          <img src="/logo.png" alt="" className="w-20"/>
        ) : (
          <img src="/logo.png" alt="" className="w-20"/>
        )}

        {!admin ? (
          <div className="flex gap-3 items-center">
            {pathname !== "/user" && (
              <div
                className="flex items-center justify-center p-3 rounded-full bg-black cursor-pointer size-[48px]"
                onClick={() => router.back()}
              >
                <BackArrow className="text-white size-[26px]" />
              </div>
            )}
            <div
              className="flex items-center justify-center p-3 rounded-full bg-black cursor-pointer size-[48px]"
              onClick={handleLogout}
            >
              <Logout className="text-white size-[26px]" />
            </div>
          </div>
        ) : (
          <>
            <div className="hidden md:flex items-center justify-center p-3 rounded-full bg-black cursor-pointer">
              <Logout onClick={handleLogout} className="text-white size-[26px]" />
            </div>
            <div className="md:hidden p-3 rounded-full bg-black flex items-center justify-center size-[48px] cursor-pointer">
              {openMenu ? (
                <X
                  onClick={() => setOpenMenu(!openMenu)}
                  className="text-white size-[24px]"
                />
              ) : (
                <BurgerIcon
                  onClick={() => setOpenMenu(!openMenu)}
                  className="text-white size-[24px]"
                />
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default NavbarPortal;
