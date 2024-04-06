import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from './components/Login';
import HomePage from './components/HomePage';
import AddTransaction from './components/AddTransaction';
import ErrorPage from './components/ErrorPage';


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
                        path="*"
                        // element={<Navigate to="/" />}
                        element={<ErrorPage/>}
                    />
                </Routes>
            </Router>
      
      
      
    </div>
  );
}

export default App;
