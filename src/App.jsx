import { ToastContainer } from 'react-toastify'
import useRouteElement from './useRouteElement'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const routeElements = useRouteElement()
  return (
    <div>
      {routeElements}
      <ToastContainer autoClose={1000} />
    </div>
  )
}

export default App
