import { StyledClock } from "./styled";
import useCurrentDate from "./useCurrentDate";

const Clock = () => {

    const currentDate = useCurrentDate();

    const formattedDate = currentDate.toLocaleDateString(
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

    return (
        <StyledClock>Dzisiaj jest {formattedDate}</StyledClock>
    )
}

export default Clock;