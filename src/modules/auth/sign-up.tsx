import background from "../../shared/assets/images/Login_Background.png";
import { Card } from "./form/card";
import { Footer } from "./form/footer";
import { Input } from "../../shared/components/input";
import { Button } from "../../shared/components/button";
import { Icon } from "./form/icon";
import { Layout } from "./form/layout";

export function SignUp() {
  return (
    <Layout>
      <Icon />
      <Card title="Acesse o portal" description="Acesse o portal">
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
      </Card>

      <Card title="Ainda não tem uma conta?" description="Cadastre agora mesmo">
        <Footer buttonValue="Criar conta" />
      </Card>
    </Layout>
  );
}
