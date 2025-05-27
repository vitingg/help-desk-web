import background from "../../shared/assets/images/Login_Background.png";
import { Form } from "./form/form";
import { Card } from "./form/card";
import { Footer } from "./form/footer";
import { Input } from "../../shared/components/input";
import { Button } from "../../shared/components/button";
import { Icon } from "./form/icon";

export function SignIn() {
  return (
    <div className="relative md:min-h-screen grid grid-cols-2 md:grid-cols-2 ">
      <img
        className="absolute w-full h-full inset-0 object-cover z-[-1]"
        src={background}
      />

      <div className=" md:col-start-2 col-span-2 mt-8 md:mt-3 z-10">

        <Card>
          <Icon />
          <Form
            title="Acesse o portal"
            description="Entre usando seu e-mail e senha cadastrados"
          >
            <Input
              legend="email"
              placeholder="exemplo@email.com"
              className="mb-4"
            />
            <Input
              type="password"
              legend="senha"
              placeholder="Digite sua senha"
              className="mb-4"
            />
            <Button size={"5xl"} className="font-medium mt-7">
              Entrar
            </Button>
          </Form>
          <Footer
            title="Ainda não tem uma conta?"
            description="Cadastre agora mesmo"
            buttonValue="Criar conta"
          />
        </Card>
      </div>
    </div>
  );
}
