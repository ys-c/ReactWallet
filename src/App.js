import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import HomePage from './components/HomePage';
import AddTransaction from './components/AddTransaction';
import EditTransaction from './components/EditTransaction';
import ErrorPage from './components/ErrorPage';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div >
      <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Login />}
                    />
                    <Route
                        path="/home"
                        element={<HomePage />}
                    />
                    <Route
                        path="/addtransaction"
                        element={<AddTransaction/>}
                    />
                    <Route
                        path="/edittransaction"
                        element={<EditTransaction/>}
                    />
                    <Route
                        path="*"
                        // element={<Navigate to="/" />}
                        element={<ErrorPage/>}
                    />
                </Routes>
            </Router>
            <ToastContainer/>
      
      
      
    </div>
  );
}

export default App;
