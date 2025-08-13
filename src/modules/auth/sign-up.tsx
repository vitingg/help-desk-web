import { Card } from "./components/card";
import { Footer } from "./components/footer";
import { Input } from "../../shared/components/input";
import { Button } from "../../shared/components/button";
import { Form } from "../../shared/components/form";
import { useForm } from "react-hook-form";
import { signUpSchema } from "../../shared/schemas/zod-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import type { signUpSchemaData } from "../../shared/schemas/zod-schema";
import { signUp } from "./services/api-sign-up";

export function SignUp() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<signUpSchemaData>({
    resolver: zodResolver(signUpSchema),
  });

  const usernameError = errors.username?.message;
  const emailError = errors.email?.message;
  const passwordError = errors.password?.message;

  async function createUser(data: any) {
    const creatingAccount = await signUp(data);
    console.log(creatingAccount.data);

    reset({
      username: "",
      email: "",
      password: "",
    });
  }

  return (
    <>
      <Card
        title="Acesse o portal"
        description="Informe seu nome, e-mail e senha"
      >
        <Form onSubmit={handleSubmit(createUser)}>
          <Input
            legend="nome"
            placeholder="Digite o nome completo"
            className="mb-4"
            type="text"
            isError={!!usernameError}
            helperText={usernameError}
            {...register("username")}
          />
          <Input
            legend="email"
            placeholder="exemplo@email.com"
            className="mb-4"
            type="email"
            isError={!!emailError}
            helperText={emailError}
            {...register("email")}
          />
          <Input
            type="password"
            legend="senha"
            placeholder="Digite sua senha"
            className="mb-2"
            isError={!!passwordError}
            helperText={passwordError}
            {...register("password")}
          />
          <Button size={"5xl"} className="font-medium mt-7">
            Cadastrar
          </Button>
        </Form>
      </Card>

      <Card title="Ainda não tem uma conta?" description="Cadastre agora mesmo">
        <Footer buttonValue="Criar conta" />
      </Card>
    </>
  );
}
