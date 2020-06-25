import React, { useState, useContext } from 'react';
import { useRegisterMutation } from '../gql/generated/graphql';
import { AppStateContext } from './provider';

export const Register: React.FC = () => {
  const { gqlError } = useContext(AppStateContext)
  const [register] = useRegisterMutation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);

  if (success) {
    return (
      <div>
        <div>Register page</div>
        <div>Registration successful! Please check your email for your email confirmation link.</div>
      </div>
    );
  }

  return (
    <div>
      <div>Register page</div>
      {show ? <div>{gqlError.msg}</div> : undefined}
      <form onSubmit={async e => {
        e.preventDefault();
        try {
          setShow(false);
          const { data } = await register({ variables: { email, password, confirmation } });
          if (data === undefined || data?.register === undefined || !data?.register)
            throw new Error('Invalid credentials');
          setSuccess(true);
        } catch (err) {
          setShow(true);
        }
      }}>
        <div>
          <input value={email} placeholder='Email'
            onChange={e => { setEmail(e.target.value); }} />
        </div>
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
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};