
interface IColorProps {
    color: string,
}

export const ShowColorDetails = ({color}: IColorProps) => {
    return <>
        <p>Show MoreColorDetails about:</p>
        {color}
    </>
}