import { ChangeEvent, FormEvent, useState } from "react";

import { IPost } from "../../types";
import { Input, FormContainer, Button } from "./style";

interface FormProps {
  createNewPost: (post: IPost) => void;
}

export function Form({ createNewPost }: FormProps) {
  const [formData, setFormData] = useState<IPost>({
    category: "",
    title: "",
    author: "",
    date: "",
  });
  const [isSubmitting, setIsSubmiting] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setIsSubmiting(true);
    // simulando chamada api
    setTimeout(() => {
      createNewPost(formData);
      setFormData({ category: "", title: "", author: "", date: "" });
      setIsSubmiting(false);
    }, 2000);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const { title, author, category, date } = formData;

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Título"
        name="title"
        onChange={handleInputChange}
        value={title}
      />

      <Input
        type="text"
        placeholder="Autor"
        name="author"
        onChange={handleInputChange}
        value={author}
      />

      <Input
        type="text"
        placeholder="Categoria"
        name="category"
        onChange={handleInputChange}
        value={category}
      />

      <Input
        type="text"
        placeholder="Data"
        name="date"
        onChange={handleInputChange}
        value={date}
      />

      <Button variant="primary" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Publicar Post"}
      </Button>
    </FormContainer>
  );
}
