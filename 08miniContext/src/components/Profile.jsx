import UserContext from "../context/UserContext";
import { useContext } from "react";

function Profile() {
const {user} = useContext(UserContext);
if (!user) return <h1>Not logged in</h1> 

  return (
    <>
    <h1>Profile : {user.username} </h1>
    </>
  )
}

export default Profile