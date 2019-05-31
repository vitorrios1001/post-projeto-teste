import React from 'react';
import Messages from './theme/messages'

const App = ({children}) => (
  <div style={divGeral}>
    <h2>Header</h2>
    <Messages />
    <div id="page-wrapper" className="gray-bg">
      {children}
    </div>
  </div>
)

const divGeral = {
  marginTop: '20px',
  marginLeft: '20px',
  marginRight: '20px',
  marginFooter: '20px'
}

export default App
