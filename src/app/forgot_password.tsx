import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForgotPasswordMutation } from '../gql/generated/graphql';
import { AppStateContext } from './provider';

export const ForgotPassword: React.FC = () => {
  const history = useHistory();
  const [forgotPassword] = useForgotPasswordMutation();
  const { gqlError } = useContext(AppStateContext);
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(false);

  return (
    <div>
      <div>Forgot password page</div>
      {show ? <div>{gqlError.msg}</div> : undefined}
      <form onSubmit={async e => {
        e.preventDefault();
        try {
          setShow(false);
          const { data } = await forgotPassword({ variables: { email } });
          if (data === undefined || data?.forgotPassword === undefined || data?.forgotPassword?.tmp_email_token === undefined)
            throw new Error('Invalid data');
          history.replace(`/reset-password/${data?.forgotPassword?.tmp_email_token}`);
        } catch (err) {
          setShow(true);
        }
      }}>
        <div>
          <input value={email} placeholder='Email'
            onChange={e => { setEmail(e.target.value); }} />
        </div>
        <button type='submit'>Reset password</button>
      </form>
    </div>
  );
};