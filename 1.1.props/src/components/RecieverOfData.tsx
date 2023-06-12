

interface IChildProps {
    text: string,
    numb: number,
    bool: boolean
}

export const RecieverOfData = ({text, numb, bool}: IChildProps) => {
    const textColor= bool ? 'green' : 'red';

    return (
    <>
    <p style={{ color: textColor}}>{text} {numb} som är {bool.toString()}</p>
    {/* <p>{props.text}</p>
    <p>{props.numb}</p>
    <p >{props.bool}</p> */}
    </>
    )
}