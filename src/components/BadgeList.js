import React from "react";
import "./styles/BadgeList.css";

class BadgeList extends React.Component {
	render() {
		return (
			<ul className ="badge__container">
				{this.props.badgeList.map((badge) => {
        return(
					<li key ={badge.id} className="container-fluid badge__list">
                <img  className="img-fluid badge__list-img-avatar" src={badge.avatarUrl} alt="imagen de la lista"/>
              <div className="container-fluid">
                <p className="badge__firstName">{badge.firstName} {badge.lastName}</p>
                <a href="https://github.com/Sparragus/platzi-badges/blob/master/src/pages/styles/Badges.css"> {badge.twitter}</a>
                <p>{badge.jobTitle}</p>
              </div>
          </li>
        );
				})}
			</ul>
		);
	}
}

export default BadgeList;
