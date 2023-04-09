import HttpResponse from '#types/dto/HttpResponse';
import useHttpGet from '@hooks/http/useHttpGet';
import { useQuery } from '@tanstack/react-query';
import { ReceptionData } from '#types/dto/GetReceptionRes';

const useGetReception = () => {
  const { get } = useHttpGet<HttpResponse<ReceptionData[]>>();
  return useQuery<ReceptionData[]>(
    ['receptionData'],
    async () =>
      await get(`/reception`, {})
        .then(({ data }) => data)
        .catch()
  );
};

export default useGetReception;
