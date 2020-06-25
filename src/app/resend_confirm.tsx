import React, { useState, useContext } from 'react';
import { useResendConfirmationMutation } from '../gql/generated/graphql';
import { AppStateContext } from './provider';

export const ResendConfirm: React.FC = () => {
  const [resendConfirmation] = useResendConfirmationMutation();
  const { gqlError } = useContext(AppStateContext);
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(false);

  return (
    <div>
      <div>Resend confirmation page</div>
      {show ? <div>{gqlError.msg}</div> : undefined}
      <form onSubmit={async e => {
        e.preventDefault();
        try {
          setShow(false);
          const { data } = await resendConfirmation({ variables: { email } });
          if (data === undefined || data?.resendConfirmation === undefined || data?.resendConfirmation?.tmp_email_token === undefined)
            throw new Error('Invalid data');
          console.log('resend confirmation successful');
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