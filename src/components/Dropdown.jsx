import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import PropTypes from 'prop-types';
function Dropdown({ jsonData, placeholder, name }) {
  const options = jsonData.map((option) => (
    <Option key={option.id} value={option.name}>
      {option.name}
    </Option>
  ));

  return (
    <Select
      placeholder={placeholder}
      name={name}
      size="lg"
      color="success"
      required
    >
      {options}
    </Select>
  );
}
Dropdown.propTypes = {
  jsonData: PropTypes.array,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};
export default Dropdown;
