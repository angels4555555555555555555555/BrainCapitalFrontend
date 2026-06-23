"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import NavbarPortal from "@/features/common/NavbarPortal";
import { useCheckUserAuthStatus } from "@/hooks/auth";
import LoadingBackdrop from "@/features/common/LoadingBackdrop";
export default function StaticLayout({ children }) {
  const router = useRouter();
  const { isPending, isError, isSuccess } = useCheckUserAuthStatus();
  useEffect(() => {
    if (!isPending && isError) {
      router.replace("/login");
    }
  }, [isPending, isError, router]);
  if (isPending || (!isError && !isSuccess)) {
    return <LoadingBackdrop />;
  }
  if (isError) return null;
  return (
    <>
      <NavbarPortal />
      <div className="bg-[var(--surface-blue)] h-[calc(100dvh-104px)] w-full">
        {children}
      </div>
    </>
  );
}
