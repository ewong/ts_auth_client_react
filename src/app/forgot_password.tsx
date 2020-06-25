import React, { useState, useContext } from 'react';
import { useForgotPasswordMutation } from '../gql/generated/graphql';
import { AppStateContext } from './provider';

export const ForgotPassword: React.FC = () => {
  const [forgotPassword] = useForgotPasswordMutation();
  const { gqlError } = useContext(AppStateContext);
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);

  if (success) {
    return (
      <div>
        <div>Forgot password page</div>
        <div>A reset password link has been sent to your email.</div>
      </div>
    );
  }

  return (
    <div>
      <div>Forgot password page</div>
      {show ? <div>{gqlError.msg}</div> : undefined}
      <form onSubmit={async e => {
        e.preventDefault();
        try {
          setShow(false);
          const { data } = await forgotPassword({ variables: { email } });
          if (data === undefined || data?.forgotPassword === undefined || !data?.forgotPassword)
            throw new Error('Invalid data');
          setSuccess(true);
        } catch (err) {
          setShow(true);
        }
      }}>
        <div>
          <input value={email} placeholder='Email'
            onChange={e => { setEmail(e.target.value); }} />
        </div>
        <button type='submit'>Send password reset email</button>
      </form>
    </div>
  );
};