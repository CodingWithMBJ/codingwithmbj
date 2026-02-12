import React from "react";
import { profile } from "../data/profile";

function ProfileCard() {
  const { name, handle, location, availability, image, bio, skills } =
    profile || {};

  return (
    <aside className="profile">
      <article className="profile-card">
        <header className="profile-top">
          <figure className="profile-avatar">
            <img src={image} alt={`${name} profile`} className="profile-img" />
          </figure>

          <div className="profile-identity">
            <h1 className="profile-name">{name}</h1>
            <p className="profile-handle">{handle}</p>
          </div>
        </header>

        <p className="profile-bio">{bio}</p>

        <div className="profile-meta">
          <div className="profile-meta-item">
            <span className="profile-meta-label">📍</span>
            <span className="profile-meta-text">{location}</span>
          </div>

          <div className="profile-meta-item">
            <span className="profile-status-dot" aria-hidden="true" />
            <span className="profile-meta-text">{availability}</span>
          </div>
        </div>

        <div className="profile-skills">
          {Array.isArray(skills) &&
            skills.map((skill) => (
              <span className="profile-chip" key={skill}>
                {skill}
              </span>
            ))}
        </div>
      </article>
    </aside>
  );
}

export default ProfileCard;
