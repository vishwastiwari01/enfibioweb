"use client";

import React from 'react';
import styled from 'styled-components';

const SocialCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <span>Connect</span>
        <a className="social-link instagram" href="https://www.instagram.com/enfibio_tech?igsh=MXMwdnRrMGhkNDA3aQ==" target="_blank" rel="noopener noreferrer">
          {/* Instagram Logo */}
          <svg fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
            </g>
          </svg>
        </a>
        <a className="social-link discord" href="mailto:enfibiotechnologiespvtltd@gmail.com">
          {/* Email Icon */}
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </a>
        <a className="social-link github" href="https://github.com/enfibiotech" target="_blank" rel="noopener noreferrer">
          {/* Github Logo */}
          <svg fill="currentColor" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
          </svg>
        </a>
        <a className="social-link x" href="https://x.com/Enfibio_Tech" target="_blank" rel="noopener noreferrer">
          {/* X Logo */}
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card svg {
    height: 20px;
  }

  .card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--surface-2);
    border: 1px solid var(--border);
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    overflow: hidden;
    height: 50px;
    width: 250px;
  }

  .card::before, .card::after {
    position: absolute;
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;
    transition: 0.25s linear;
    z-index: 1;
  }

  .card::before {
    content: "";
    left: 0;
    justify-content: flex-end;
    background-color: var(--primary);
    opacity: 0.8;
  }

  .card::after {
    content: "";
    right: 0;
    justify-content: flex-start;
    background-color: var(--accent);
    opacity: 0.9;
  }

  .card:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.08), 0 10px 10px rgba(0,0,0,0.06);
    border: 1px solid rgba(37, 99, 235, 0.3);
  }

  .card:hover span {
    opacity: 0;
    z-index: -3;
  }

  .card:hover::before {
    opacity: 0;
    transform: translateY(-100%);
  }

  .card:hover::after {
    opacity: 0;
    transform: translateY(100%);
  }

  .card span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: var(--text);
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-weight: 700;
    opacity: 1;
    transition: opacity 0.25s;
    z-index: 2;
  }

  .card .social-link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    height: 100%;
    color: var(--text-muted);
    font-size: 24px;
    text-decoration: none;
    transition: 0.25s;
  }

  .card .social-link svg {
    fill: #9ca3af;
    stroke: #9ca3af;
    transform: scale(1);
    transition: all 0.3s ease;
  }
  
  .card .social-link.x svg {
    fill: #9ca3af;
    stroke: none;
  }

  .card .social-link.discord svg {
    stroke: #9ca3af;
    fill: none;
  }

  .card .social-link:hover {
    background-color: rgba(37, 99, 235, 0.1);
    animation: bounce_613 0.4s linear;
  }

  .card .social-link:hover svg {
    fill: var(--text);
    stroke: var(--text);
  }
  
  .card .social-link.discord:hover svg {
    stroke: var(--text);
    fill: none;
  }

  @keyframes bounce_613 {
    40% { transform: scale(1.4); }
    60% { transform: scale(0.8); }
    80% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`;

export default SocialCard;
