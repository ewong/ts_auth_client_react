import React, { useState, useContext } from 'react';
import { useResendConfirmationMutation } from '../gql/generated/graphql';
import { AppStateContext } from './provider';

export const ResendConfirm: React.FC = () => {
  const [resendConfirmation] = useResendConfirmationMutation();
  const { gqlError } = useContext(AppStateContext);
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);

  if (success) {
    return (
      <div>
        <div>Resend confirmation page</div>
        <div>A confirmation link has been sent to your email.</div>
      </div>
    );
  }

  return (
    <div>
      <div>Resend confirmation page</div>
      {show ? <div>{gqlError.msg}</div> : undefined}
      <form onSubmit={async e => {
        e.preventDefault();
        try {
          setShow(false);
          const { data } = await resendConfirmation({ variables: { email } });
          if (data === undefined || data?.resendConfirmation === undefined || !data?.resendConfirmation)
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
        <button type='submit'>Send confirmation email</button>
      </form>
    </div>
  );
};