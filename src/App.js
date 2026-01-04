import React, { Component } from "react";
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import ProfileGenerator from './ProfileGenerator';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ''
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }
  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="app tc">
        <header className="header">
          <h1 className="header-title">Mouad Benaich</h1>
          <h2 className="header-title">
            Senior Web Dev crafting interfaces and Web Apps that command admiration
          </h2>
          <p className="header-sub">
            Elegant design, performance‑driven code, and experiences that feel alive.
          </p>
        </header>
        {/* Search panel */}
        <section className="panel">
          <SearchBox searchChange={this.onSearchChange} />
        </section>
        <div className="cards-grid-fallback">
          <CardList robots={filteredRobots} />
        </div>
        {/* AI Profile Generator */}
        <section className="profile-generator">
          <h2 className="skills-title">AI‑Powered Profile Generator</h2>
        </section>
        <section className="profile-generator">
          {/* ProfileGenerator handles its own refresh button and grid */}
          <ProfileGenerator />
        </section>
        {/* Skills + confidence pitch */}
        <section className="skills">
          <h2 className="skills-title">React.js Skills</h2>
          <div className="skills-list">
            <span className="skill-chip">React 18 + Concurrent UI</span>
            <span className="skill-chip">Component Architecture</span>
            <span className="skill-chip">State Management</span>
            <span className="skill-chip">Accessibility</span>
            <span className="skill-chip">Performance Profiling</span>
            <span className="skill-chip">Responsive Design</span>
            <span className="skill-chip">Testing</span>
          </div>
          <p className="pitch">
            I deliver interfaces and Apps that feel effortless—clean architecture, subtle motion,
            and dependable performance. If you want a React developer who sweats the details
            and inspires admiration, let’s build something exceptional together.
          </p>
        </section>
        <footer className="footer">
          © 2026 Mouad Benaich — Senior Web Dev
        </footer>
      </div>
    );
  }
}
export default App;
