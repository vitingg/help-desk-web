import { Navigate, Route } from "react-router";

export function RedirectRoutes() {
  return (
    <>
      <Route path="/" element={<Navigate to="/auth/sign-up" replace />} />
      <Route path="/auth" element={<Navigate to="/auth/sign-up" replace />} />
      <Route
        path="/dashboard"
        element={<Navigate to="/dashboard/admin/ticket" replace />}
      />
      <Route
        path="/dashboard/admin"
        element={<Navigate to="/dashboard/admin/ticket" replace />}
      />
    </>
  );
}
