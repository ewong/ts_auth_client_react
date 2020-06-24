import React, { useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useConfirmMutation } from '../gql/generated/graphql';
import { AppStateContext } from './provider';

export const Confirm: React.FC = () => {
  const history = useHistory();
  const { appSetAuthToken, appClearAuthToken, gqlError } = useContext(AppStateContext);

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [confirm] = useConfirmMutation();
  const { token } = useParams();

  if (token === undefined || token === '')
    return <div>Invalid user confirmation link</div>

  return (
    <div>
      <div>Confirmation page</div>
      {show ? <div>{gqlError.msg}</div> : undefined}
      <form onSubmit={async e => {
        e.preventDefault();
        try {
          setShow(false);
          appSetAuthToken(token);
          const { data } = await confirm({ variables: { email } });
          if (data === undefined || data?.confirm === undefined || !data.confirm)
            throw new Error('Not authorized');
          appClearAuthToken();
          history.replace('/login');
        } catch (err) {
          appClearAuthToken();
          setShow(true);
        }
      }}>
        <div><input value={email} placeholder='Email' onChange={e => { setEmail(e.target.value); }} /></div>
        <button type='submit'>Confirm</button>
      </form>
    </div>
  );
};