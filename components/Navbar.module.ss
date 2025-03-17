.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #121212;
  color: white;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.logo a {
  font-family: 'Press Start 2P', cursive;
  font-size: 1.5rem;
  color: #20C6B7;
  text-decoration: none;
  transition: color 0.3s ease;
}

.logo a:hover {
  color: #4D9ABF;
}

.navItems {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navItems li {
  margin-left: 1.5rem;
  font-family: 'Press Start 2P', cursive;
  font-size: 0.8rem;
}

.navItems li a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.navItems li a:hover {
  color: #20C6B7;
}

.active a {
  color: #20C6B7 !important;
  border-bottom: 2px solid #20C6B7;
  padding-bottom: 5px;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    padding: 1rem;
  }
  
  .logo {
    margin-bottom: 1rem;
  }
  
  .navItems {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
  
  .navItems li {
    margin: 0.5rem 0;
  }
}