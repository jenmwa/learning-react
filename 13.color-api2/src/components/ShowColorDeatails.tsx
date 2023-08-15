import '../style/search.scss'

interface IColorProps {
	color: string,
}

export const ShowColorDetails = ({ color }: IColorProps) => {
	return <>
		<div className='show-color-details-div'>
			<p>Show MoreColorDetails about:</p>
			{color}
		</div>
	</>
}