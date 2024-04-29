import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Login from './components/Login';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import AddTransaction from './components/AddTransaction';
import EditTransaction from './components/EditTransaction';
import AnalysisPage from './components/AnalysisPage';
import ErrorPage from './components/ErrorPage';
import NotAuthorized from './components/NotAuthorized';
import CategoryAnalytics from './components/CategoryAnalytics';
import { ToastContainer } from 'react-toastify';
import useAccessToken from './hooks/useAccessToken';
import useRefreshToken from './hooks/useRefreshToken.';
import {logout, refreshAccessToken, verifyUserAuth} from './api';
import { useEffect, useState } from 'react';


function App() {

    const { accessToken, setAccessToken } = useAccessToken();
    const { refreshToken, setRefreshToken } = useRefreshToken();
    const [userAuth, setUserAuth] = useState(null);

    const clearTokens = () => {
        setAccessToken(null);
        setRefreshToken(null);
    };

    const updateTokens = (data) => {
        setAccessToken({ token: data["accessToken"] });
        setRefreshToken({ token: data["refreshToken"] });
    };

    const checkAuth = () =>{
        // console.log("accessToken: ", accessToken);
        verifyUserAuth(accessToken)
        .then((res)=>{
            // console.log(res.data);
            setUserAuth(res.data);
           
        })
        .catch((err) => {
            setUserAuth(null);
            if (err.response.data.message.includes("jwt expired")) {
              refreshAccessToken({ refreshToken: refreshToken })
                .then((res) => {
                  updateTokens(res.data);
                  verifyUserAuth(res.data["accessToken"])
                    .then((res) => {
                      setUserAuth(res.data);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                })
                .catch(clearTokens);
            }
          });
      };
        useEffect(checkAuth, [accessToken]);

        const handleLogout = () => {
            let payload = {token :refreshToken};
            logout(payload)
            .then((res) => {
                clearTokens();
            
                
                
            })
              .catch((err) => {
                console.log(err);
              });
          };

    return (
        <div >
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Login setAccessToken={setAccessToken} setRefreshToken={setRefreshToken} />}
                    />
                    <Route
                        path="/home"
                        element={ userAuth !== null ? (<HomePage handleLogout ={handleLogout} /> ) : (<NotAuthorized/>)}
                    />
                    <Route
                        path="/register"
                        element={<RegisterPage  />}
                    />
                    <Route
                        path="/addtransaction"
                        element={ userAuth !== null ? (<AddTransaction/> ) : (<NotAuthorized/>)}
                        
                    />
                    <Route
                        path="/edittransaction"
                        element={ userAuth !== null ? (<EditTransaction/> ) : (<NotAuthorized/>)}
                    />
                    <Route
                        path="/analysis"
                        element={ userAuth !== null ? (<AnalysisPage handleLogout ={handleLogout}/> ) : (<NotAuthorized/>)}
                    />
                     <Route
                        path="/categoryanalysis"
                        element={ userAuth !== null ? (<CategoryAnalytics handleLogout ={handleLogout}/> ) : (<NotAuthorized/>)}
                    />
                    <Route
                        path="*"
                        // element={<Navigate to="/" />}
                        element={<ErrorPage />}
                    />
                </Routes>
            </Router>
            <ToastContainer />



        </div>
    );
}

export default App;
