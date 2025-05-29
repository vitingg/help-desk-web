import { Card } from "./components/card";
import { Footer } from "./components/footer";
import { Input } from "../../shared/components/input";
import { Button } from "../../shared/components/button";

export function SignIn() {
  return (
    <>
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
    </>
  );
}
