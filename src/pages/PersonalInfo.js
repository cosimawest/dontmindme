import React, { useState, useMemo, useCallback } from 'react';
import DataListInput from "react-datalist-input";

import '../pages/style.css';
import '../App.css';

import Footer from '../components/Footer.js';
import NavBar from '../components/NavBarTwo.js';
import TagList from '../components/TagList.js';

import BubbleIcon03 from '../assets/bubble-icon-03.svg';
import BackArrow from '../assets/back-arrow.svg';


const coursesCatalog = require('../components/courses.json');
const topicsCatalog = require('../components/topics.json');
const servicesCatalog = require('../components/services.json');


function PersonalInfo(props) {
    const [courses, setCourses] = useState([]); // to be initialized with user's chosen courses
    const [topics, setTopics] = useState([]);
    const [services, setServices] = useState([]);

    const handleTags = (data, arr, setArr) => {
        const temp = arr;
        setArr(temp => [...temp, data]);
    }

    const onSelect = useCallback((selectedItem) => {
        if (selectedItem.someAdditionalValue === "course") handleTags(selectedItem.code, courses, setCourses);
        else if (selectedItem.someAdditionalValue === "topic") handleTags(selectedItem.topic, topics, setTopics);
        else if (selectedItem.someAdditionalValue === "service") handleTags(selectedItem.service, services, setServices);
      }, []);

    const courseMemo = useMemo(
        () =>
            coursesCatalog.Courses.map((oneItem) => ({
            label: oneItem.code,
            key: oneItem.name,
            someAdditionalValue: oneItem.type,
            ...oneItem,
            })),
        [coursesCatalog]
    );

    const topicMemo = useMemo(
        () =>
            topicsCatalog.Topics.map((oneItem) => ({
            label: oneItem.topic,
            key: oneItem.id,
            someAdditionalValue: oneItem.type,
            ...oneItem,
            })),
        [topicsCatalog]
    );

    const serviceMemo = useMemo(
        () =>
            servicesCatalog.Services.map((oneItem) => ({
            label: oneItem.service,
            key: oneItem.id,
            someAdditionalValue: oneItem.type,
            ...oneItem,
            })),
        [servicesCatalog]
    );




    return (
        <div className="profile">

        <div className="profile-inner">
            <div className="spacer"></div>

            <div className="bubble-top-right">
                <img src={BubbleIcon03}/>
            </div>

            <div className="my-dashboard__inner inner">
                <div className="inline">
                    <a href="/dashboard"><img src={BackArrow} className="backarrow"/></a>
                    <h2 class="dropshadow">My Dashboard</h2>
                </div>

                <div className="side-by-side dashboard-secondary-title">
                    <h3>Personal Info</h3>
                </div>         
            </div>

            <form className="my-dashboard__inner inner">
                <div className="dashboard-info-form-section">
                    <div className="dashboard-info-form-title">Basic Info</div>
                    <div className="dashboard-info-form-outer">
                        <div className="dashboard-info-form">
                            <tr>
                                <td className="dashboard-info-form-label"><label>Name:</label></td>
                                <td className="dashboard-info-form-input"><input placeholder="Michael Gold" type="text"/></td>
                            </tr>
                            <tr>
                                <td className="dashboard-info-form-label"><label>University:</label></td>
                                <td className="dashboard-info-form-input"><input type="text"/></td>
                            </tr>
                            <tr>
                                <td className="dashboard-info-form-label"><label>Graduation Year:</label></td>
                                <td className="dashboard-info-form-input"><input type="text"/></td>
                            </tr>
                            <tr>
                                <td className="dashboard-info-form-label"><label>Major:</label></td>
                                <td className="dashboard-info-form-input"><input type="text"/></td>
                            </tr>                    
                        </div>
                    </div>
                </div>

                <div className="dashboard-info-form-section">
                    <div className="dashboard-info-form-title">Contact</div>
                    <div className="dashboard-info-form-outer">
                        <div className="dashboard-info-form">
                            <tr>
                                <td className="dashboard-info-form-label"><label>School Email:</label></td>
                                <td className="dashboard-info-form-input"><input type="text"/></td>
                            </tr>
                            <tr>
                                <td className="dashboard-info-form-label"><label>Personal Email (optional):</label></td>
                                <td className="dashboard-info-form-input"><input type="text"/></td>
                            </tr>                    
                        </div>
                    </div>
                </div>

                <div className="dashboard-info-form-section">
                    <div className="dashboard-info-form-title">Interests</div>
                    <div className="dashboard-info-form-outer">
                        <div className="dashboard-info-form">
                            <tr>
                                <td className="dashboard-info-form-label"><label>Courses:</label></td>
                                <td className="dashboard-info-form-input">
                                    <DataListInput
                                        placeholder="Search for your courses"
                                        items={courseMemo}
                                        onSelect={onSelect}
                                        requiredInputLength={1}
                                        clearInputOnSelect={true}
                                        dropDownLength={7}
                                        />
                                </td>
                            </tr> 
                            <tr className="tags-container">
                                <td className="dashboard-info-form-label"></td>
                                <td className="dashboard-info-form-input tag-container">
                                    <TagList tags={courses} setTags={setCourses}/>
                                </td>
                            </tr>                 
                        </div>
                        <div className="dashboard-info-form">
                        <tr>
                                <td className="dashboard-info-form-label"><label>Topics:</label></td>
                                <td className="dashboard-info-form-input">
                                    <DataListInput
                                        placeholder="Search for topics (ex: Biology, Art, etc)"
                                        items={topicMemo}
                                        onSelect={onSelect}
                                        requiredInputLength={1}
                                        clearInputOnSelect={true}
                                        dropDownLength={7}
                                        />
                                </td>
                            </tr> 
                            <tr className="tags-container">
                                <td className="dashboard-info-form-label"></td>
                                <td className="dashboard-info-form-input tag-container">
                                    <TagList tags={topics} setTags={setTopics}/>
                                </td>
                            </tr>                   
                        </div>
                        <div className="dashboard-info-form">
                        <tr>
                                <td className="dashboard-info-form-label"><label>Services:</label></td>
                                <td className="dashboard-info-form-input">
                                    <DataListInput
                                        placeholder="Search for services like tutoring"
                                        items={serviceMemo}
                                        onSelect={onSelect}
                                        requiredInputLength={1}
                                        clearInputOnSelect={true}
                                        dropDownLength={7}
                                        />
                                </td>
                            </tr> 
                            <tr className="tags-container">
                                <td className="dashboard-info-form-label"></td>
                                <td className="dashboard-info-form-input tag-container">
                                    <TagList tags={services} setTags={setServices}/>
                                </td>
                            </tr>                  
                        </div>

                        <div className="flex-right">
                            <button type="submit">Save changes</button>
                        </div>
                    </div>
                </div>
            </form>
            
            <Footer/>
        </div>      
        </div>
    );
}

export default PersonalInfo;
