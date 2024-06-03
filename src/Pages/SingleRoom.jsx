import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Banner from "../Components/Banner/Banner";
import StyledHero from "../Components/StyledHero/StyledHero";
import defaultBcg from "../assets/img/jpeg/room-1.jpeg";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export default function SingleRoom() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  const createBooking = async () => {
    try {
      const token = localStorage.getItem("token");
      const idUser = localStorage.getItem("idUser");
      const checkInDateString = new Date(checkInDate);
      const checkOutDateString = new Date(checkOutDate);
      const bookingData = {
        room: {
          id: room.id,
        },
        user: {
          id: idUser,
        },
        checkIn: checkInDateString,
        checkOut: checkOutDateString,
        price: room.pricePerDay,
        status: false,
      };

      const response = await fetch(
        "http://localhost:8080/hotelManagement/booking/create-booking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(bookingData),
        }
      );

      if (response.ok) {
        console.log("Booking created successfully!");
        alert("Booking successfully!");
      } else {
        console.error("Error creating booking:", response.status);
      }
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };

  useEffect(() => {
    const fetchRoomData = async () => {
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
        setRoom(data);
        console.log(data);
        console.log(id);
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };

    fetchRoomData();
  }, [id]);

  if (!room) {
    return (
      <div className="error">
        <h3>no such room could be found!</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }

  const { typeRoom, description, images, facilities, pricePerDay } = room;

  return (
    <>
      <StyledHero img={defaultBcg}>
        <Banner title={` room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {images.map((image, index) => (
            //{/* <img key={index} src={image} alt={`Images ${index + 1}`} /> */}
            <img
              key={index}
              src={`http://localhost:8080/hotelManagement/rooms/img/${image}`}
              alt={`Images ${index + 1}`}
            />
          ))}
        </div>
        <div className="single-room-info">
          <article className="room-description">
            <h3>{typeRoom}</h3>
            <p>{description}</p>
          </article>
          <article className="room-info">
            <h6>Price: ${pricePerDay} per day</h6>
            <h6>Facilities:</h6>
            <ul className="room-facilities">
              {facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
          </article>
        </div>
        <div className="booking-container">
          <div className="booking-dates">
            <div className="checkin-date">
              <label htmlFor="checkin-date">Check-in Date</label>
              <Flatpickr
                id="checkin-date"
                value={checkInDate}
                onChange={handleCheckInDateChange}
                options={{
                  dateFormat: "Y-m-d",
                  minDate: "today",
                }}
              />
            </div>
            <div className="checkout-date">
              <label htmlFor="checkout-date">Check-out Date</label>
              <Flatpickr
                id="checkout-date"
                value={checkOutDate}
                onChange={handleCheckOutDateChange}
                options={{
                  dateFormat: "Y-m-d",
                  minDate: "today",
                }}
              />
            </div>
          </div>
          <div className="book-now-container">
            <button className="book-now-btn" onClick={createBooking}>
              Book Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
// import React, { Component } from "react";

// import { Link } from "react-router-dom";

// // import assets
// import defaultBcg from "../assets/img/jpeg/room-1.jpeg";

// // import components
// import Banner from "../Components/Banner/Banner";
// import { RoomContext } from "../Context/Context";
// import StyledHero from "../Components/StyledHero/StyledHero";

// export default class SingleRoom extends Component {
//   constructor(props) {
//     super(props);
//     // console.log(this.props);
//     this.state = {
//       slug: this.props.match.params.slug,
//       defaultBcg,
//     };
//   }

//   static contextType = RoomContext;
//   // componentDidMount() {}

//   render() {
//     const { getRoom } = this.context;
//     const room = getRoom(this.state.slug);

//     if (!room) {
//       return (
//         <div className="error">
//           <h3>no such room could be found!</h3>
//           <Link to="/rooms" className="btn-primary">
//             back to rooms
//           </Link>
//         </div>
//       );
//     }

//     const {
//       name,
//       description,
//       capacity,
//       size,
//       price,
//       extras,
//       breakfast,
//       pets,
//       images,
//     } = room;

//     const [mainImg, ...defaultImg] = images;

//     return (
//       <>
//         <StyledHero img={mainImg || this.state.defaultBcg}>
//           <Banner title={`${name} room`}>
//             <Link to="/rooms" className="btn-primary">
//               back to rooms
//             </Link>
//           </Banner>
//         </StyledHero>

//         <section className="single-room">
//           <div className="single-room-images">
//             {defaultImg.map((item, index) => {
//               return <img key={index} src={item} alt={name} />;
//             })}
//           </div>

//           <div className="single-room-info">
//             <article className="desc">
//               <h3>details:</h3>
//               <p>{description}</p>
//             </article>

//             <article className="info">
//               <h3>information:</h3>
//               <h6>price : ${price}</h6>
//               <h6>size : {size} SQFT</h6>
//               <h6>
//                 max capacity :{" "}
//                 {capacity > 1 ? `${capacity} people` : `${capacity} person`}
//               </h6>
//               <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
//               <h6>{breakfast && "free breakfast included"}</h6>
//             </article>
//           </div>
//         </section>

//         <section className="room-extras">
//           <h6>extras:</h6>
//           <ul className="extras">
//             {extras.map((item, index) => {
//               return <li key={index}> - {item}</li>;
//             })}
//           </ul>
//         </section>
//       </>
//     );
//   }
// }
// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// // import assets
// import defaultBcg from "../assets/img/jpeg/room-1.jpeg";

// // import components
// import Banner from "../Components/Banner/Banner";
// import StyledHero from "../Components/StyledHero/StyledHero";

// export default class SingleRoom extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: this.props.match.params.id, // Assuming you use 'id' instead of 'slug'
//       defaultBcg,
//       room: null,
//       loading: true,
//     };
//   }

//   componentDidMount() {
//     this.fetchRoomData();
//   }

//   fetchRoomData = async () => {
//     try {
//       const response = await axios.get(`/rooms/get-room/${this.state.id}`);
//       this.setState({ room: response.data, loading: false });
//     } catch (error) {
//       console.error("There was an error fetching the room data!", error);
//       this.setState({ loading: false });
//     }
//   };

//   render() {
//     const { room, loading } = this.state;

//     if (loading) {
//       return <div>Loading...</div>;
//     }

//     if (!room) {
//       return (
//         <div className="error">
//           <h3>No such room could be found!</h3>
//           <Link to="/rooms" className="btn-primary">
//             Back to rooms
//           </Link>
//         </div>
//       );
//     }

//     const { typeRoom, description, pricePerDay, images, facilities } = room;

//     const [mainImg, ...defaultImg] = images;

//     return (
//       <>
//         <StyledHero img={mainImg || this.state.defaultBcg}>
//           <Banner title={`${typeRoom} room`}>
//             <Link to="/rooms" className="btn-primary">
//               Back to rooms
//             </Link>
//           </Banner>
//         </StyledHero>

//         <section className="single-room">
//           <div className="single-room-images">
//             {defaultImg.map((item, index) => {
//               return <img key={index} src={item} alt={typeRoom} />;
//             })}
//           </div>

//           <div className="single-room-info">
//             <article className="desc">
//               <h3>Details:</h3>
//               <p>{description}</p>
//             </article>

//             <article className="info">
//               <h3>Information:</h3>
//               <h6>Price : ${pricePerDay}</h6>
//               {/* Add other room information here */}
//             </article>
//           </div>
//         </section>

//         <section className="room-extras">
//           <h6>Extras:</h6>
//           <ul className="extras">
//             {facilities.map((item, index) => {
//               return <li key={index}> - {item}</li>;
//             })}
//           </ul>
//         </section>
//       </>
//     );
//   }
// }
