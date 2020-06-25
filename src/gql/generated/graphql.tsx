import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  profile?: Maybe<Profile>;
};

export type Mutation = {
  __typename?: 'Mutation';
  register?: Maybe<Scalars['Boolean']>;
  login?: Maybe<AccessToken>;
  resendConfirmation?: Maybe<Scalars['Boolean']>;
  confirm?: Maybe<Scalars['Boolean']>;
  refresh?: Maybe<AccessToken>;
  forgotPassword?: Maybe<Scalars['Boolean']>;
  resetPassword?: Maybe<Scalars['Boolean']>;
  logout?: Maybe<Scalars['Boolean']>;
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  confirmation: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationResendConfirmationArgs = {
  email: Scalars['String'];
};


export type MutationConfirmArgs = {
  email: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  confirmation: Scalars['String'];
};

export type Profile = {
  __typename?: 'Profile';
  ukey?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
};

export type AccessToken = {
  __typename?: 'AccessToken';
  ukey?: Maybe<Scalars['ID']>;
  access_token?: Maybe<Scalars['ID']>;
};

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  confirmation: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'register'>
);

export type ResendConfirmationMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ResendConfirmationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'resendConfirmation'>
);

export type ConfirmMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ConfirmMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'confirm'>
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'AccessToken' }
    & Pick<AccessToken, 'ukey' | 'access_token'>
  )> }
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type ResetPasswordMutationVariables = Exact<{
  password: Scalars['String'];
  confirmation: Scalars['String'];
}>;


export type ResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'resetPassword'>
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = (
  { __typename?: 'Query' }
  & { profile?: Maybe<(
    { __typename?: 'Profile' }
    & Pick<Profile, 'email'>
  )> }
);


export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!, $confirmation: String!) {
  register(email: $email, password: $password, confirmation: $confirmation)
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      confirmation: // value for 'confirmation'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const ResendConfirmationDocument = gql`
    mutation ResendConfirmation($email: String!) {
  resendConfirmation(email: $email)
}
    `;
export type ResendConfirmationMutationFn = ApolloReactCommon.MutationFunction<ResendConfirmationMutation, ResendConfirmationMutationVariables>;

/**
 * __useResendConfirmationMutation__
 *
 * To run a mutation, you first call `useResendConfirmationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendConfirmationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendConfirmationMutation, { data, loading, error }] = useResendConfirmationMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useResendConfirmationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResendConfirmationMutation, ResendConfirmationMutationVariables>) {
        return ApolloReactHooks.useMutation<ResendConfirmationMutation, ResendConfirmationMutationVariables>(ResendConfirmationDocument, baseOptions);
      }
export type ResendConfirmationMutationHookResult = ReturnType<typeof useResendConfirmationMutation>;
export type ResendConfirmationMutationResult = ApolloReactCommon.MutationResult<ResendConfirmationMutation>;
export type ResendConfirmationMutationOptions = ApolloReactCommon.BaseMutationOptions<ResendConfirmationMutation, ResendConfirmationMutationVariables>;
export const ConfirmDocument = gql`
    mutation Confirm($email: String!) {
  confirm(email: $email)
}
    `;
export type ConfirmMutationFn = ApolloReactCommon.MutationFunction<ConfirmMutation, ConfirmMutationVariables>;

/**
 * __useConfirmMutation__
 *
 * To run a mutation, you first call `useConfirmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmMutation, { data, loading, error }] = useConfirmMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useConfirmMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ConfirmMutation, ConfirmMutationVariables>) {
        return ApolloReactHooks.useMutation<ConfirmMutation, ConfirmMutationVariables>(ConfirmDocument, baseOptions);
      }
export type ConfirmMutationHookResult = ReturnType<typeof useConfirmMutation>;
export type ConfirmMutationResult = ApolloReactCommon.MutationResult<ConfirmMutation>;
export type ConfirmMutationOptions = ApolloReactCommon.BaseMutationOptions<ConfirmMutation, ConfirmMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    ukey
    access_token
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = ApolloReactCommon.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, baseOptions);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = ApolloReactCommon.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($password: String!, $confirmation: String!) {
  resetPassword(password: $password, confirmation: $confirmation)
}
    `;
export type ResetPasswordMutationFn = ApolloReactCommon.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      password: // value for 'password'
 *      confirmation: // value for 'confirmation'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, baseOptions);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = ApolloReactCommon.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const ProfileDocument = gql`
    query Profile {
  profile {
    email
  }
}
    `;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
        return ApolloReactHooks.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, baseOptions);
      }
export function useProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, baseOptions);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileQueryResult = ApolloReactCommon.QueryResult<ProfileQuery, ProfileQueryVariables>;