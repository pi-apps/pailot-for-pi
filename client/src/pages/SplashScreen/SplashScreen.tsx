
import { useState, useEffect } from "react";
import { ScreenOne, ScreenTwo } from "../../components";
import { useNavigate } from 'react-router-dom';

export const SplashScreen = () => {
    const [next_screen, setNext_screen] = useState("first_screen")
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/welcome');
    }
    useEffect(() => {
        if (next_screen == "welcome") {
            handleNavigation()
        }
    }, [next_screen])


    return (
        <>
            {next_screen == 'first_screen' && <ScreenOne setNext_screen={setNext_screen} />}
            {next_screen == 'progress_bar' && <ScreenTwo setNext_screen={setNext_screen} />}


        </>
    );
};