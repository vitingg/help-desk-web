import background from "../../shared/assets/images/Login_Background.png";
import { Form } from "./form/form";
import { Card } from "./form/card";
import { Footer } from "./form/footer";
import { Input } from "../../shared/components/input";
import { Button } from "../../shared/components/button";
import { Icon } from "./form/icon";

export function SignUp() {
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
            title="Crie sua conta"
            description="Informe seu nome, e-mail e senha"
          >
            <Input
              legend="nome"
              placeholder="Digite o nome completo"
              className="mb-4"
            />
            <Input
              legend="email"
              placeholder="exemplo@email.com"
              className="mb-4"
            />
            <Input
              type="password"
              legend="senha"
              placeholder="Digite sua senha"
              className="mb-2"
              helperText="Minimo de 6 digitos"
            />
            <Button size={"5xl"} className="font-medium mt-7">
              Cadastrar
            </Button>
          </Form>
          <Footer
            title="Já tem uma conta?"
            description="Entre agora mesmo"
            buttonValue="Acessar conta"
          />
        </Card>
      </div>
    </div>
  );
}
