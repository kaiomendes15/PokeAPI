import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Contexts
import { PokeProvider } from './contexts/pokeProvider.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages
import Home from './routes/Home.tsx'
import PokemonDetails from './routes/PokemonDetails.tsx'

import './index.css'
import './components/BackgroundColorSetter/colorsetter.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // * dynamic routes
      {
        path: ":id",
        element: < PokemonDetails />
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(

  <PokeProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </PokeProvider>
  
)
