const ProfileBar = () => {
  return (
    
      <div className="h-14 bg-black rounded-lg flex items-center justify-between">
        <a href="/">
          <img className="ml-4 h-8 rounded-full" src="../src/assets/profile_images/profile1.png" alt="profile" />
        </a>
        <ul className="flex gap-4 mr-4">
          <li>
            <a href="/">
              <img className="h-6 filter invert" src="../src/assets/icons/status.png" alt="/" />
            </a>
          </li>
          <li>
            <a href="/">
              <img className="h-6 filter invert" src="../src/assets/icons/dots.png" alt="/" />
            </a>
          </li>
          <li>
            <a href="/">
              <img className="h-6 filter invert" src="../src/assets/icons/new-message.png" alt="/" />
            </a>
          </li>
        </ul>
      </div>
    
  );
};

export default ProfileBar;