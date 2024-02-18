import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useNavigate, useParams } from 'react-router';

const DetailCard = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	return (
		<div className="h-screen relative">
			<div
				onClick={() => navigate('/')}
				className="absolute top-3 left-3 cursor-pointer hover:bg-black hover:text-white py-2 px-4 rounded-2xl">
				Back
			</div>
			<div className=" h-[90vh] flex justify-center overflow-y-scroll bg-pink-300">
				<div className="max-w-[800px] overflow-y-scroll p-12 mb-12">
					<p className="text-5xl text-black font-bold leading-[90px]">
						Hi Widya, i actually don't know what stories should i wrote in this
						but i got a couple things to say. Okay, listen i knew that we just
						knew each other by a couple of weeks right, that's a short time.
						But, we talked a lot, every night, every day. The more i talked to
						you, the more im getting more interested in you. I dont know what
						are you feeling about me, but i dont really care.
						<br />
						<br />
						<br />
						Okay, this is not an confession from me, since we just knew each
						other for a short time. Meaning by the time if you are also have the
						same interest like i said before, i think we should discuss it. I
						feel like im very happy to be around you. Like, we are really have
						the same taste of food, music, and jokes. I can say that since i
						knew you, my life is getting more easy, light, funny, and tasteful.
						Even if everyday you're always shown me the stupid percentage you
						have, but yaaa i know from the start that you are stupid, so im okay
						with that. LMAO
						<br />
						Right now what i hope is just you can be here (Malang) as soon as
						possible, due to my availability in Malang which getting more short.
						Listen, i dont know if this is kinda some of romantic way to give
						someone a present. But, this is the only thing i can doo... jadi
						yaudahlah ya
						<br />
						Salam hangat, Galih Permana.
					</p>
				</div>
			</div>
			<div className="bg-black flex justify-center absolute bottom-0 left-0 right-0 p-4">
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
		</div>
	);
};

export default DetailCard;
