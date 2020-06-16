import React, { useState, useContext } from 'react';
import { useRegisterMutation } from '../gql/generated/graphql';
import { useHistory } from 'react-router-dom';
import { AppStateContext } from './provider';

export const Register: React.FC = () => {
  const history = useHistory();
  const { gqlError } = useContext(AppStateContext)
  const [register] = useRegisterMutation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [show, setShow] = useState(false);

  return (
    <div>
      <div>Register page</div>
      {show ? <div>{gqlError.msg}</div> : undefined}
      <form onSubmit={async e => {
        e.preventDefault();
        try {
          setShow(false);
          const { data } = await register({ variables: { email, password, confirmation } });
          if (data === undefined || data?.register === undefined)
            throw new Error('Invalid credentials');
          history.replace(`/login`);
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