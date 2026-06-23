"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/features/admin/Sidebar";
import NavbarPortal from "@/features/common/NavbarPortal";
import { useCheckAdminAuthStatus } from "@/hooks/auth";
import LoadingBackdrop from "@/features/common/LoadingBackdrop";
export default function StaticLayout({ children }) {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  const { isPending, isError, isSuccess } = useCheckAdminAuthStatus();
  useEffect(() => {
    if (!isPending && isError) {
      router.replace("/login/admin");
    }
  }, [isPending, isError, router]);
  if (isPending || (!isError && !isSuccess)) {
    return <LoadingBackdrop />;
  }
  if (isError) return null;
  return (
    <>
      <NavbarPortal admin openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="flex">
        <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div className="lg:p-[36px] p-4 md:p-6 bg-[var(--surface-blue)] h-[calc(100dvh-104px)] w-full relative">
          {openMenu && (
            <div className="absolute z-2 top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)]"></div>
          )}
          {children}
        </div>
      </div>
    </>
  );
}
