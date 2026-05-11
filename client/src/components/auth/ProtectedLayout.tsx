import { useAuthStore } from "@/features/auth/store";
import { useAuth } from "@clerk/react";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const { isBootstrapped, status } = useAuthStore();

  // Tunggu Clerk selesai load dan auth sudah di-sync
  if (!isLoaded || (isSignedIn && (!isBootstrapped || status === "loading"))) {
    return null;
  }

  // Jika belum sign in, redirect ke sign-in
  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return <Outlet />;
}


