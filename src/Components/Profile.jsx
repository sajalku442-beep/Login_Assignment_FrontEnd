import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const Profile = () => {
  const { profile, token } = useContext(AppContext);
  const [user, setUser] = useState(null);
  const userPhoto = "https://placehold.co/100x100/5A20C0/ffffff?text=P+X";

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await profile();
      console.log("profile from user", data);
      setUser(data);
    };
    if (token) fetchProfile();
  }, [token, profile]);
   if (!user) return <p className="loading-state">Loading...</p>;

  return (
    <div className="profile-wrapper">
      <div className="profile-header">Account Settings</div>

      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-info-row">
            <div className="profile-photo-wrapper">
              <img
                src={userPhoto}
                alt="Profile Photo"
                className="profile-photo"
              />
              <div className="profile-badge">6</div>
            </div>
            <div className="profile-details">
              <h1 className="profile-name">{user.name}</h1>
              <p className="profile-email">{user.email}</p>
            </div>
          </div>

          <div className="profile-description">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore animi eos magnam adipisci soluta deleniti ipsam in rem
              fuga deserunt!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
