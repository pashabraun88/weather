
import { createContext, useState, useContext, useEffect, ReactNode } from "react";

interface WeatherData {
    name: string,
    main: {
        temp: number,
        feels_like: number,
        pressure: number,
    }
    timezone: number,
    wind: {
        speed: number
    },
    rain?: {
        "1h"?: number
    }
    weather: Array<{
        id: number; 
        main: string;
        description: string;
        icon: string
    }>
}

interface WeatherContextType {
    data: WeatherData | null,
    fetchWeather: (city: string) => void,
    error: string | null,
}

interface WeatherProviderProps { 
    children: ReactNode;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<WeatherProviderProps> = ({ children }) => {
    const [data, setData] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string | null>(null)


    const fetchWeather = async (city: string) => {
        setError(null);
        try {
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&lang=ua&appid=23e272ee2e4beb6d394e5937c062e764`);
        if(!response.ok) {
            throw new Error ('Не знайдено міста')
        }
        const result =await response.json();
        setData(result);
        }
        catch (error){
            setError('Не вірна назва міста');
        }
    };
    useEffect(() => {
        fetchWeather('Львів');
    }, []);

    return(
        <WeatherContext.Provider value={{data, fetchWeather, error}}>
            {children}
        </WeatherContext.Provider>
    );
};

export const useWeather = () => {
    const context = useContext(WeatherContext);
    if(!context) {
        throw new Error('useWheather must be used within a WheatherProvider');
    }
    return context
};

