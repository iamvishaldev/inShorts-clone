import React, { useState, useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import axios from 'axios';
import NewsContent from './components/NewsContent/NewsContent';
import Footer from './components/Footer/Footer';


function App() {

    const [category, setCategory] = useState("general");

    const [newsArray,setNewsArray] = useState([]);

    const [newsResults,setNewsResults] = useState()

    const fetchNewsApi = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}`)
            console.log(response)
            setNewsArray(response.data.articles)
            setNewsResults(response.data.totalResults)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchNewsApi()
    }, [category,newsResults])

    return (
        <div className="App">
            <Navbar setCategory={setCategory} />
            <NewsContent newsArray={newsArray} newsResults={newsResults}/>
            <Footer/>
        </div>
    );
}

export default App;
