import { Route, Routes, BrowserRouter } from "react-router";
import { SignIn } from "../../modules/auth/sign-in";
import { SignUp } from "../../modules/auth/sign-up";
import { Layout } from "../../modules/auth/form/layout";

export function Routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Layout />}>
          <Route path="/auth/sign-in" element={<SignIn />} />
          <Route path="/auth/sign-up" element={<SignUp />} />
        </Route>
        <Route path="" />
      </Routes>
    </BrowserRouter>
  );
}
