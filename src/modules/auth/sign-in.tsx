import { Card } from "./components/card";
import { Footer } from "./components/footer";
import { Input } from "../../shared/components/input";
import { Button } from "../../shared/components/button";
import { Form } from "../../shared/components/form";
import { useForm } from "react-hook-form";
import { signInSchema } from "../../shared/schemas/zod-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import type { singInSchemaData } from "../../shared/schemas/zod-schema";

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<singInSchemaData>({
    resolver: zodResolver(signInSchema),
  });

  function createUser(data: any) {
    console.log(data);
  }

  const emailError = errors.email?.message;
  const passwordError = errors.password?.message;

  return (
    <>
      <Card title="Acesse o portal" description="Acesse o portal">
        <Form onSubmit={handleSubmit(createUser)}>
          <Input
            legend="email"
            placeholder="exemplo@email.com"
            className="mb-4"
            type="email"
            {...register("email")}
            isError={!!emailError}
            helperText={emailError}
          />
          <Input
            type="password"
            legend="senha"
            placeholder="Digite sua senha"
            className="mb-4"
            {...register("password")}
            isError={!!passwordError}
            helperText={passwordError}
          />
          <Button size={"5xl"} className="font-medium mt-7">
            Entrar
          </Button>
        </Form>
      </Card>

      <Card title="Ainda não tem uma conta?" description="Cadastre agora mesmo">
        <Footer buttonValue="Criar conta" />
      </Card>
    </>
  );
}
