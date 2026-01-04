import React, { useState, useEffect } from "react";

function ProfileGenerator() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch profiles from RandomUser API
  const fetchProfiles = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://randomuser.me/api/?results=6");
      const data = await res.json();
      setProfiles(data.results);
    } catch (err) {
      console.error("Error fetching profiles:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  // Copy profile info to clipboard
  const copyInfo = (profile) => {
    const info = `${profile.name.first} ${profile.name.last}\n${profile.email}\n${profile.location.city}, ${profile.location.country}`;
    navigator.clipboard.writeText(info);
    alert("Profile info copied!");
  };

  return (
    <div>
      <div className="refresh-bar">
        <button className="refresh-btn" onClick={fetchProfiles}>
          🔄 Refresh Profiles
        </button>
      </div>

      {/* Always render the grid wrapper */}
      <div className="cards-grid">
        {loading ? (
          <p className="pitch">Loading fresh AI profiles...</p>
        ) : (
          profiles.map((profile, idx) => (
            <div key={idx} className="ma2 shadow-5 profile-card">
              <div className="img-overlay">
                <img src={profile.picture.large} alt={`${profile.name.first}`} />
              </div>
              <div className="content">
                <h2>{profile.name.first} {profile.name.last}</h2>
                <p>{profile.email}</p>
                <p>{profile.location.city}, {profile.location.country}</p>
                <button
                  className="copy-btn"
                  onClick={() => copyInfo(profile)}
                >
                  📋 Copy Info
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProfileGenerator;
