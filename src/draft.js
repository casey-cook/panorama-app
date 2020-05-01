// Data Structure Rough Draft

export const EMPLOYEES = [
	{
		emp1: {
			name: {
				first: 'Casey',
				last: 'Cook',
			},
			totalScore: 0,
			performanceAreas: {
				0: 'Customer Service',
				1: 'Attendance',
				3: 'Cash Handling',
			},
			reviews: [
				{
					id: 0,
					date: 20190826,
					scores: {
						0: 5,
						1: 4,
						2: 4.5,
					},
				},
				{
					id: 1,
					date: 20191120,
					scores: {
						0: 5,
						1: 5,
						2: 4,
					},
				},
				{
					id: 2,
					date: 20200206,
					scores: {
						0: 5,
						1: 4,
						2: 4.5,
					},
				},
			],
		},

		emp2: {
			name: {
				first: 'Jasper',
				last: 'Jennings',
			},
			totalScore: 0,
			performanceAreas: {
				0: 'Customer Service',
				1: 'Attendance',
				3: 'Cash Handling',
			},
			reviews: [
				{
					id: 0,
					date: 20190826,
					scores: {
						0: 3,
						1: 4,
						2: 3,
					},
				},
				{
					id: 1,
					date: 20191120,
					scores: {
						0: 2,
						1: 4,
						2: 1,
					},
				},
				{
					id: 2,
					date: 20200206,
					scores: {
						0: 4,
						1: 3,
						2: 4,
					},
				},
			],
		},
	},
];
