import { useEffect, useState } from 'react';
import Form from '../components/Form';
import { Button } from '@mui/base/Button';

function ComplaintForm() {
  const [modalVisibility, setModalVisibility] = useState(
    'h-screen w-screen bg-[#0000004D] absolute flex justify-center items-center hidden'
  );
  const [modalText, setModalText] = useState('placeholder');
  useEffect(() => {
    console.log(modalText, modalVisibility);
  }, [modalText, modalVisibility]);
  const handleClick = () => {
    setModalVisibility(
      'h-screen w-screen bg-[#0000004D] absolute flex justify-center items-center hidden'
    );
  };
  return (
    <>
      <div className="flex flex-col justify-evenly h-screen w-3/5">
        <h1 className="text-3xl text-text-100 font-bold">
          Submit your complaint
        </h1>
        <Form
          changeVisibility={setModalVisibility}
          changeText={setModalText}
        ></Form>
      </div>
      <div className={modalVisibility}>
        <div className="bg-[#fefcec] px-12 py-7 w-fit h-max rounded-lg flex flex-col justify-center items-center gap-5">
          <h3 className="text-2xl">{modalText}</h3>
          <Button
            className="bg-[#3ff861] px-4 py-2 w-fit rounded-xl transition-all hover:scale-105 box shadow hover:shadow-[0_20px_80px_-10px_#3ff861]"
            onClick={handleClick}
          >
            OK
          </Button>
        </div>
      </div>
    </>
  );
}

export default ComplaintForm;
