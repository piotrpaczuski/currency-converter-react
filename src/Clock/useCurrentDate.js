import { useEffect, useState } from "react";

const useCurrentDate = () => {
    const [actuallyDate, setActuallyDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActuallyDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const formattedDate = actuallyDate.toLocaleDateString(
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

    return formattedDate;
};

export default useCurrentDate;