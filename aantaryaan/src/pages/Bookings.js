import React, { useEffect, useState } from "react";
import bg from "../bg.avif";
import Activity from "../components/Activity";
import { AppContext } from "../context/ContextProvider";
import { useContext } from "react";
import Header from "../components/header";
export default function Bookings() {
  const { activities } = useContext(AppContext);
  const seen = new Set();
  const newUnique = [];
  const [myBookings, setMyBookings] = useState([]);
  const [actData, setActData] = useState([]);
  useEffect(() => {
    let val = localStorage.getItem("myAct").split(",");
    const filteredArray = val.filter(
      (item) => item !== " " && item !== "undefined"
    );
    console.log(filteredArray);
    setMyBookings(filteredArray);
    filteredArray.map((act, index) => {
      activities.map((activity, index) => {
        if (activity.name === act) {
          setActData((prev) => [...prev, activity]);
        }
      });
    });

    // actData.map((activity, index) => {
    //   console.log("R" + activity.name);
    // });

    // for (const obj of actData) {
    //   const objString = JSON.stringify(obj);
    //   if (!seen.has(objString)) {
    //     seen.add(objString);
    //     newUnique.push(obj);
    //   }
    // }
  }, []);
  const uniqueData = actData.filter((item, index, self) => {
    // You can adjust the comparison logic based on your data structure
    return self.findIndex((i) => i.name === item.name) === index;
  });

  return (
    <div
      style={{
        // backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundColor: "black",
        backgroundRepeat: "repeat",
        height: "100vh",
        position: "relative",
      }}
    >
      <Header />
      <div
        style={{
          paddingTop: 20,
        }}
      >
        {" "}
        <span
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "60px",
            fontFamily: "Poppins",
            fontWeight: "bold",
          }}
        >
          My Bookings for Space.
        </span>
        <div>
          <div
            style={{
              marginTop: "50px",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {uniqueData.map((activity, index) =>
              activity.name ? (
                <div
                  style={{
                    marginTop: 50,
                    width: "75vw",
                    height: "45vh",

                    borderRadius: "10px",
                    backgroundColor: "black",
                  }}
                >
                  <Activity data={activity} />
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
