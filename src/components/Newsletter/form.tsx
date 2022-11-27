import { useForm, SubmitHandler } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";

import {
  NewsletterButtonContainer,
  NewsletterFormContainer,
  NewsletterInputContainer,
} from "./container";

type Inputs = {
  email: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

    <NewsletterFormContainer onSubmit={handleSubmit(onSubmit)}>
      {/* include validation with required or other standard HTML validation rules */}
      <NewsletterInputContainer
        {...register("email", { required: true })}
        placeholder="Your Email"
      />
      {/* errors will return when field validation fails  */}

      <NewsletterButtonContainer disabled={!!errors.email}>
        <SendIcon />
      </NewsletterButtonContainer>
    </NewsletterFormContainer>
  );
}
