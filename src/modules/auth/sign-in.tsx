import background from "../../shared/assets/images/Login_Background.png";
import { Form } from "./form/form";
import { Card } from "../../shared/components/card";
import { Footer } from "./form/footer";

export function SignIn() {
  return (
    <div className="relative h-screen grid grid-cols-2">
      <img
        className="absolute w-full h-full inset-0 object-cover z-[-1]"
        src={background}
      />

      <div className="md:col-start-2 col-span-2 mt-8 md:mt-3 z-10">
        <Card>
          <Form />
          <Footer />
        </Card>
      </div>
    </div>
  );
}
