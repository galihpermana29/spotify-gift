import image1 from './assets/home/1.png';
import image2 from './assets/home/2.png';
import image3 from './assets/home/3.png';
import image4 from './assets/home/4.png';
import image5 from './assets/home/5.png';
import image6 from './assets/home/6.png';
import image7 from './assets/home/7.png';
import image8 from './assets/home/8.png';
import image9 from './assets/home/9.png';
import image10 from './assets/home/10.png';
import image11 from './assets/home/11.png';
import image12 from './assets/home/12.png';
import image13 from './assets/home/13.png';
import image14 from './assets/home/14.png';
import image15 from './assets/home/15.png';
import image16 from './assets/home/16.png';
import image17 from './assets/home/17.png';
import image18 from './assets/home/18.png';
import image19 from './assets/home/19.png';
import image20 from './assets/home/20.png';
import image21 from './assets/home/21.png';
import image22 from './assets/home/22.png';
import image23 from './assets/home/23.png';
import image24 from './assets/home/24.png';
import image25 from './assets/home/25.png';
import image26 from './assets/home/26.png';
import image27 from './assets/home/27.png';
import image28 from './assets/home/28.png';
import image29 from './assets/home/29.png';
import image30 from './assets/home/30.png';

const imgs = [
	image1,
	image2,
	image3,
	image4,
	image5,
	image6,
	image7,
	image8,
	image9,
	image10,
	image11,
	image12,
	image13,
	image14,
	image15,
	image16,
	image17,
	image18,
	image19,
	image20,
	image21,
	image22,
	image23,
	image24,
	image25,
	image26,
	image27,
	image28,
	image29,
	image30,
];
export const indahData = imgs.map((data, idx) => {
	console.log(idx, 'data');
	return {
		title: `#${idx + 1}`,
		img: imgs[idx],
		id: data,
	};
});

export const songsData = [
	{
		title: 'Play this first',
		songs: null,
		isLyric: true,
		img: image21,
		id: 1,
	},
	{
		title: 'a song #1',
		songs: null,
		isLyric: false,
		img: image19,
		id: 2,
	},
	{
		title: 'a song #2',
		songs: null,
		isLyric: false,
		img: image27,
		id: 3,
	},
	{
		title: 'a song #3',
		songs: null,
		isLyric: false,
		img: image29,
		id: 4,
	},
];
