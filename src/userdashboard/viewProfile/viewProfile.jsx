import React, { useState, useEffect, useContext } from "react";
import { useFormik } from "formik";
import { createUpdateProfile, getUserById } from "../../Api/api";
import "./viewProfile.scss";
import dp from "../../Components/assets/dp1.png";
import camera from "../../Components/assets/camera.png";
import { notifyError, notifySuccess } from "../../utils/helpers";
import { AuthContext } from "../../Components/Context/appContext";

const ViewProfile = () => {
  const { user, login } = useContext(AuthContext);
  const [dpImage, setDpImage] = useState(dp);
  useEffect(() => {
    if (user && user.id) {
      console.log(`User ID: ${user.id}`);
    }
  }, [user]);
  useEffect(() => {
    if (user && user.profileImage) {
      setDpImage(user.profileImage);
    }
  }, [user]);
  const formik = useFormik({
    initialValues: {
      username: user?.username || "",
      email: user?.email || "",
      password: "",
      contactNo: user?.contactNo || "",
      address: user?.address || "",
    },
    onSubmit: async (values) => {
      try {
        const userId = user.id;
        const profileData = { ...values };
        const response = await createUpdateProfile(userId, profileData);
        login(response.data); // Update user data in context
        notifySuccess("Profile updated successfully", 1000);
      } catch (error) {
        notifyError(error.response.data.message, 1000);
      }
    },
    enableReinitialize: true,
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setDpImage(imageUrl);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="view-profile-main">
      <h4 className="text-center">Edit Profile</h4>
      <div className="user-id-conatainer d-flex">
        <div className="left">
          <img src={dpImage} alt="Profile" className="dp" />
          <label htmlFor="file-upload" className="camera-icon cursor-pointer">
            <img src={camera} alt="Upload" />
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
        </div>
        <div className="right d-flex flex-column ">
          <h5 className="fw-bold">{user.username}</h5>
          <p>{user.email}</p>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit} className="bottom mt-5">
        <div className="d-flex gap-2 bottom-inner">
          <input
            type="text"
            placeholder="UserName"
            className="user-input"
            {...formik.getFieldProps("username")}
          />
          <input
            type="email"
            placeholder="Email"
            className="user-input"
            {...formik.getFieldProps("email")}
          />
        </div>
        <div className="d-flex gap-2 bottom-inner">
          <input
            type="password"
            placeholder="Update Password"
            className="user-input"
            {...formik.getFieldProps("password")}
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="user-input"
            {...formik.getFieldProps("contactNo")}
          />
        </div>
        <div className="d-flex gap-2 bottom-inner mt-2">
          <textarea
            placeholder="Address"
            className="user-input"
            {...formik.getFieldProps("address")}
          ></textarea>
        </div>
        <button type="submit" className="mt-3">
          Save
        </button>
      </form>
    </div>
  );
};

export default ViewProfile;
