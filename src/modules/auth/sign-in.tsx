import background from "../../shared/assets/images/Login_Background.png";
import { Card } from "./form/card";
import { Footer } from "./form/footer";
import { Input } from "../../shared/components/input";
import { Button } from "../../shared/components/button";
import { Icon } from "./form/icon";
import { Layout } from "./form/layout";

export function SignIn() {
  return (
    <Layout >
      <Card title="Acesse o portal" description="Acesse o portal">
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
      </Card>

      <Card title="Ainda não tem uma conta?" description="Cadastre agora mesmo">
        <Footer buttonValue="Criar conta" />
      </Card>
    </Layout>
  );
}
