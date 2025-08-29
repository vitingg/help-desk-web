import { useOutletContext } from "react-router";
import { Input } from "../../../../shared/components/input";
import { api } from "../../../../shared/lib/api";
import { Form } from "../../../../shared/components/form";
import { signUpSchema } from "../../../../shared/schemas/auth/sign-up";
import { zodResolver } from "@hookform/resolvers/zod";
import type { signUpSchemaData } from "../../../../shared/types/auth/sign-up";
import { useForm } from "react-hook-form";
import { Button } from "../../../../shared/components/button";

type CreateTechFormType = {
  selectedHours: string[];
  setSelectedHours: React.Dispatch<React.SetStateAction<string[]>>;
};

export function CreateTechForm() {
  const { selectedHours, setSelectedHours } =
    useOutletContext<CreateTechFormType>();

  const { register, handleSubmit, reset } = useForm<signUpSchemaData>({
    resolver: zodResolver(signUpSchema),
  });

  async function createTech(data: any) {
    const payload = {
      ...data,
      workHours: selectedHours,
    };

    try {
      const response = await api.post("/techs", payload);
      console.log(response.data);

      reset({
        username: "",
        email: "",
        password: "",
      });
      setSelectedHours([]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form className="pt-6 space-y-5" onSubmit={handleSubmit(createTech)}>
      <Input
        legend="Nome"
        placeholder="Nome completo"
        {...register("username")}
      />
      <Input
        legend="E-mail"
        placeholder="exemplo@mail.com"
        {...register("email")}
      />
      <Input
        legend="Senha"
        placeholder="Defina a senha de acesso"
        helperText="Mínimo de 6 dígitos"
        {...register("password")}
      />
      <Button>Salvar</Button>
    </Form>
  );
}
