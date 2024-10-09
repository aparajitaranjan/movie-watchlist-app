// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import App from './App';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure this import is correct
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
