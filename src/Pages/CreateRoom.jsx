import React, { useState } from "react";

const CreateRoom = () => {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [capacity, setCapacity] = useState("");
  const [petsAllowed, setPetsAllowed] = useState(false);
  const [facilities, setFacilities] = useState([]);
  const [images, setImages] = useState({
    image1: null,
    image2: null,
    image3: null,
  });
  const [previewImages, setPreviewImages] = useState({
    image1: null,
    image2: null,
    image3: null,
  });

  const handleImageChange = (index, file) => {
    setImages((prevImages) => ({
      ...prevImages,
      [`image${index + 1}`]: file,
    }));
    setPreviewImages((prevPreviewImages) => ({
      ...prevPreviewImages,
      [`image${index + 1}`]: URL.createObjectURL(file),
    }));
  };

  const handleFacilityChange = (e) => {
    const { value } = e.target;
    if (!facilities.includes(value)) {
      setFacilities([...facilities, value]);
    }
  };

  const handleFacilityRemove = (facility) => {
    setFacilities(facilities.filter((f) => f !== facility));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("typeRoom", type);
    formData.append("description", description);
    formData.append("pricePerDay", price);
    formData.append("maxCapacity", capacity);
    formData.append("allowPet", petsAllowed);
    facilities.forEach((facility) => {
      formData.append("facilities", facility);
    });
    if (images.image1) formData.append("images", images.image1);
    if (images.image2) formData.append("images", images.image2);
    if (images.image3) formData.append("images", images.image3);
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        "http://localhost:8080/hotelManagement/rooms/create-room",
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Room created successfully:", data);
      } else {
        const errorText = await response.text();
        console.error("Error creating room:", errorText);
      }
    } catch (error) {
      console.error("Error creating room:", error);
    }
  };

  return (
    <div className="create-room-container">
      <h2>Create Room</h2>
      <form onSubmit={handleSubmit}>
        <div className="create-room-form-group">
          <label htmlFor="type">Type of Room</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Select type</option>
            <option value="Single Room">Single Room</option>
            <option value="Double Room">Double Room</option>
            <option value="Family Room">Family Room</option>
          </select>
        </div>
        <div className="create-room-form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
          ></textarea>
        </div>
        <div className="create-room-form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="create-room-form-group">
          <label htmlFor="capacity">Max Capacity</label>
          <input
            type="number"
            id="capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
        </div>
        <div className="create-room-form-group">
          <label>
            <input
              type="checkbox"
              checked={petsAllowed}
              onChange={(e) => setPetsAllowed(e.target.checked)}
            />
            Pets Allowed
          </label>
        </div>
        <div className="create-room-form-group">
          <label htmlFor="facilities">Facilities</label>
          <select id="facilities" onChange={handleFacilityChange}>
            <option value="">Select facility</option>
            {["wifi", "parking", "pool", "gym", "spa"].map((facility) => (
              <option key={facility} value={facility}>
                {facility.charAt(0).toUpperCase() + facility.slice(1)}
              </option>
            ))}
          </select>
          <div className="selected-facilities">
            {facilities.map((facility) => (
              <div key={facility} className="facility-item">
                {facility.charAt(0).toUpperCase() + facility.slice(1)}
                <button
                  type="button"
                  onClick={() => handleFacilityRemove(facility)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="create-room-form-group">
          <label>Upload Images</label>
          <div className="create-room-images-upload">
            {[0, 1, 2].map((index) => (
              <div key={index} className="image-upload">
                <input
                  type="file"
                  onChange={(e) => handleImageChange(index, e.target.files[0])}
                />
                {previewImages[`image${index + 1}`] && (
                  <img
                    src={previewImages[`image${index + 1}`]}
                    alt={`Preview ${index + 1}`}
                    className="image-preview"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <button type="submit" className="create-room-submit-btn">
          Create Room
        </button>
      </form>
    </div>
  );
};

export default CreateRoom;
