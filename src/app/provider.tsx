import React, { createContext, useState, ReactNode } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, ApolloLink, Observable } from '@apollo/client';
import { onError } from '@apollo/link-error';

let authToken = '';
const initial = {
  appState: { loggedIn: false },
  gqlError: { msg: '' },
  appSetLogin: (token: string) => { },
  appSetLogout: () => { },
  appSetAuthToken: (token: string) => { },
  appClearAuthToken: () => { },
}

export const AppStateContext = createContext(initial);

function AppStateProvider({ children }: { children: ReactNode }) {
  // app state
  const [appState, setAppState] = useState({ loggedIn: false });
  const [gqlError, setGQLError] = useState({ msg: '' });

  const appSetLogin = (token: string) => {
    authToken = token;
    setAppState({ ...appState, loggedIn: true });
  };

  const appSetLogout = () => {
    authToken = '';
    setAppState({ ...appState, loggedIn: false });
  };

  const appSetAuthToken = (token: string) => { authToken = token; };
  const appClearAuthToken = () => { authToken = ''; };
  const appGetAuthToken = (): string => { return authToken; };

  // apollo client
  const cache = new InMemoryCache({});
  const requestLink = new ApolloLink((operation, forward) =>
    new Observable(observer => {
      let handle: any;
      Promise.resolve(operation)
        .then((operation) => {
          operation.setContext({ headers: { authorization: `Bearer ${appGetAuthToken()}` } });
        })
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));
      return () => {
        if (handle) handle.unsubscribe();
      };
    })
  );

  const client = new ApolloClient({
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors === undefined || graphQLErrors[0].path === undefined) return;
        if (graphQLErrors[0].path[0] === 'refresh') return;
        const err = graphQLErrors[0].message;
        setGQLError({ msg: err });
      }),
      requestLink,
      new HttpLink({
        uri: 'http://localhost:4000/graphql',
        credentials: 'include'
      })
    ]),
    cache
  });

  return (
    <AppStateContext.Provider value={{ 
      appState, 
      gqlError,
      appSetLogin, 
      appSetLogout, 
      appSetAuthToken, 
      appClearAuthToken 
      }}>
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </AppStateContext.Provider>
  );
}

export default AppStateProvider;

