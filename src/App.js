import './App.css';
import { ApolloProvider } from '@apollo/client'
import client from './services/apolo'
import Pokemon from './components/pokemon'

function App() {
  return (
    <ApolloProvider client={client}>
      <Pokemon/>
    </ApolloProvider>
  );
}

export default App;
