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
      <Route
        path="/dashboard/tech"
        element={<Navigate to="/dashboard/tech/tickets" replace />}
      />
      <Route
        path="/dashboard/client"
        element={<Navigate to="/dashboard/client/tickets" replace />}
      />
    </>
  );
}
