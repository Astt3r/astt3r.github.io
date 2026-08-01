import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const topIcons = [
    { name: 'This Computer', icon: thisComputerIcon },
    { name: 'My Projects', icon: folderIcon, onClick: () => navigate('/projects') },
    { name: 'Contact Me', icon: notepadIcon, onClick: () => navigate('/contact') },
    { name: 'Programs', icon: programIcon },
    { name: 'Discord', icon: discordIcon, href: 'https://discord.com/users/348587853746520064' },
    { name: 'Aseprite', icon: asepriteIcon },
    { name: 'Steam', icon: steamIcon },
    { name: 'Brave', icon: chromeIcon }
  ];

  const handleActivate = (item) => {
    if (item.onClick) item.onClick();
    else if (item.href) window.open(item.href, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className="desktop-icons desktop-icons-top">
        {topIcons.map((item, index) => {
          const isInteractive = Boolean(item.onClick || item.href);
          return (
            <div
              key={index}
              className="desktop-icon"
              style={{ cursor: isInteractive ? 'pointer' : 'default' }}
              role={isInteractive ? 'button' : undefined}
              tabIndex={isInteractive ? 0 : undefined}
              onClick={isInteractive ? () => handleActivate(item) : undefined}
              onKeyDown={isInteractive ? (e) => { if (e.key === 'Enter') handleActivate(item); } : undefined}
            >
              <img
                src={item.icon}
                alt={item.name}
                className="desktop-icon-image"
              />
              <span className="desktop-icon-label">{item.name}</span>
            </div>
          );
        })}
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
