import { createContext, useState, useContext, useEffect, ReactNode } from "react";

interface WeatherData {
    name: string,
    dt_txt: string,
    main: {
        temp: number,
        temp_min: number,
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
    weather: {
        id: number,
        main: string,
        description: string,
        icon: string;
    }[];
}

export interface ForecastEntry {
    name: string,
    dt_txt: string,
    main: {
        temp: number,
        temp_min: number,
        feels_like: number,
    };
    weather: {
        id: number,
        main: string,
        description: string,
        icon: string;
    }[];
}

interface ForecastData {
    city: {
        name: string
    }
    list: ForecastEntry[];
}


interface WeatherContextType {
    data: WeatherData | null,
    forecast: ForecastData | null,
    selectedDay: ForecastEntry | null,
    selectDay: (day: ForecastEntry) => void,
    clearSelectedDay: () => void;
    fetchWeather: (city: string) => void,
    fetchWeeklyWeather: (city: string) => void;
    error: string | null,
    errorWeek: string | null,
}

interface WeatherProviderProps { 
    children: ReactNode;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<WeatherProviderProps> = ({ children }) => {
    const [data, setData] = useState<WeatherData | null>(null);
    const [forecast, setForecast] = useState<ForecastData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [errorWeek, setErrorWeek] = useState<string | null>(null);
    const [selectedDay, setSelectedDay] = useState<ForecastEntry | null>(null);

    const fetchWeather = async (city: string) => {
        setError(null);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&lang=ua&appid=23e272ee2e4beb6d394e5937c062e764`);
            if(!response.ok) {
                throw new Error('Не знайдено міста');
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError('Не вірна назва міста');
        }
    };

    const fetchWeeklyWeather = async (city: string) => {
        setErrorWeek(null);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=ua&appid=23e272ee2e4beb6d394e5937c062e764`);
            if (!response.ok) {
                throw new Error('Не вдалось отримати прогноз погоди');
            }

            const result = await response.json();
            const filteredDays = result.list.filter((entry: ForecastEntry) => new Date(entry.dt_txt).getHours() === 15);
            setForecast(result);
            
            setForecast({list: filteredDays} as ForecastData);
            
            
        } catch (errorWeek) {
            setErrorWeek('Не вірно!');
        }
    };

    const selectDay = (day: ForecastEntry) => {
        setSelectedDay(day);
    }

    const clearSelectedDay = () => {
        setSelectedDay(null);
    }



    useEffect(() => {
        fetchWeather('Львів');
        fetchWeeklyWeather('Львів');
    }, []);

    return (
        <WeatherContext.Provider value={{ data, forecast, fetchWeeklyWeather, fetchWeather, error, errorWeek, selectDay, selectedDay, clearSelectedDay }}>
            {children}
        </WeatherContext.Provider>
    );
};

export const useWeather = () => {
    const context = useContext(WeatherContext);
    if (!context) {
        throw new Error('useWeather must be used within a WeatherProvider');
    }
    return context;
};

