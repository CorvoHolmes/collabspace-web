import { ICreateCommentRequest, ICreateCommentResponse } from "..";
import api from "../../Api/api";

const createComment = async ({
  postId,
  content,
}: ICreateCommentRequest): Promise<ICreateCommentResponse> => {
  const response = await api
    .post(`/comments/${postId}`, { content })
    .then((res) => res)
    .catch((res) => res);

  return response.data;
};

export { createComment };
