export const EMPLOYEES = [
	{
		id: 0,
		name: 'Sandy Jimenez',
		photo: 'assets/img/sandyphoto.png',
		totalScore: function () {
			return (
				(this.performanceAreaScores[0] +
					this.performanceAreaScores[1] +
					this.performanceAreaScores[2]) /
				3
			).toFixed(1);
		},
		performanceAreas: {
			0: 'Customer Service',
			1: 'Attendance',
			2: 'Cash Handling',
		},
		performanceAreaScores: {
			0: 4.1,
			1: 1.5,
			2: 4.6,
		},
		reviews: [
			{
				employeeId: 0,
        id: 0,
        reviewPage: 0,
				name: 'Sandy Jimenez',
				date: {
					year: '2019',
					month: '08',
					day: '26',
				},
				areas: {
					0: 'Customer Service',
					1: 'Attendance',
					2: 'Cash Handling',
				},
				scores: {
					0: 5,
					1: 4,
					2: 5,
				},
				notes: `Sandy's progress continues to improve.`,
				complete: true,
			},
			{
				employeeId: 0,
        id: 1,
        reviewPage: 1,
				name: 'Sandy Jimenez',
				date: {
					year: '2020',
					month: '09',
					day: '16',
				},
				areas: {
					0: 'Customer Service',
					1: 'Attendance',
					2: 'Cash Handling',
				},
				scores: {
					0: '',
					1: '',
					2: '',
				},
				notes: `TBD`,
				complete: false,
			},
			{
				employeeId: 0,
        id: 2,
        reviewPage: 2,
				name: 'Sandy Jimenez',
				date: {
					year: '2020',
					month: '02',
					day: '06',
				},
				areas: {
					0: 'Customer Service',
					1: 'Attendance',
					2: 'Cash Handling',
				},
				scores: {
					0: 5,
					1: 4,
					2: 4.5,
				},
				notes: `Sandy is a truly gnarly programmer.`,
				complete: true,
			},
		],
	},

	{
		id: 1,
		name: 'Charles Jones',
		photo: 'assets/img/charlesphoto.png',
		totalScore: function () {
			return (
				(this.performanceAreaScores[0] +
					this.performanceAreaScores[1] +
					this.performanceAreaScores[2]) /
				3
			).toFixed(1);
		},
		performanceAreas: {
			0: 'Customer Service',
			1: 'Attendance',
			2: 'Cash Handling',
		},
		performanceAreaScores: {
			0: 2.2,
			1: 3.1,
			2: 4.5,
		},
		reviews: [
			{
				employeeId: 1,
        id: 0,
        reviewPage: 3,
				name: 'Charles Jones',
				date: {
					year: '2019',
					month: '08',
					day: '26',
				},
				areas: {
					0: 'Customer Service',
					1: 'Attendance',
					2: 'Cash Handling',
				},
				scores: {
					0: 3,
					1: 4,
					2: 3,
				},
				notes: `Charles is building on his potential.`,
				complete: true,
			},
			{
				employeeId: 1,
        id: 1,
        reviewPage: 4,
				name: 'Charles Jones',
				date: {
					year: '2020',
					month: '11',
					day: '20',
				},
				areas: {
					0: 'Customer Service',
					1: 'Attendance',
					2: 'Cash Handling',
				},
				scores: {
					0: 2,
					1: 4,
					2: 1,
				},
				notes: `Charles has made progress but has room to improve.`,
				complete: false,
			},
			{
				employeeId: 1,
        id: 2,
        reviewPage: 5,
				name: 'Charles Jones',
				date: {
					year: '2020',
					month: '02',
					day: '06',
				},
				areas: {
					0: 'Customer Service',
					1: 'Attendance',
					2: 'Cash Handling',
				},
				scores: {
					0: 4,
					1: 3,
					2: 4,
				},
				notes: `Charles is doing good, he is going to Burning Man next week.`,
				complete: true,
			},
		],
	},
	{
		id: 2,
		name: 'Ashton Reece',
		photo: 'assets/img/ashtonphoto.png',
		totalScore: function () {
			return (
				(this.performanceAreaScores[0] +
					this.performanceAreaScores[1] +
					this.performanceAreaScores[2]) /
				3
			).toFixed(1);
		},
		performanceAreas: {
			0: 'Customer Service',
			1: 'Attendance',
			2: 'Cash Handling',
		},
		performanceAreaScores: {
			0: 1.2,
			1: 3.5,
			2: 3.9,
		},
		reviews: [
			{
				employeeId: 2,
        id: 0,
        reviewPage: 6,
				name: 'Ashton Reece',
				date: {
					year: '2019',
					month: '08',
					day: '26',
				},
				areas: {
					0: 'Customer Service',
					1: 'Attendance',
					2: 'Cash Handling',
				},
				scores: {
					0: 3,
					1: 4,
					2: 3,
				},
				notes: `Ashton is doing well.`,
				complete: true,
			},
			{
				employeeId: 2,
        id: 1,
        reviewPage: 7,
				name: 'Ashton Reece',
				date: {
					year: '2019',
					month: '11',
					day: '20',
				},
				areas: {
					0: 'Customer Service',
					1: 'Attendance',
					2: 'Cash Handling',
				},
				scores: {
					0: 2,
					1: 4,
					2: 1,
				},
				notes: `Ashton's drawer was $100 short this week. Need to improve.`,
				complete: true,
			},
			{
				employeeId: 2,
        id: 2,
        reviewPage: 8,
				name: 'Ashton Reece',
				date: {
					year: '2020',
					month: '02',
					day: '07',
				},
				areas: {
					0: 'Customer Service',
					1: 'Attendance',
					2: 'Cash Handling',
				},
				scores: {
					0: 4,
					1: 3,
					2: 4,
				},
				notes: `Ashton is doing great!`,
				complete: false,
			},
		],
	},
	{
		id: 3,
		name: 'Vinnie Williams',
		photo: 'assets/img/vinniephoto.png',
		totalScore: function () {
			return (
				(this.performanceAreaScores[0] +
					this.performanceAreaScores[1] +
					this.performanceAreaScores[2]) /
				3
			).toFixed(1);
		},
		performanceAreas: {
			0: 'Customer Service',
			1: 'Attendance',
			2: 'Cash Handling',
		},
		performanceAreaScores: {
			0: 3.7,
			1: 2.5,
			2: 3.1,
		},
		reviews: [
			{
				employeeId: 3,
        id: 0,
        reviewPage: 9,
				name: 'Vinnie Williams',
				date: {
					year: '2019',
					month: '08',
					day: '26',
				},
				areas: {
					0: 'Customer Service',
					1: 'Attendance',
					2: 'Cash Handling',
				},
				scores: {
					0: 3,
					1: 4,
					2: 3,
				},
				notes: `Vinnie is steady and consistent.`,
				complete: true,
			},
			{
				employeeId: 3,
        id: 1,
        reviewPage: 10,
				name: 'Vinnie Williams',
				date: {
					year: '2019',
					month: '11',
					day: '20',
				},
				areas: {
					0: 'Customer Service',
					1: 'Attendance',
					2: 'Cash Handling',
				},
				scores: {
					0: 2,
					1: 4,
					2: 1,
				},
				notes: `Vinnie lost his register key. -20 points Gryffindor.`,
				complete: true,
			},
			{
				employeeId: 3,
        id: 2,
        reviewPage: 11,
				name: 'Vinnie Williams',
				date: {
					year: '2020',
					month: '02',
					day: '06',
				},
				areas: {
					0: 'Customer Service',
					1: 'Attendance',
					2: 'Cash Handling',
				},
				scores: {
					0: 4,
					1: 3,
					2: 4,
				},
				notes: `Thank you for coming in on your day off this week!`,
				complete: false,
			},
		],
	},
];
