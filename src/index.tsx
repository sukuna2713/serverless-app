import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports'
import { ProvideAuth } from 'Auth/use-auth';
import { AuthOptions, createAuthLink } from 'aws-appsync-auth-link';
import { AUTH_TYPE } from 'aws-appsync';
import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';
import { ApolloProvider } from '@apollo/client';

Amplify.configure(awsconfig)

const url = awsconfig.aws_appsync_graphqlEndpoint;
const region = awsconfig.aws_appsync_region;
const auth: AuthOptions = {
  type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
  jwtToken: async () =>
    (await Auth.currentSession()).getAccessToken().getJwtToken(),
}

const link = ApolloLink.from([
  createAuthLink({ url, region, auth }),
  createSubscriptionHandshakeLink({ url, region, auth }),
])

const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <ProvideAuth>
        <App />
      </ProvideAuth>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
