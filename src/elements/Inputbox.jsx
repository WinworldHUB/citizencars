const Inputbox = ({
  id,
  value,
  onChange,
  placeholder = '',
  isPassword = false,
}) => {
  return (
    <input
      id={id}
      className="form-control"
      type={isPassword ? 'password' : 'text'}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        onChange && onChange(e.target.value);
      }}
    />
  );
};

export default Inputbox;
