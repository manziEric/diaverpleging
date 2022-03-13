interface ComponentProps {
  type: string;
  name: string;
  placeholder: string;
  inputStyles: any;
}

const Input = ({
  type,
  name,
  placeholder,
  inputStyles,
}: ComponentProps): JSX.Element => {
  return (
    <div className={inputStyles.containerInput}>
      <input
        className={inputStyles}
        type={type}
        name={name}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
