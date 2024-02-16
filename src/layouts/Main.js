import React from 'react'

//helper function
import { fetchData } from '../helpers'
import { Outlet, useLoaderData } from 'react-router-dom';

//for image
import Wave from '../assets/wave.svg';
import Nav from '../components/Nav';


//Loader
export function mainLoader() {
    const userName = fetchData('userName');
    return { userName };
}


const Main = () => {
    const { userName } = useLoaderData()

    return (
        <div className='layout'>

            <Nav userName={userName}/>
            <main>
                <Outlet />
            </main>

            <img src={Wave} alt='wave image' />

        </div>
    )
}
export default Main 
