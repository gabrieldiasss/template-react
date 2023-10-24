import { useForm } from "react-hook-form";
import { FormContainer } from "./styles";
import { Input } from "../../components/Input";

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleSubmitForm(data: any) {
    console.log(data);
  }

  return (
    <FormContainer>
      <h2>Formulário da Aplicação</h2>

      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <Input placeholder="Nome" {...register("name")} className="name" />
        <button type="submit">Enviar</button>
      </form>
    </FormContainer>
  );
}
