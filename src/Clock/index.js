import { StyledDate } from "./styled";
import useCurrentDate from "./useCurrentDate";

const ActuallyDate = () => {
    return (
        <StyledDate>Dzisiaj jest {useCurrentDate()}</StyledDate>
    )
}

export default ActuallyDate;