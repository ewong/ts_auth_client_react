import React, { useState, useContext } from 'react';
import { useResetPasswordMutation } from '../gql/generated/graphql';
import { useParams, useHistory } from 'react-router-dom';
import { AppStateContext } from './provider';

export const ResetPassword: React.FC = () => {
  const history = useHistory();
  const { appSetAuthToken, appClearAuthToken, gqlError } = useContext(AppStateContext);
  const [resetPassword] = useResetPasswordMutation();
  const { token } = useParams();

  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [show, setShow] = useState(false);

  return (
    <div>
      <div>Reset password page</div>
      {show ? <div>{gqlError.msg}</div> : undefined}
      <form onSubmit={async e => {
        e.preventDefault();
        try {
          setShow(false);
          appSetAuthToken(token);
          const { data } = await resetPassword({ variables: { password, confirmation } });
          if (data === undefined || data?.resetPassword === undefined || !data?.resetPassword)
            throw new Error('Invalid credentials');
          appClearAuthToken();
          history.replace('/login');
        } catch (err) {
          appClearAuthToken();
          setShow(true);
        }
      }}>
        <div>
          <input
            value={password} placeholder='Password' type='password'
            onChange={e => { setPassword(e.target.value); }} />
        </div>
        <div>
          <input
            value={confirmation} placeholder='Confirm Password' type='password'
            onChange={e => { setConfirmation(e.target.value); }} />
        </div>
        <button type='submit'>Change password</button>
      </form>
    </div>
  );
};