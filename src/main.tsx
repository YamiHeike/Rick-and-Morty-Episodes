import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Episodes from './routes/Episodes';
import Characters from './routes/Characters';
import CharacterDetails from './routes/CharacterDetails';
import App from './routes/App'
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink, from } from '@apollo/client';

const link = from([
  new HttpLink({uri: 'https://rickandmortyapi.com/graphql'})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Episodes />
      },
      {
        path: "/characters/:episodeId",
        element: <Characters />
      },
      {
        path: "/character-details/:characterId",
        element: <CharacterDetails />
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
)
