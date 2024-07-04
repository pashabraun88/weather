const iconMapping: { [key: string]: string} = {
    '01d': 'sun',
    '02d': 'mainly_cloudy',
    '03d': 'mainly_cloudy',
    '04d': 'mainly_cloudy',
    '09d': 'rain',
    '10d': 'small_rain',
    '01n': 'sun',
    '02n': 'mainly_cloudy',
    '03n': 'mainly_cloudy',
    '04n': 'mainly_cloudy',
    '09n': 'rain',
    '10n': 'small_rain',
};

export const getIconId = (icon: string): string => {
    return iconMapping[icon] || 'default_icon';
}

export {};