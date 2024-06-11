import { useDispatch } from "react-redux";
import { logout } from "../store/auth/authSlice";


function Dashboard() {
    const dispatch = useDispatch();

    const handleLogout = () => { 
        dispatch(logout());
      };
    
    return (
      <>
        <h2>Halooooo</h2>
        <button onClick={handleLogout}>Logout</button>
      </>
    );
  }
  
  export default Dashboard;