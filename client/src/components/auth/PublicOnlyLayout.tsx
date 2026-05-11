import { useAuthStore } from "@/features/auth/store";
import { useAuth } from "@clerk/react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export function PublicOnlyLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const { isBootstrapped } = useAuthStore();

  if (!isLoaded) return null;

  // Jika sudah sign in dan bootstrapped, redirect ke home
  if (isSignedIn && isBootstrapped) {
    return <Navigate to="/" replace />;
  }

  // Jika belum sign in, tampilkan outlet (sign-in page)
  if (!isSignedIn) {
    return <Outlet />;
  }

  return null;
}
