import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useNavigate, useParams } from 'react-router';

const DetailCard = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	console.log('params', id);
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
						Hi sayang. Selamat ulang tahun ya, besok kita tiup lilinnya di kos
						aja ya.. aku mager ke rumah kamu tengah malem hehe. I love you. Baca
						nih buat kamu dari aku!
						<br />
						<br />
						<br />
						You get one-year-old which is nineteen years old, which indicates
						you already become a mature person. You’ve struggled to this day
						with the abilities you have. I know it may not be easy to live every
						step of your life, but I believe that you are capable of it. I’m as
						your boyfriend glad to meet someone like you, and that you
						unconsciously led me to think more maturely. I pray and hope you are
						always given health, smoothness in your career, and being a better
						person every day.
						<br />
						Your joy is my joy too and you have to always be my support system
						and I’ll be your support system too. Sayang take care of your
						health, percayalah kesehatan di atas segalanya, don’t forget to
						pray, don’t forget to eat. I’ll always accompany you and be your
						support system in any condition. So, please take care of yourself
						and don’t push too much to yourself.
						<br />
						Sayang berbahagialah karena hari ini ketika kamu menangis untuk
						pertama kalinya bisa lahir ke dunia yang keras ini. Tentu, doa-doa
						baik, mimpi-mimpi setinggi langit, dan keberkahan hidup untukmu akan
						aku aminkan dengan khusyuk. Sayang menurutku kamu manusia yang
						dititipkan Tuhan dengan begitu berwarna. Ceria, tawa dan gurau
						mengisi ruang-ruang harimu. Entahlah memang karena aku juga tidak
						bisa bersamamu 24 jam, jadi aku hanya menyampaikan pendapatku
						tentang kamu sepengetahuanku saja.
						<br />
						Dengan perayaan ulang tahunmu kali ini, semoga kesediaan untuk
						menerima apapun dengan lapang dada pun semoga hidupmu, kuliahmu
						diberi kelancaraan, caramu menyikapi sebuah persoalan semoga
						didewasakan, dan yang terpenting bisa bergunalah untuk orang-orang
						terdekatmu dahulu, lalu untuk banyak orang termasuk aku.
						<br />
						Selamat ulang tahun Sayang, I love you with all of my heart. Jangan
						nangis... wle
					</p>
				</div>
			</div>
			<div className="bg-black flex justify-center absolute bottom-0 left-0 right-0 p-4">
				<AudioPlayer
					autoPlay
					src={
						id === '1'
							? 'https://res.cloudinary.com/dfwrmapr4/video/upload/v1668880740/SIVIA_-_ARE_YOU_MY_VALENTINE_Official_Lyric_Video_fzcxj6.mp4'
							: id === '2'
							? 'https://res.cloudinary.com/dfwrmapr4/video/upload/v1668881442/Sal_Priadi_-_Serta_Mulia_Official_Lyric_Video_igrgt1.mp4'
							: id === '3'
							? 'https://res.cloudinary.com/dfwrmapr4/video/upload/v1668881442/Sal_Priadi_-_Serta_Mulia_Official_Lyric_Video_igrgt1.mp4'
							: 'https://res.cloudinary.com/dfwrmapr4/video/upload/v1668879560/song1_fjocpe.mp4'
					}
				/>
			</div>
		</div>
	);
};

export default DetailCard;
