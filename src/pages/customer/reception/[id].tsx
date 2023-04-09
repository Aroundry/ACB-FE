import ReceptionForm from '@components/ReceptionForm';
import { useRouter } from 'next/router';

const CustomerReception = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log('masterId: ', id);
  return (
    <>
      <ReceptionForm masterId={id} />
    </>
  );
};
export default CustomerReception;
