Page({
    data: {
    background: ['/assets/img/DSC_1656.jpg', '/assets/img/DSC_1667.jpg'],
    indicatorDots: true,
    autoplay: true,
    vertical: false,
    interval: 3000,
    circular: true,
    details: ['/assets/img/1.jpg','/assets/img/2.jpg','/assets/img/3.jpg','/assets/img/4.jpg']
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'StartAI智能插座',
      desc: '广州亓行智能科技,打造您的智能家居！',
      path: 'pages/index/index',
    };
  },
    makePhoneCall() {
    my.makePhoneCall({ number: '02037268390' });
  }
});
