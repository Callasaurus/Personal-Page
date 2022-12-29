import React from 'react'
import Header from './Header';
import Posts from './Posts';
import Featured from './Featured';
import './Home.css'

function Home() {

    return (
        <div className="home">
            <Header/>
            <Posts/>
            <Featured/>
        </div>
    )
}

export default Home;