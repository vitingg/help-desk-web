import { Route } from "react-router";
import { Layout } from "../../modules/auth/components/layout";
import { SignUp } from "../../modules/auth/sign-up";
import { SignIn } from "../../modules/auth/sign-in";
import { Fragment } from "react";

export function AuthRoutes() {
  return (
    <Fragment>
      <Route path="/auth" element={<Layout />}>
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Fragment>
  );
}
