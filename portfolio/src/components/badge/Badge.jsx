import React from "react";

const Badge = (props) => {
    return (
        <>
            <div className="badge__container--base">
                <a target="_blank" rel="noopener noreferrer" href={props.data.url}>
                    <img className="badge__image--base" src={props.data.image} alt="" />
                </a>
            </div>
        </>
    );
};
export default Badge;
