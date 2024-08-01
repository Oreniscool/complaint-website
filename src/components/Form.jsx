import { Button } from '@mui/base/Button';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import departmentsData from '../../public/departments.json';
import Dropdown from './Dropdown';
function Form({ changeVisibility, changeText }) {
  const [controlCss, setControlCss] = useState('w-full');
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    setDepartments(departmentsData);
  }, []);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        axios
          .post(import.meta.env.VITE_SHEET_LINK, formJson)
          .then((response) => {
            changeVisibility(
              'h-screen w-screen bg-[#0000004D] absolute flex justify-center items-center'
            );
            changeText('Complaint submitted!');
            console.log(response);
          })
          .catch((e) => {
            changeVisibility(
              'h-screen w-screen bg-[#0000004D] absolute flex justify-center items-center'
            );
            changeText('An error occurred, please try again.');
            console.error(e);
          });
      }}
    >
      <Stack spacing={3} alignItems="center">
        <Stack direction="row" spacing={3} className="w-full">
          <FormControl className={controlCss}>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Enter your name"
              required
              disabled={false}
              size="lg"
              variant="outlined"
              color="success"
              name="name"
            />
          </FormControl>
          <FormControl className={controlCss}>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Enter an email so we can notify you of any updates"
              type="email"
              required
              disabled={false}
              size="lg"
              variant="outlined"
              color="success"
              name="email"
            />
          </FormControl>
        </Stack>
        <FormControl className={controlCss}>
          <FormLabel size="lg">Address</FormLabel>
          <Input
            placeholder="Where is it?"
            required
            disabled={false}
            size="lg"
            variant="outlined"
            color="success"
            name="address"
          />
        </FormControl>
        <FormControl className={controlCss}>
          <FormLabel>Department</FormLabel>
          <Dropdown
            jsonData={departmentsData}
            placeholder="Department to send complaint"
            name="department"
          ></Dropdown>
        </FormControl>
        <FormControl className={controlCss}>
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder="Describe the situation"
            minRows={3}
            disabled={false}
            size="lg"
            variant="outlined"
            color="success"
            name="description"
          ></Textarea>
        </FormControl>
        <FormControl className={controlCss}>
          <FormLabel>Image link</FormLabel>
          <Input
            placeholder="Enter a link of the image from a websites like imgur"
            disabled={false}
            size="lg"
            variant="outlined"
            color="success"
            name="image"
          ></Input>
        </FormControl>
        <Button
          className="bg-[#3ff861] px-8 py-4 w-fit rounded-xl transition-all hover:scale-105 box shadow hover:shadow-[0_20px_80px_-10px_#3ff861]"
          type="submit"
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
}
Form.propTypes = {
  changeVisibility: PropTypes.func,
  changeText: PropTypes.func,
};

export default Form;
