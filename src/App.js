import './App.css';
import Index from './pages';
import { Provider } from 'react-redux';
import { store } from './api';

const App = () =>  {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

export default App;
