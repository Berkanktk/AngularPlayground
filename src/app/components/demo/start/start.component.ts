import {Component, OnInit, ViewChild} from '@angular/core';
import {POSTS} from "../../../mock-posts";
import {EChartsOption} from "echarts";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  posts = POSTS;
  @ViewChild('title') title: any;

  constructor() {}

  ngOnInit(): void {

  }

  chartOption1: EChartsOption = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      type: 'value'
    },
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: function (params: { [x: string]: any; }) {
        return `<b>${params['name']}</b> : $ ${params['value']}`;
      }
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1430, 1550, 1200, 1650.1450, 1680, 1890, 2300],
      type: 'line',
      areaStyle: {},
      smooth: true
    }]
  }

  chartOption2: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220]
      }
    ]
  };

  chartOption3: EChartsOption = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  chartOption4: EChartsOption = {
    title: {'text': 'Scatter Plot'},
    xAxis: {'name': 'X'},
    yAxis: {'name': 'Y'},
    tooltip: {
      formatter: params => {
        return `(${"data" in params ? params.data : [0]})`;
      }
    },
    series: [
      {
        symbolSize: 20,
        data: [
          [10.0, 8.04],
          [8.07, 6.95],
          [13.0, 7.58],
          [9.05, 8.81],
          [11.0, 8.33],
          [14.0, 7.66],
          [13.4, 6.81],
          [10.0, 6.33],
          [14.0, 8.96],
          [12.5, 6.82],
          [9.15, 7.2],
          [11.5, 7.2],
          [3.03, 4.23],
          [12.2, 7.83],
          [2.02, 4.47],
          [1.05, 3.33],
          [4.05, 4.96],
          [6.03, 7.24],
          [12.0, 6.26],
          [12.0, 8.84],
          [7.08, 5.82],
          [5.02, 5.68]
        ],
        type: 'scatter'
      }
    ]
  };

  chartOption5: EChartsOption = {
    title: {
      text: 'Basic Radar Chart'
    },
    legend: {
      data: ['Allocated Budget', 'Actual Spending']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'Sales', max: 6500 },
        { name: 'Administration', max: 16000 },
        { name: 'Information Technology', max: 30000 },
        { name: 'Customer Support', max: 38000 },
        { name: 'Development', max: 52000 },
        { name: 'Marketing', max: 25000 }
      ]
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Allocated Budget'
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: 'Actual Spending'
          }
        ]
      }
    ]
  };

  chartOption6: EChartsOption = {
    series: [
      {
        type: 'treemap',
        data: [
          {
            name: 'nodeA', // First tree
            value: 10,
            children: [
              {
                name: 'nodeAa', // First leaf of first tree
                value: 4
              },
              {
                name: 'nodeAb', // Second leaf of first tree
                value: 6
              }
            ]
          },
          {
            name: 'nodeB', // Second tree
            value: 20,
            children: [
              {
                name: 'nodeBa', // Son of first tree
                value: 20,
                children: [
                  {
                    name: 'nodeBa1', // Granson of first tree
                    value: 20
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };

  chartOption7: EChartsOption = {
    series: {
      type: 'sunburst',
      data: [
        {
          name: 'Grandpa',
          children: [
            {
              name: 'Uncle Leo',
              value: 15,
              children: [
                {
                  name: 'Cousin Jack',
                  value: 2
                },
                {
                  name: 'Cousin Mary',
                  value: 5,
                  children: [
                    {
                      name: 'Jackson',
                      value: 2
                    }
                  ]
                },
                {
                  name: 'Cousin Ben',
                  value: 4
                }
              ]
            },
            {
              name: 'Father',
              value: 10,
              children: [
                {
                  name: 'Me',
                  value: 5
                },
                {
                  name: 'Brother Peter',
                  value: 1
                }
              ]
            }
          ]
        },
        {
          name: 'Nancy',
          children: [
            {
              name: 'Uncle Nike',
              children: [
                {
                  name: 'Cousin Betty',
                  value: 1
                },
                {
                  name: 'Cousin Jenny',
                  value: 2
                }
              ]
            }
          ]
        }
      ],
      radius: [60, '90%'],
      itemStyle: {
        borderRadius: 7,
        borderWidth: 2
      },
      label: {
        show: true
      }
    }
  };

  chartOption8: EChartsOption = {
    series: [{
      type: 'wordCloud',
      shape: 'circle',
      sizeRange: [12, 60],
      rotationRange: [-90, 90],
      rotationStep: 45,
      gridSize: 8,
      drawOutOfBound: false,
      layoutAnimation: true,

      // Global text style
      textStyle: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        // Color can be a callback function or a color string
        color: function () {
          // Random color
          return 'rgb(' + [
            Math.round(Math.random() * 160),
            Math.round(Math.random() * 160),
            Math.round(Math.random() * 160)
          ].join(',') + ')';
        }
      },
      emphasis: {
        focus: 'self',

        textStyle: {
          textShadowBlur: 10,
          textShadowColor: '#333'
        }
      },

      data: [
        { name: 'Lorem', value: 100 },
        { name: 'Ipsum', value: 80 },
        { name: 'Dolor', value: 60 },
        { name: 'Sit', value: 40 },
        { name: 'Amet', value: 20 },
      ]
    }]
  };

  tabGroup(e: any) {
    if (e.index === 0) {
        this.title.nativeElement.textContent = 'Line Chart';
      }
    else if (e.index === 1) {
        this.title.nativeElement.textContent = 'Bar Chart';
      }
    else if (e.index === 2) {
        this.title.nativeElement.textContent = 'Pie Chart';
      }
    else if (e.index === 3) {
        this.title.nativeElement.textContent = 'Scatter Plot';
      }
    else if (e.index === 4) {
        this.title.nativeElement.textContent = 'Radar Chart';
      }
    else if (e.index === 5) {
        this.title.nativeElement.textContent = 'Treemap';
      }
    else if (e.index === 6) {
        this.title.nativeElement.textContent = 'Sunburst';
      }
    else if (e.index === 7) {
        this.title.nativeElement.textContent = 'Word Cloud';
    }
  }
}
