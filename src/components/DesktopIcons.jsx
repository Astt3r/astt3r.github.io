import React from 'react';
import thisComputerIcon from '../assets/icons/this_computer.png';
import recycleBinIcon from '../assets/icons/recycle_bin_empty.png';
import folderIcon from '../assets/icons/folder_closed.png';
import notepadIcon from '../assets/icons/notepad.png';
import programIcon from '../assets/icons/program.png';
import discordIcon from '../assets/icons/discord.png';
import asepriteIcon from '../assets/icons/aseprite.png';
import steamIcon from '../assets/icons/steam.png';
import chromeIcon from '../assets/icons/chrome.png';

const DesktopIcons = () => {
  const topIcons = [
    { name: 'This Computer', icon: thisComputerIcon },
    { name: 'My Projects', icon: folderIcon },
    { name: 'Contact Me', icon: notepadIcon },
    { name: 'Programs', icon: programIcon },
    { name: 'Discord', icon: discordIcon },
    { name: 'Aseprite', icon: asepriteIcon },
    { name: 'Steam', icon: steamIcon },
    { name: 'Brave', icon: chromeIcon }
  ];

  return (
    <>
      <div className="desktop-icons desktop-icons-top">
        {topIcons.map((item, index) => (
          <div
            key={index}
            className="desktop-icon"
            style={{ cursor: 'default' }}
          >
            <img 
              src={item.icon} 
              alt={item.name}
              className="desktop-icon-image"
            />
            <span className="desktop-icon-label">{item.name}</span>
          </div>
        ))}
      </div>
      
      <div className="desktop-icons desktop-icons-bottom">
        <div
          className="desktop-icon"
          style={{ cursor: 'default' }}
        >
          <img 
            src={recycleBinIcon} 
            alt="Recycle Bin"
            className="desktop-icon-image"
          />
          <span className="desktop-icon-label">Recycle Bin</span>
        </div>
      </div>
    </>
  );
};

export default DesktopIcons;
