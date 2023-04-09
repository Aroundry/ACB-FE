import useHttpPost from '@hooks/http/useHttpPost';
import HttpResponse from '#types/dto/HttpResponse';
import PostReceptionBody from '#types/dto/PostReceptionBody';
import { useMutation } from '@tanstack/react-query';

type PostReceptionResponse = HttpResponse<{ statusCode: number }>;

const usePostReceptionMutation = () => {
  const { post } = useHttpPost<PostReceptionResponse, PostReceptionBody>();
  return useMutation<{ statusCode: Number }, unknown, PostReceptionBody>(
    (body) => post('/reception', body).then((res) => res.data),
    {
      onSuccess: () => alert('접수완료'),
      onError: () => alert('에러'),
    }
  );
};

export default usePostReceptionMutation;
