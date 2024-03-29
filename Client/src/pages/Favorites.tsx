import { useAuth0 } from "@auth0/auth0-react";
import FavoriteImages from "../components/GetFavorites";
import favotext from "../graphics/Favorites monkey.png";
import loginmonkey from "../graphics/Monkey login favorites.svg";



export const Favorites = () => {

  const { isAuthenticated } = useAuth0();



  
  return (
    <div className="hiddenSearch">
      {!isAuthenticated && (
        <>
         
         <img src={loginmonkey} alt="" />
        </>
      )}
      {isAuthenticated && (
        <>
          

          <div className="text-5xl flex justify-center mt-16">
          <img src={favotext} alt="test h1 favorites" className="max-w-96"/>
          </div>


<div className="">
<FavoriteImages />
</div>

        </>


      )}
    </div>
  );
}
