import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { App } from './App';
import { ErrorPage } from './components/error-page/error-page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import './globals.css';
import reportWebVitals from './reportWebVitals';
import { FormWrapper } from './components/form-wrapper/form-wrapper';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/auth',
    element: <FormWrapper />
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
