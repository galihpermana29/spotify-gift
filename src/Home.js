import { Col, Row } from 'antd';
import Card from './Card';

import { indahData, songsData } from './data';
import HomeIcon from '@mui/icons-material/Home';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useState } from 'react';

const Home = () => {
	const [id, setId] = useState(null);
	const handlelogout = () => {
		localStorage.removeItem('token_user');
		window.location.reload();
	};
	return (
		<div className="flex min-h-screen text-white">
			<div className="bg-black w-[200px] p-3 space-y-5">
				<div className=" text-gray-400 flex flex-col justify-between">
					<div className="flex justify-center">
						<HomeIcon />
						<p className="ml-2">Home</p>
					</div>

					<p
						className="ml-2 mt-10 bg-white text-center p-2 rounded-3xl text-black cursor-pointer"
						onClick={handlelogout}>
						Log Out
					</p>
				</div>
			</div>
			<div className="bg-black w-full space-y-5 relative">
				{/* <h1 className="text-4xl my-6 font-bold max-w-[500px]">Oh no..., she is turning 19 right now.</h1> */}
				<div className="bg-gradient-to-b from-pink-300 p-3">
					<section>
						<h1 className="text-2xl my-6 font-bold">
							Hi widya jelek (cantik sebenarnya tapi males lah).
						</h1>
						<Row gutter={[12, 12]}>
							{songsData.map((data) => {
								return (
									<Col span={8} key={data.id}>
										<Card
											img={data.img}
											title={data.title}
											id={data.id}
											setId={setId}
											redirect={data.isLyric}
										/>
									</Col>
								);
							})}
						</Row>
					</section>
				</div>
				<div className=" p-3">
					<section>
						<h1 className="text-2xl my-6 font-bold">
							20 moments when widya looks so pretty.
						</h1>
						<Row gutter={[12, 12]}>
							{indahData.map((data) => {
								return (
									<Col key={data.id}>
										<Card
											img={data.img}
											title={data.title}
											direction="col"
											id={data.id}
											setId={setId}
										/>
									</Col>
								);
							})}
						</Row>
					</section>
				</div>
				{id !== null && (
					<div className="bg-black flex justify-center fixed bottom-0 left-0 right-0 p-4">
						<AudioPlayer
							autoPlay
							src={
								id === '1'
									? 'https://res.cloudinary.com/dfwrmapr4/video/upload/v1707913209/afiibno5igjnjsbwlpmf.mp3'
									: id === 2
									? 'https://res.cloudinary.com/dfwrmapr4/video/upload/v1668880740/SIVIA_-_ARE_YOU_MY_VALENTINE_Official_Lyric_Video_fzcxj6.mp4'
									: id === 3
									? 'https://res.cloudinary.com/dfwrmapr4/video/upload/v1668881442/Sal_Priadi_-_Serta_Mulia_Official_Lyric_Video_igrgt1.mp4'
									: 'https://res.cloudinary.com/dfwrmapr4/video/upload/v1668879560/song1_fjocpe.mp4'
							}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Home;
