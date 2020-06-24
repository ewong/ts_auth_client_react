import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useResendConfirmationMutation } from '../gql/generated/graphql';
import { AppStateContext } from './provider';

export const ResendConfirm: React.FC = () => {
  const history = useHistory();
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
          history.replace(`/confirm/${data?.resendConfirmation?.tmp_email_token}`);
        } catch (err) {
          setShow(true);
        }
      }}>
        <div>
          <input value={email} placeholder='Email'
            onChange={e => { setEmail(e.target.value); }} />
        </div>
        <button type='submit'>Resend confirmation</button>
      </form>
    </div>
  );
};