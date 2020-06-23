import React from 'react';
import { useProfileQuery } from '../gql/generated/graphql';
import { useHistory } from 'react-router-dom';

export const Profile: React.FC = () => {
  const history = useHistory();
  const { data, loading, error } = useProfileQuery({ fetchPolicy: 'network-only' });

  if (loading) {
    return (
      <div>
        <div>Profile page</div>
        <div>Loading..</div>
      </div>
    );
  }

  if (error)
    history.replace('/');

  return (
    <div>
      <div>Profile page</div>
      <div>Email: {data?.profile?.email}</div>
    </div>
  );
};
