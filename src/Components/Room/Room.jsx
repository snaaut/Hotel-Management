// import React from "react";

// // import react-router-dom
// import { Link } from "react-router-dom";

// // import assets
// import defaultImg from "../../assets/img/jpeg/room-1.jpeg";

// // import prop-types
// import PropTypes from "prop-types";

// export default function Room({ room }) {
//   const { name, slug, images, price } = room;

//   return (
//     <article className="room">
//       <div className="img-container">
//         <img src={images[0] || defaultImg} alt="single room" />

//         <div className="price-top">
//           <h6>$ {price}</h6>
//           <p>per night</p>
//         </div>

//         <Link to={`/rooms/${slug}`} className="btn-primary room-link">
//           View
//         </Link>
//       </div>
//       <p className="room-info">{name}</p>
//     </article>
//   );
// }

// Room.prototype = {
//   room: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     slug: PropTypes.string.isRequired,
//     images: PropTypes.arrayOf(PropTypes.string).isRequired,
//     price: PropTypes.number.isRequired,
//   }),
// };

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import defaultImg from "../../assets/img/jpeg/room-1.jpeg";

// export default function RoomsList() {
//   const [roomIds, setRoomIds] = useState([]);
//   const [rooms, setRooms] = useState([]);

//   useEffect(() => {
//     fetchRoomIds();
//   }, []);

//   useEffect(() => {
//     if (roomIds.length > 0) {
//       fetchRoomsByIds(roomIds);
//     }
//   }, [roomIds]);

//   const fetchRoomIds = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch(
//         "http://localhost:8080/hotelManagement/rooms/list-id",
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const data = await response.json();
//       if (response.ok) {
//         // Ensure `data` is an array and remove duplicates
//         const uniqueRoomIds = new Set(data).size === data.length ? data : [];
//         setRoomIds(uniqueRoomIds);
//       } else {
//         console.error("Error fetching room IDs:", data);
//       }
//     } catch (error) {
//       console.error("Error fetching room IDs:", error);
//     }
//   };

//   const fetchRoomsByIds = async (ids) => {
//     try {
//       const token = localStorage.getItem("token");
//       const roomPromises = ids.map((id) =>
//         fetch(`http://localhost:8080/hotelManagement/rooms/get-room/${id}`, {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }).then((response) => response.json())
//       );
//       const roomsData = await Promise.all(roomPromises);

//       // Filter out empty or invalid entries before setting state
//       const validRooms = roomsData.filter((room) => room && room.id);
//       setRooms(validRooms);
//     } catch (error) {
//       console.error("Error fetching rooms:", error);
//     }
//   };

//   return (
//     <div className="room-list">
//       {rooms.map((room) => (
//         <article className="room" key={room.id}>
//           <div className="img-container">
//             <img
//               src={
//                 // room.images && room.images.length > 0 ? room.images[0] : defaultImg
//                 //room.images?.[0] ??
//                 defaultImg // Optional chaining and nullish coalescing
//               }
//               alt="single room"
//             />
//             <div className="price-top">
//               <h6>$ {room.pricePerDay}</h6>
//               <p>per night</p>
//             </div>
//             <Link to={`/rooms/${room.id}`} className="btn-primary room-link">
//               View
//             </Link>
//           </div>
//           <p className="room-info">{room.typeRoom}</p>
//         </article>
//       ))}
//     </div>
//   );
// }
//
import React, { useEffect, useState } from "react";
import defaultImg from "../../assets/img/jpeg/room-1.jpeg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default function Room({ id, onRoomClick }) {
  const [room, setRooms] = useState([]);
  useEffect(() => {
    fetchRoomsByIds(id);
  });

  const fetchRoomsByIds = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:8080/hotelManagement/rooms/get-room/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setRooms(data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  return (
    <div className="room-list">
      <article className="room" key={room.id}>
        <div className="img-container">
          <img
            src={
              // room.images
              //defaultImg // Optional chaining and nullish coalescing
              room.images && room.images.length > 0
                ? `http://localhost:8080/hotelManagement/rooms/img/${room.images[0]}`
                : defaultImg
            }
            alt="single room"
          />
          <div className="price-top">
            <h6>$ {room.pricePerDay}</h6>
            <p>per night</p>
          </div>
          <Link to={`/rooms/${room.id}`} className="btn-primary room-link">
            View
          </Link>
        </div>
        <p className="room-infoo">{room.typeRoom}</p>
      </article>
    </div>
  );
}
