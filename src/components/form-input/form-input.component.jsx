import {
  FormInputContainer,
  FormInputLabel,
  Input,
} from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <FormInputContainer>
      {label && (
        <>
          <Input className="form-input" {...otherProps} />
          <FormInputLabel shrink={otherProps.value.length > 0}>
            {label}
          </FormInputLabel>
        </>
      )}
    </FormInputContainer>
  );
};

export default FormInput;
