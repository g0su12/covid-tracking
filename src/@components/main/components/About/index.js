import "./about.scss";
import React from 'react';
export const About = () => {
    return (
        <div className="about">
            <div className="about__title">
                <h3 className="title">
                    About COVID-Tracker
                </h3>
            </div>
            <div className="about__description">
                <p>COVID Tracker is a project based on data taken from disease.sh that includes information about the worldwide COVID-19 epidemic</p>
                <p>It acts as a portal for the public to keep track of the latest news development about the COVID-19, alongside collecting data for further analysis. All the contents are handpicked, filtered, and curated by volunteers to our best extent to ensure that sources are reliable with minimal hoaxes and fake news, in the best benefit of the public.</p>
                <p>We aim to use technology and make information more accessible, gather talented people all around the world to win the fight!</p>
            </div>
        </div>
    )
}