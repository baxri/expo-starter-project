import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import createTodo from 'Api/Mutations/createTodo';
import { todosQuery } from 'Api/Queries/todos';

import {
  Button,
  Column,
  Row,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'Components/UI';

import { SectionLink, SectionTitle } from './styles';

function DashboardScreen({ navigation }: any) {
  const { data = [], isLoading } = useQuery('todos', todosQuery);
  const client = useQueryClient();

  const createTodoMutartion = useMutation(createTodo, {
    onSuccess: () => {
      client.invalidateQueries('todos');
    },
  });

  const createTodoHandler = async () => {
    await createTodoMutartion.mutateAsync({
      name: 'George',
    });
  };

  return (
    <Column backgroundColor="background" stretch>
      <ScrollView keyboardShouldPersistTaps="handled" px={5} py={6}>
        <Text>DASHBOARD</Text>
        <Button title="Open a bank account" onPress={createTodoHandler} />
      </ScrollView>
    </Column>
  );
}

export default DashboardScreen;
