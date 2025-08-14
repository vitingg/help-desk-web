import {
  signInSchema,
  type signInSchemaData,
} from "../../shared/schemas/zod-schema";
import { Button } from "../../shared/components/button";
import { Input } from "../../shared/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../../shared/components/form";
import { signIn } from "./services/api-sign-in";
import { Footer } from "./components/footer";
import { useForm } from "react-hook-form";
import { Card } from "./components/card";
import { useAuth } from "../../shared/context/auth-context";
import { useNavigate } from "react-router";

export function SignIn() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<signInSchemaData>({
    resolver: zodResolver(signInSchema),
  });

  async function handleSignIn(data: any) {
    try {
      const response = await signIn(data);
      const user = response.data;

      setUser(user);
      console.log(user);

      switch (user.role) {
        case "ADMIN":
          navigate("/dashboard/admin/tickets");
          break;
        case "TECH":
          navigate("/dashboard/tech");
          break;
        case "CLIENT":
          navigate("/dashboard/client/tickets");
          break;
        default:
          navigate("/");
      }

      reset({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  }

  const emailError = errors.email?.message;
  const passwordError = errors.password?.message;

  return (
    <>
      <Card
        title="Acesse o portal"
        description="Entre usando seu e-mail e senha cadastrados"
      >
        <Form onSubmit={handleSubmit(handleSignIn)}>
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
