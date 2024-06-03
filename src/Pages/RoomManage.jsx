// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
// const HotelRoomManager = () => {
//   const [rooms, setRooms] = useState([]);
//   const [checkInDate, setCheckInDate] = useState("");
//   const [checkOutDate, setCheckOutDate] = useState("");
//   const [roomType, setRoomType] = useState("");
//   const history = useHistory();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     fetch("http://localhost:8080/hotelManagement/rooms", {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => setRooms(data));
//   }, []);

//   const fetchAvailableRooms = () => {
//     const token = localStorage.getItem("token");
//     axios
//       .get("http://localhost:8080/hotelManagement/rooms/available", {
//         params: {
//           checkIn: checkInDate,
//           checkOut: checkOutDate,
//         },
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         setRooms(response.data);
//       })
//       .catch((error) => {
//         console.error(
//           "There was an error fetching the available rooms!",
//           error
//         );
//       });
//   };

//   const handleCheckInChange = (e) => {
//     setCheckInDate(e.target.value);
//   };

//   const handleCheckOutChange = (e) => {
//     setCheckOutDate(e.target.value);
//   };

//   const handleRoomTypeChange = (e) => {
//     setRoomType(e.target.value);
//   };
//   const handleAddRoom = () => {
//     //console.log("okk");
//     history.push(`/admin/createRoom`);
//   };

//   useEffect(() => {
//     if (checkInDate && checkOutDate) {
//       fetchAvailableRooms();
//     }
//   }, [checkInDate, checkOutDate]);

//   const filteredRooms = rooms.filter((room) => {
//     if (roomType === "") return true;
//     return room.typeRoom === roomType;
//   });

//   return (
//     <div className="hotel-room-manager">
//       <div className="filters">
//         <div className="date-filters">
//           <label htmlFor="check-in">Check-in:</label>
//           <input
//             type="date"
//             id="check-in"
//             value={checkInDate}
//             onChange={handleCheckInChange}
//           />
//           <label htmlFor="check-out">Check-out:</label>
//           <input
//             type="date"
//             id="check-out"
//             value={checkOutDate}
//             onChange={handleCheckOutChange}
//           />
//         </div>
//         <div className="room-type-filter">
//           <label htmlFor="room-type">Room Type:</label>
//           <select
//             id="room-type"
//             value={roomType}
//             onChange={handleRoomTypeChange}
//           >
//             <option value="">All</option>
//             <option value="Single Room">Single Room</option>
//             <option value="Double Room">Double Room</option>
//             <option value="Family Room">Family Room</option>
//           </select>
//         </div>
//       </div>
//       <div className="room-listt">
//         {filteredRooms.map((room) => (
//           <div key={room.id} className={`room-card room-type-${room.typeRoom}`}>
//             {room.id}
//           </div>
//         ))}
//       </div>
//       <div className="add-room">
//         <button onClick={handleAddRoom}>Add Room</button>
//       </div>
//     </div>
//   );
// };

// export default HotelRoomManager;
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const HotelRoomManager = () => {
  const [rooms, setRooms] = useState([]);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [roomType, setRoomType] = useState("");
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8080/hotelManagement/rooms", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setRooms(data));
  }, []);

  const fetchAvailableRooms = () => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8080/hotelManagement/rooms/available", {
        params: {
          checkIn: checkInDate,
          checkOut: checkOutDate,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setRooms(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the available rooms!",
          error
        );
      });
  };

  const handleCheckInChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckOutChange = (e) => {
    setCheckOutDate(e.target.value);
  };

  const handleRoomTypeChange = (e) => {
    setRoomType(e.target.value);
  };

  const handleAddRoom = () => {
    history.push(`/admin/createRoom`);
  };

  const handleRoomClick = (id) => {
    history.push(`/admin/updateRoom/${id}`);
  };

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      fetchAvailableRooms();
    }
  }, [checkInDate, checkOutDate]);

  const filteredRooms = rooms.filter((room) => {
    if (roomType === "") return true;
    return room.typeRoom === roomType;
  });

  return (
    <div className="hotel-room-manager">
      <div className="filters">
        <div className="date-filters">
          <label htmlFor="check-in">Check-in:</label>
          <input
            type="date"
            id="check-in"
            value={checkInDate}
            onChange={handleCheckInChange}
          />
          <label htmlFor="check-out">Check-out:</label>
          <input
            type="date"
            id="check-out"
            value={checkOutDate}
            onChange={handleCheckOutChange}
          />
        </div>
        <div className="room-type-filter">
          <label htmlFor="room-type">Room Type:</label>
          <select
            id="room-type"
            value={roomType}
            onChange={handleRoomTypeChange}
          >
            <option value="">All</option>
            <option value="Single Room">Single Room</option>
            <option value="Double Room">Double Room</option>
            <option value="Family Room">Family Room</option>
          </select>
        </div>
      </div>
      <div className="room-list">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className={`room-card room-type-${room.typeRoom}`}
            onClick={() => handleRoomClick(room.id)}
          >
            {room.id}
          </div>
        ))}
      </div>
      <div className="add-room">
        <button onClick={handleAddRoom}>Add Room</button>
      </div>
    </div>
  );
};

export default HotelRoomManager;
