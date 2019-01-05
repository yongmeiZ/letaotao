$(function(){
    var myChart = echarts.init(document.querySelector(".echarts_left"));
    var option = {
        title:{
            text: '2019年注册人数'
        },
        tooltip: {},
        legend: {
          data:['销量']
        },
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
    };
    myChart.setOption(option);
})