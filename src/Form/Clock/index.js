import { useEffect, useState } from "react";
import "./style.css";

const ActuallyDate = () => {

    const [actuallyDate, setActuallyDate] = useState({
        time: new Date().toLocaleDateString(
            undefined,
            {
                weekday: "long",
                day: "numeric",
                month: "long",
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
            }
        )
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            let date = new Date().toLocaleDateString(
                undefined,
                {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                }
            );

            setActuallyDate({ time: date });
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <p className="form__date">Dzisiaj jest {actuallyDate.time}</p>
    )
}

export default ActuallyDate;