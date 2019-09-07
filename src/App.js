import React from 'react';
import Messages from './theme/messages'

const App = ({ children }) => (
  <div>
    <h2>Header</h2>
    <Messages />
    <div id="page-wrapper" className="gray-bg">
      {children}
    </div>
  </div>
)

export default App
