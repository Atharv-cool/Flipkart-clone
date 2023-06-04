import React from "react";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import LiveHelpSharpIcon from "@mui/icons-material/LiveHelpSharp";
import TrendingUpSharpIcon from "@mui/icons-material/TrendingUpSharp";
import DownloadSharpIcon from "@mui/icons-material/DownloadSharp";
import "./Moret.css";
const Moret = () => {
  return (
    <div className="moret">
      <div className="moret__in">
        <NotificationsSharpIcon />
        <p>Notification Preferences</p>
      </div>
      <hr />
      <div className="moret__in">
        <LiveHelpSharpIcon />
        <p>24*7 Customer Care</p>
      </div>
      <hr />
      <div className="moret__in">
        <TrendingUpSharpIcon />
        <p>Advertise</p>
      </div>
      <hr />
      <div className="moret__in">
        <DownloadSharpIcon />
        <p>Download App</p>
      </div>
    </div>
  );
};

export default Moret;
