import React from "react";
import { AuthContext } from "../authContext";
import { useNavigate } from "react-router-dom";
 
const AdminDashboardPage = () => {
  const navigate = useNavigate();
  const { dispatch } = React.useContext(AuthContext);
  const handleClick = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate('/admin/login')
  };
  return (
    <>
      <div className=" w-full flex flex-col gap-12 items-center  h-screen text-gray-700 ">
        <div className="w-full flex justify-between">
          <div className="text-3xl">APP</div>

          <button
            onClick={handleClick}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          >
            LOGOUT
          </button>
        </div>
        <div className="w-full flex items-center justify-between">
          <span className="text-1xl h-4">Todays Leaderboard</span>
          <span className="text-1xl">
            30 May 2022 <span className="text-2xl">.</span>
            <span className="rounded-full bg-green-500 hover:bg-green-700 text-white p-2">
              SUBMITS OPEN
            </span>
            <span className="text-2xl">.</span> 11:34
          </span>
        </div>

        <div className="w-full flex flex-col gap-8">
          <div className=" w-full flex justify-between">
            <span>title</span>
            <span>Auther</span>
            <span>Most Likes</span>
          </div>

          <div className=" w-full flex justify-between">
            <div className="image">
              <img
                src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
                alt=""
              />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam repudiandae vitae corrupti sed.
              </span>
            </div>
            <div className="flex">
              <img
                className="smallImage"
                src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
                alt=""
              />{" "}
              Auther
            </div>
            <span>
              999 <span>up</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
