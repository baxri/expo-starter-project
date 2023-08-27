import request from 'Services/request';

export const todosQuery = async () => {
  console.log('request todos');
  const { data } = await request({
    url: '/todos',
  });

  return data;
};
