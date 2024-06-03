// // import React from "react";

// // // import components
// // import Room from "../Room/Room";

// // export default function RoomList({ rooms }) {
// //   if (rooms.length === 0) {
// //     return (
// //       <div className="empty-search">
// //         <h3>unfortunately no rooms matched your search parameters</h3>
// //       </div>
// //     );
// //   }

// //   return (
// //     <section className="roomslist">
// //       <div className="roomslist-center">
// //         {rooms.map((item) => {
// //           return <Room key={item.id} room={item} />;
// //         })}
// //       </div>
// //     </section>
// //   );
// // }
// // import React from "react";
// // import Room from "../Room/Room";

// // export default function RoomList({ rooms }) {
// //   console.log(rooms);
// //   if (rooms.length === 0) {
// //     return (
// //       <div className="empty-search">
// //         <h3>Unfortunately, no rooms matched your search parameters.</h3>
// //       </div>
// //     );
// //   }

// //   return (
// //     <section className="roomslist">
// //       <div className="roomslist-center">
// //         {rooms.map((room) => (
// //           <Room key={room.id} room={room} />
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }
// import React, { useEffect, useState } from "react";
// import Room from "../Room/Room";

// export default function RoomList() {
//   const [rooms, setRooms] = useState([]);

//   useEffect(() => {
//     fetchRooms();
//   }, []);

//   const fetchRooms = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch(
//         "http://localhost:8080/hotelManagement/rooms",
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const data = await response.json();

//       if (response.ok) {
//         console.log(data);
//         setRooms(data);
//       } else {
//         console.error("Error fetching rooms:", data);
//       }
//     } catch (error) {
//       console.error("Error fetching rooms:", error);
//     }
//   };

//   if (rooms.length === 0) {
//     return (
//       <div className="empty-search">
//         <h3>Unfortunately, no rooms matched your search parameters.</h3>
//       </div>
//     );
//   }

//   return (
//     <section className="roomslist">
//       <div className="roomslist-center">
//         {rooms.map((room) => (
//           <Room key={room.id} room={room} />
//         ))}
//       </div>
//     </section>
//   );
// }
import React, { useEffect, useState } from "react";
import Room from "../Room/Room";
export default function RoomList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "http://localhost:8080/hotelManagement/rooms",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();

      if (response.ok) {
        console.log(data);
        setRooms(data);
      } else {
        console.error("Error fetching rooms:", data);
      }
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Please login to view rooms.</h3>
      </div>
    );
  }

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((room) => (
          <Room key={room.id} id={room.id} />
        ))}
      </div>
    </section>
  );
}
