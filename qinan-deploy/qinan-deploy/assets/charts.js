(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  var palette = [accent, accent2, accent + 'cc', accent2 + 'cc', muted];

  // --- Chart 1: 各类型科普活动场次 (Bar) ---
  var chart1 = echarts.init(document.getElementById('chart-sessions'), null, { renderer: 'svg' });
  chart1.setOption({
    animation: false,
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' }, appendToBody: true },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['科学实验课堂', '科技前沿讲座', '入户走访调研', '非遗文化探访', '主题分享会'],
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: muted, fontSize: 11, interval: 0, rotate: 12 }
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } },
      axisLabel: { color: muted, fontSize: 11 }
    },
    series: [{
      type: 'bar',
      data: [6, 4, 8, 3, 3],
      itemStyle: {
        borderRadius: [6, 6, 0, 0],
        color: {
          type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: accent },
            { offset: 1, color: accent + '60' }
          ]
        }
      },
      barWidth: '45%',
      label: { show: true, position: 'top', color: ink, fontSize: 12, fontWeight: 700 }
    }]
  });

  // --- Chart 2: 受众群体构成 (Pie) ---
  var chart2 = echarts.init(document.getElementById('chart-audience'), null, { renderer: 'svg' });
  chart2.setOption({
    animation: false,
    tooltip: { trigger: 'item', appendToBody: true },
    legend: {
      orient: 'vertical',
      right: '5%',
      top: 'center',
      textStyle: { color: muted, fontSize: 12 },
      itemWidth: 12, itemHeight: 12
    },
    series: [{
      type: 'pie',
      radius: ['38%', '65%'],
      center: ['40%', '50%'],
      avoidLabelOverlap: true,
      itemStyle: { borderColor: bg2, borderWidth: 3 },
      label: {
        show: true,
        formatter: '{b}\n{d}%',
        color: ink,
        fontSize: 11,
        fontWeight: 600
      },
      data: [
        { value: 310, name: '中小学生', itemStyle: { color: accent } },
        { value: 150, name: '村民群众', itemStyle: { color: accent2 } },
        { value: 80, name: '乡镇干部', itemStyle: { color: accent + 'aa' } },
        { value: 60, name: '非遗传承人', itemStyle: { color: accent2 + 'aa' } }
      ]
    }]
  });

  // --- Chart 3: 科普主题覆盖度 (Radar) ---
  var chart3 = echarts.init(document.getElementById('chart-topics'), null, { renderer: 'svg' });
  chart3.setOption({
    animation: false,
    tooltip: { appendToBody: true },
    radar: {
      indicator: [
        { name: '物理实验', max: 100 },
        { name: '化学实验', max: 100 },
        { name: '人工智能', max: 100 },
        { name: '航天科技', max: 100 },
        { name: '生态环境', max: 100 },
        { name: '非遗科学', max: 100 }
      ],
      center: ['50%', '52%'],
      radius: '62%',
      axisName: { color: ink, fontSize: 12, fontWeight: 600 },
      splitLine: { lineStyle: { color: rule } },
      splitArea: { areaStyle: { color: ['transparent', 'rgba(232,84,63,0.03)'] } },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'radar',
      data: [{
        value: [85, 90, 75, 70, 80, 65],
        name: '覆盖度',
        areaStyle: { color: accent + '22' },
        lineStyle: { color: accent, width: 2 },
        itemStyle: { color: accent }
      }]
    }]
  });

  // --- Chart 4: 活动满意度反馈 (Horizontal Bar) ---
  var chart4 = echarts.init(document.getElementById('chart-satisfaction'), null, { renderer: 'svg' });
  chart4.setOption({
    animation: false,
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' }, appendToBody: true },
    grid: { left: '3%', right: '8%', bottom: '3%', containLabel: true },
    xAxis: {
      type: 'value',
      max: 100,
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } },
      axisLabel: { color: muted, fontSize: 11, formatter: '{value}%' }
    },
    yAxis: {
      type: 'category',
      data: ['非遗文化探访', '入户走访调研', '科技前沿讲座', '科学实验课堂'],
      axisLine: { lineStyle: { color: rule } },
      axisTick: { show: false },
      axisLabel: { color: muted, fontSize: 12 }
    },
    series: [{
      type: 'bar',
      data: [
        { value: 92, itemStyle: { color: accent2 } },
        { value: 94, itemStyle: { color: accent2 + 'cc' } },
        { value: 96, itemStyle: { color: accent + 'cc' } },
        { value: 98, itemStyle: { color: accent } }
      ],
      barWidth: '50%',
      itemStyle: { borderRadius: [0, 6, 6, 0] },
      label: { show: true, position: 'right', color: ink, fontSize: 12, fontWeight: 700, formatter: '{c}%' }
    }]
  });

  // Resize listeners
  window.addEventListener('resize', function() {
    chart1.resize();
    chart2.resize();
    chart3.resize();
    chart4.resize();
  });
})();
