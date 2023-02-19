import { DefaultButton, GoogleButton, InvertedButton } from "./button.styles";

const BUTTON_TYPE_CLASSES = {
  google: GoogleButton,
  inverted: InvertedButton,
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const buttonTypeClass = BUTTON_TYPE_CLASSES[buttonType];
  const CustomButton = buttonTypeClass ? buttonTypeClass : DefaultButton;
  return (
    <CustomButton
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
