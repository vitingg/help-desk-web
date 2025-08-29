import { useEffect, useState } from "react";
import { Input } from "../../../../shared/components/input";
import { useOutletContext, useParams } from "react-router";
import { getInitials } from "../../../../shared/utils/get-initial-name";
import { api } from "../../../../shared/lib/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../../../../shared/components/form";
import {
  editUserSchema,
  type editUserSchemaData,
} from "../../../../shared/schemas/auth/edit-user";
import { Button } from "../../../../shared/components/button";

type PutTechFormType = {
  selectedHours: string[];
  setSelectedHours: React.Dispatch<React.SetStateAction<string[]>>;
};

interface WorkHours {
  id: number;
  techId: number;
  workTime: string[];
}

interface Service {
  id: number;
  title: string;
  description: string;
  categoryId: number;
  clientId: number;
  techId: number;
  status: "PENDING" | "IN_PROGRESS" | "COMPLETED" | string;
  createdAt: string;
  updatedAt: string;
}

interface Technician {
  createdAt: string;
  email: string;
  id: number;
  profilePicture: string | null;
  role: "TECH";
  servicesAsClient: Service[];
  servicesAsTech: Service[];
  username: string;
  workHours: WorkHours;
}

export function PutTechForm() {
  const { setSelectedHours, selectedHours } =
    useOutletContext<PutTechFormType>();
  const { id } = useParams();
  const [data, setData] = useState<Technician>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<editUserSchemaData>({
    resolver: zodResolver(editUserSchema),
  });

  const usernameError = errors.username?.message;
  const emailError = errors.email?.message;

  // Puxar o usuário
  useEffect(() => {
    async function getTech() {
      try {
        const response = await api.get(`/techs/${id}`);
        setData(response.data.techs);
      } catch (error) {
        console.log(error);
      }
    }
    getTech();
  }, [id]);

  // Puxar o array de workHours
  useEffect(() => {
    if (data?.workHours?.workTime) {
      setSelectedHours(data.workHours.workTime);
    }
  }, [data, setSelectedHours]);

  async function editUser(data: any) {
    const payload = {
      ...data,
      workHours: selectedHours,
    };
    console.log(payload);
    reset();
  }

  return (
    <div className="pt-6">
      <div className="rounded-full p-2 bg-blue-dark size-12 text-gray-600 text-lg flex items-center justify-center">
        {getInitials("C S")}
      </div>

      <Form onSubmit={handleSubmit(editUser)} className="pt-4 space-y-5">
        <Input
          legend="Nome"
          placeholder={data?.username}
          {...register("username")}
          isError={!!usernameError}
          helperText={usernameError}
        />
        <Input
          legend="E-mail"
          placeholder={data?.email}
          {...register("email")}
          isError={!!emailError}
          helperText={emailError}
        />
        <Button size={"5xl"}>Salvar</Button>
      </Form>
    </div>
  );
}
