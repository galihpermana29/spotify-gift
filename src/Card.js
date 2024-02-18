import { useNavigate } from 'react-router';
const Card = ({
	img = null,
	direction = 'row',
	title = '#1 Happy Birthday',
	desc = 'Galih Permana',
	redirect = false,
	id,
	setId,
}) => {
	const navigate = useNavigate();
	const handleClick = () => {
		if (redirect) {
			navigate(`/detail/${id}`);
		} else {
			setId(id);
		}
	};
	return (
		<div
			onClick={handleClick}
			className={
				direction === 'row'
					? 'flex cursor-pointer bg-gray-900 space-x-4 items-center hover:bg-gray-800 transition-colors rounded-md'
					: 'flex-col cursor-pointer space-y-4 hover:bg-gray-800 p-4 rounded-md '
			}>
			<div
				className={` ${
					direction === 'row'
						? 'w-[70px] h-[70px] rounded-md'
						: 'w-[140px] h-[140px] rounded-md'
				} bg-gray-400`}>
				<img
					src={img}
					alt="gambar"
					className="h-full w-full object-cover rounded-md"
				/>
			</div>
			<div className="">
				<h1 className="font-bold"> {title}</h1>
				<p className="text-xs">by {desc}</p>
			</div>
		</div>
	);
};

export default Card;
