import ReceptionForm from '@components/ReceptionForm';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const CustomerReception = () => {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {}, []);

  console.log(id);
  return (
    <>
      <ReceptionForm />
    </>
  );
};
export default CustomerReception;
