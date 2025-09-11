import { Trash, Upload } from "lucide-react";
import { ModalContent } from "../../../modal/modal-content";
import { ModalHeader } from "../../../modal/modal-header";
import { ModalLayout } from "../../../modal/modal-layout";
import { ProfileContent } from "../../../table/table-cell";
import { getInitials } from "../../../../utils/get-initial-name";
import { Input } from "../../../input";
import { Button } from "../../../button";
import { ModalFooter } from "../../../modal/modal-footer";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  editUserSchema,
  type editUserSchemaData,
} from "../../../../schemas/auth/edit-user";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../../../lib/api";
import { Form } from "../../../form";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";
import { useAuth } from "../../../../context/auth-context";

type EditProfileModalProps = {
  onClose?: () => void;
  user: UserProps;
};

type UserProps = {
  id: number;
  username: string;
  email: string;
  profilePicture?: string;
  role: string;
};

export function EditProfileModal({ onClose, user }: EditProfileModalProps) {
  const { isLoading, setUser } = useAuth();
  if (isLoading) {
    return (
      <ModalLayout>
        <ModalHeader>Perfil</ModalHeader>
        <SkeletonLoader />
      </ModalLayout>
    );
  }

  if (!user) {
    return null;
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<editUserSchemaData>({
    resolver: zodResolver(editUserSchema),
    defaultValues: {
      username: user.username,
      email: user.email,
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        username: user.username,
        email: user.email,
      });
    }
  }, [user, reset]);

  const isTech = user.role === "TECH";
  const usernameError = errors.username?.message;
  const emailError = errors.email?.message;

  async function editUser(data: editUserSchemaData) {
    try {
      const response = await api.put(`/clients/${user.id}`, {
        username: data.username,
        email: data.email,
      });
      setUser(response.data);
      toast.success("Usuário editado com sucesso!");
      onClose?.();
    } catch (error) {
      console.log(error);
      toast.error("Erro ao tentar editar usuário!");
    }
  }

  function SkeletonLoader() {
    return (
      <div className="w-96 h-96 p-6">
        <div className="flex">
          <Skeleton circle width={40} height={40} />
          <Skeleton width={120} height={40} />
        </div>
        <Skeleton height={50} />
        <Skeleton height={50} />
        <Skeleton height={50} />
        <Skeleton height={50} />
        <div></div>
      </div>
    );
  }

  function Tech() {
    return <div>é técnico</div>;
  }

  return (
    <ModalLayout>
      <ModalHeader>Perfil</ModalHeader>
      <Form onSubmit={handleSubmit(editUser)}>
        <ModalContent>
          <span className="flex gap-2">
            <div className=" flex items-center justify-center border-black">
              <ProfileContent hasAbbreviation={getInitials(user.username)} />
            </div>
            <div className="flex items-center gap-4">
              <input type="file" id="file" className="hidden" />
              <label
                htmlFor="file"
                className="cursor-pointer bg-gray-500 text-black px-3 py-2 rounded-lg hover:bg-gray-400 "
              >
                <Upload
                  width={16}
                  height={16}
                  className="inline mr-2 font-bold"
                />
                Nova imagem
              </label>
              <button className="px-3 py-3 items-center justify-center p-4 rounded-lg text-red-600 bg-gray-500 hover:bg-gray-400 hover:text-red-700">
                <Trash height={16} width={16} />
              </button>
            </div>
          </span>
        </ModalContent>

        <ModalContent>
          <Input
            legend="NOME"
            className="font-bold"
            {...register("username")}
            isError={!!usernameError}
            helperText={usernameError}
            type="text"
          />

          <Input
            legend="E-MAIL"
            className="font-bold"
            {...register("email")}
            isError={!!emailError}
            helperText={emailError}
            type="email"
          />

          <div className="flex justify-between items-center">
            <Input
              legend="SENHA"
              placeholder="********"
              className="font-bold"
              type="password"
              disabled
            />
            <Button type="button">Alterar</Button>
          </div>
          {isTech && <Tech />}
        </ModalContent>
        <ModalFooter>
          {isSubmitting ? (
            <Button disabled size={"5xl"}>
              Salvando...
            </Button>
          ) : (
            <Button size={"5xl"}>Salvar</Button>
          )}
        </ModalFooter>
      </Form>
    </ModalLayout>
  );
}
