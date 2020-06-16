import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useLoginMutation } from '../gql/generated/graphql';
import { AppStateContext } from './provider';

export const Login: React.FC = () => {
  const history = useHistory();
  const { appSetLogin, gqlError } = useContext(AppStateContext)
  const [login] = useLoginMutation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  return (
    <div>
      <div>Login page</div>
      {show ? <div>{gqlError.msg}</div> : undefined}
      <form onSubmit={async e => {
        e.preventDefault();
        try {
          setShow(false);
          const { data } = await login({ variables: { email, password } });
          if (data === undefined || data?.login === undefined || data.login?.access_token === undefined)
            throw new Error('Invalid credentials');
          appSetLogin(data.login?.access_token!);
          history.replace('/');
        } catch (err) {
          setShow(true);
        }
      }}>
        <div>
          <input value={email} placeholder='Email'
            onChange={e => { setEmail(e.target.value); }} />
        </div>
        <div>
          <input value={password} placeholder='Password' type='password'
            onChange={e => { setPassword(e.target.value); }} />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};