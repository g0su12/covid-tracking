import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card } from './Card';
import "./home.scss";
import React from 'react';
export const Home = () => {
    const [countryy, setCountry] = useState('Global');
    const [response, setData] = useState({});
    const [dataSearchBox, setdataSearchBox] = useState([]);
    const [searchData, setSearch] = useState([]);
    let res = [];
    useEffect(() => {
        axios.get('https://api.covid19api.com/summary')
            .then(res => {
                setdataSearchBox(res.data.Countries)
                if (countryy === 'Global'){
                    setData({...res.data.Global});
                }else{
                    setData(res.data.Countries.find( country => {
                        return country.Country === countryy;
                    }));
                }
            })
            .catch((error) => {
                console.log(error);
            });    
    }, [countryy]);
    function handleInputChange(e) {
        res = []
        document.getElementById('listSearch').style.display = 'block';
        dataSearchBox.map( country => {
            if(country.Slug.indexOf(e.toLowerCase()) !== -1 && e.length > 1){
                res.push(country.Country)
            };
        });
        setSearch(res)
    }
    function handleRenderData(country) {
        document.getElementById('myInput').value = '';
        document.getElementById('listSearch').style.display = 'none';
        setCountry(country)
    }
    return (
        <div className="home">
            <div className="home__title">
                <div className="search">
                    <input onChange={(e) => handleInputChange(e.target.value)} type="text" id="myInput" placeholder="search for country..."></input>
                    <ul id='listSearch' className="searchSugg">
                        {searchData.map( country => {
                            return <li onClick={() => handleRenderData(country)} className="item" key={country}>{country}</li>
                        })}   
                    </ul>
                </div>
                <h2 className="title">
                    {countryy}
                </h2>
            </div>
            <div className="home__cards">
                <Card
                    name = "NEW CONFIRMED: "
                    data = {response.NewConfirmed}
                />
                <Card
                    name = "TOTAL CONFIRMED: "
                    data = {response.TotalConfirmed}
                />
                <Card
                    name = "NEW DEATHS: "
                    data = {response.NewDeaths}
                />
                <Card
                    name = "TOTAL DEATHS: "
                    data = {response.TotalDeaths}
                />
                <Card
                    name = "NEW RECOVERED: "
                    data = {response.NewRecovered}
                />
                <Card
                    name = "Total RECOVERED: "
                    data = {response.TotalRecovered}
                />
            </div>
            <div className='home__description'>
                Time update: {response.Date}
            </div>
        </div>
    )
}