import { Auth0Provider } from '@auth0/auth0-react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const AUTH0_DOMAIN = "dev-7w2i72vd1ln67j5z.us.auth0.com"
const AUTH0_CLIENT_ID = "vpR8cqSZE0tJuuFMLlfLhHPL6ssYXdKD"

ReactDOM.createRoot(document.getElementById('root')).render(

  <Auth0Provider
    domain={AUTH0_DOMAIN}
    clientId={AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
)
