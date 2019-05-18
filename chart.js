const chart=document.getElementById('lineChart').getContext('2d');
var lineChart=new Chart(chart,{
	type:'bar',
	data:{
		labels: ['Barsha','Bikash'],
		datasets: [{
			label:'#of votes',
			data:[12,19],
			backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
                'rgba(54, 200, 235, 0.2)'
			],
			borderColor: [
			'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'],
            borderWidth:1
		}]
	},
	options:{
		scales:{
			yAxes:[
			{
				ticks:{
					beginAtZero:true
				}
			}]
		}
	}
});

