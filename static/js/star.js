var stars= [
	{"name":"白羊座","index":"A"},
	{"name":"金牛座","index":"B"},
	{"name":"双子座","index":"C"},
	{"name":"巨蟹座","index":"D"},
	{"name":"狮子座","index":"E"},
	{"name":"处女座","index":"F"},
	{"name":"天秤座","index":"G"},
	{"name":"天蝎座","index":"H"},
	{"name":"射手座","index":"I"},

	{"name":"摩羯座","index":"J"},
	{"name":"水平座","index":"K"},
	{"name":"双鱼座","index":"L"}
]
// 1  天生的一对
// 2  非常理想的一对
// 3  相当理想的一对
// 4  还蛮不错的一对
// 5  互相吸引又互相排斥的一对
// 6  需要努力维持的一对
// 7  前途不甚乐观的一对
// 
// 
// 
var score = [{
	s: 8,
	proportion: "50:50",
	love_index: 4,
	long_index: 4
},{
	s: 7,
	proportion: "54:46",
	love_index: 4,
	long_index: 3
},{
	s: 9,
	proportion: "44:56",
	love_index: 5,
	long_index: 4
},{
	s: 5,
	proportion: "58:42",
	love_index: 3,
	long_index: 2
},{
	s: 10,
	proportion: "48:52",
	love_index: 5,
	long_index: 5
},{
	s: 4,
	proportion: "40:60",
	love_index: 2,
	long_index: 2
},{
	s: 6,
	proportion: "50:50",
	love_index: 4,
	long_index: 2
},{
	s: 4,
	proportion: "60:40",
	love_index: 2,
	long_index: 2
},{
	s: 10,
	proportion: "52:48",
	love_index: 5,
	long_index: 5
},{
	s: 5,
	proportion: "42:58",
	love_index: 3,
	long_index: 2
},{
	s: 9,
	proportion: "56:44",
	love_index: 5,
	long_index: 4
},{
	s: 7,
	proportion: "46:54",
	love_index: 4,
	long_index: 3
}]
var startIndex = start.charCodeAt()-65;
for (let i = 0; i < startIndex; i++) {
	score.unshift(score.pop());
}