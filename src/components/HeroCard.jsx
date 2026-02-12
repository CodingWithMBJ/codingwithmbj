import React from "react";
import { profile } from "../data/profile";

function HeroCard() {
  const {
    myName,
    fullName,
    handle,
    location,
    availability,
    image,
    bio,
    skills,
  } = profile || {};

  return (
    <section className="hero">
      <article className="hero-card">
        <header className="hero-header">
          <div className="hero-identity-container">
            <h1 className="hero-name">Hello, I'm {myName}</h1>
            <p className="hero-identity">
              <span className="">{fullName}</span> |
              <span className="hero-handle">{handle}</span>
            </p>
            <p className="hero-bio">{bio}</p>
          </div>

          <figure className="hero-avatar">
            <img src={image} alt={`${myName} profile`} className="hero-img" />
          </figure>
        </header>

        <section className="hero-meta">
          <p className="hero-meta-item">
            <span className="hero-meta-label">📍</span>
            <span className="hero-meta-text">{location}</span>
          </p>

          <p className="hero-meta-item">
            <span className="hero-status-dot" aria-hidden="true" />
            <span className="hero-meta-text">{availability}</span>
          </p>
        </section>

        <ul className="hero-skills">
          {Array.isArray(skills) &&
            skills.map((skill) => (
              <li className="hero-chip" key={skill}>
                {skill}
              </li>
            ))}
        </ul>
      </article>
    </section>
  );
}

export default HeroCard;
