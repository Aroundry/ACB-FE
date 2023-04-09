import HttpResponse from '#types/dto/HttpResponse';
import useHttpGet from '@hooks/http/useHttpGet';
import { useQuery } from '@tanstack/react-query';
import { ReceptionData } from '#types/dto/GetReceptionRes';

const useGetCustomerReception = (phoneNumber: string) => {
  const { get } = useHttpGet<HttpResponse<ReceptionData[]>>();
  return useQuery<ReceptionData[]>([phoneNumber], async () =>
    get(`/reception/${phoneNumber}`, {})
      .then(({ data }) => data)
      .catch()
  );
};

export default useGetCustomerReception;
