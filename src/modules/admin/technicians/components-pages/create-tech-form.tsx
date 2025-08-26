import { useOutletContext } from "react-router";
import { Input } from "../../../../shared/components/input";
import { useEffect } from "react";
import { api } from "../../../../shared/lib/api";
import { Form } from "../../../../shared/components/form";
import { signUpSchema } from "../../../../shared/schemas/auth/sign-up";
import { zodResolver } from "@hookform/resolvers/zod";
import type { signUpSchemaData } from "../../../../shared/types/auth/sign-up";
import { useForm } from "react-hook-form";

type CreateTechFormType = {
  selectedHours: string[];
};

export function CreateTechForm() {
  const { selectedHours } = useOutletContext<CreateTechFormType>();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<signUpSchemaData>({
    resolver: zodResolver(signUpSchema),
  });

  useEffect(() => {
    // console.log(selectedHours);
    async function createTech() {
      const response = await api.post("/techs");
    }
  }, [selectedHours]);

  function createTech(data: any) {
    console.log(data);
  }

  return (
    <Form className="pt-6 space-y-4" onSubmit={handleSubmit(createTech)}>
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
    </Form>
  );
}
