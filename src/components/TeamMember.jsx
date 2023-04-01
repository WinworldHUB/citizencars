import React from "react";
import { Link } from "react-router-dom";

const TeamMember = React.forwardRef((props, ref) => {
  const { pic, name, role } = props;
  return (
    <div className="team-3" ref={ref}>
      <div className="thumb">
        <img src={pic} alt="agent" className="img-fluid w-100" />
      </div>
      <div className="info border-primary border-top">
        <h5>
          <Link to="/about">{name}</Link>
        </h5>
        <p className="text-uppercase text-muted text-sm">{role}</p>
      </div>
    </div>
  );
});

TeamMember.displayName = "TeamMember";
export default TeamMember;
