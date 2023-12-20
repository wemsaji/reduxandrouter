import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import store from './store';
import { CounterWithRtk } from './views/CounterWithRtk';
import { CounterWithState } from './views/CounterWithState';

const router = createBrowserRouter([
  { path: '/', element: <CounterWithState /> },
  { path: '/CounterWithState', element: <CounterWithState /> },
  { path: '/CounterWithRtk', element: <CounterWithRtk /> },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
