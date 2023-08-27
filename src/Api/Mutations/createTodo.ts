import request from 'Services/request';

async function createTodo({ name }: { name: string }) {
  const { data } = await request({
    url: `/todos`,
    method: 'POST',
    params: {
      data: { name },
    },
  });

  return data;
}

export default createTodo;
