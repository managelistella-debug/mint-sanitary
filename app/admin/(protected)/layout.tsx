import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/cms/session";
import AdminSidebar from "../_components/AdminSidebar";
import { ToastProvider } from "../_components/Toast";

/**
 * The auth boundary. Every page inside (protected) is server-rendered only
 * after the signed session cookie checks out, so no unauthenticated request
 * ever receives admin markup — the API routes re-check independently.
 */
export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!(await isAuthenticated())) redirect("/admin/login");

  return (
    <ToastProvider>
      <div className="flex min-h-full bg-[#FAFAFA]">
        <AdminSidebar />
        <main className="min-w-0 flex-1">
          <div className="mx-auto max-w-[1100px] px-6 py-9 md:px-10 md:py-11">{children}</div>
        </main>
      </div>
    </ToastProvider>
  );
}
