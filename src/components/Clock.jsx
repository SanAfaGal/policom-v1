import { useEffect, useState } from 'react';

const Clock = () => {

    const date = new Date();

    const [dataTime, setDataTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    });


    useEffect(() => {

        const timer = setInterval(() => {

            const date = new Date();
            setDataTime({
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds(),
            });

        }, 1000);


        return () => clearInterval(timer);

    }, []);

    return (
        <p>
            {dataTime.hours < 10 ? ` 0${dataTime.hours}` : dataTime.hours} h : {dataTime.minutes < 10 ? ` 0${dataTime.minutes}` : dataTime.minutes} min : {dataTime.seconds < 10 ? ` 0${dataTime.seconds}` : dataTime.seconds} seg
        </p>
    )
}

export default Clock;