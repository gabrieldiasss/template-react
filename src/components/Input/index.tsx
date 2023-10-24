import { InputHTMLAttributes, forwardRef } from "react";
import { InputContainer, InputStyled } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <InputContainer className={className}>
        <InputStyled {...props} ref={ref} />
        {error && <p>{error}</p>}
      </InputContainer>
    );
  }
);
