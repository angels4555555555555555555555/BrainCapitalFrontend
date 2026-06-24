"use client";
import React from "react";
import Logout from "../../assets/icons/Logout";
import BurgerIcon from "../../assets/icons/BurgerIcon";
import BackArrow from "../../assets/icons/backArrow";
import { useRouter, usePathname } from "next/navigation";
import { X } from "lucide-react";
import { useAdminLogout, useUserLogout } from "@/hooks/auth";
import LoadingBackdrop from "@/features/common/LoadingBackdrop";
import Image from "next/image";

const NavbarPortal = ({ admin = false, openMenu, setOpenMenu }) => {
  const router = useRouter();
  const pathname = usePathname();

  const { mutate: logoutAdmin, isPending: isAdminLoggingOut } = useAdminLogout(
    () => {
      router.push("/login/admin");
    },
  );

  const { mutate: logoutUser, isPending: isUserLoggingOut } = useUserLogout(
    () => {
      router.push("/login");
    },
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

      <div className="dash-topbar">
        <div className="p-2 rounded-md bg-[var(--gold)]">
          <Image src="/Logo.png" width={1219} height={358} alt="Brain Capital Asset" className="w-40 h-auto" priority />
        </div>
        <div className="flex items-center gap-2">
          {!admin ? (
            <div className="flex gap-3 items-center">
              {pathname !== "/user" && (
                <div className="dash-icon-btn" onClick={() => router.back()}>
                  <BackArrow className="size-[22px]" />
                </div>
              )}
              <div className="dash-icon-btn" onClick={handleLogout}>
                <Logout className="size-[22px]" />
              </div>
            </div>
          ) : (
            <>
              <div className="hidden md:flex dash-icon-btn">
                <Logout onClick={handleLogout} className="size-[22px]" />
              </div>
              <div className="md:hidden dash-icon-btn">
                {openMenu ? (
                  <X
                    onClick={() => setOpenMenu(!openMenu)}
                    className="size-[22px]"
                  />
                ) : (
                  <BurgerIcon
                    onClick={() => setOpenMenu(!openMenu)}
                    className="size-[22px]"
                  />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavbarPortal;
