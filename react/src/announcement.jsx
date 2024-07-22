import React from "react";
import { IconButton } from "@mui/material";
import { Facebook, Instagram, GitHub } from "@mui/icons-material";
import './announcement.css';

function Announcement() {
    return (
        <div className="announcement-bar">
            <div className="announcement-content">
                <div className="announcement-greeting">
                    <span>WELCOME TO FOOTBALL FORUM & SHOP!</span>
                </div>
            </div>
            <div className="social-icons">
                <IconButton
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="announcement-icon primary"
                >
                    <Facebook fontSize="medium" />
                </IconButton>
                <IconButton
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="announcement-icon secondary"
                >
                    <Instagram fontSize="medium" />
                </IconButton>
                <IconButton
                    href="https://www.github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="announcement-icon default"
                >
                    <GitHub fontSize="medium" />
                </IconButton>
            </div>
        </div>
    );
}

export default Announcement;
