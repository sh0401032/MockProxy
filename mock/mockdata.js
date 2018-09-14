module.exports={
  '/activity/getRelationCourse': {
    'errorCode': 0,
    'errorInfo': '操作成功',
    'result': {
      head: { id: 0, title: '用户名', time: '邀请日期', courseName: '报名课程', isDropOut: false },
      recordItemList: [
        { id: 1, title: '尤雨溪', time: '2018-9-10', courseName: '秋季班', isDropOut: true },
        { id: 2, title: '雪诺', time: '2018-9-10', courseName: '秋季班', isDropOut: false },
        { id: 3, title: '卡卡洛特', time: '2018-9-10', courseName: '秋季班', isDropOut: false },
        { id: 4, title: '卡卡洛特', time: '2018-9-10', courseName: '秋季班', isDropOut: false },
        { id: 5, title: '卡卡洛特', time: '2018-9-10', courseName: '秋季班', isDropOut: false },
        { id: 6, title: '卡卡洛特', time: '2018-9-10', courseName: '秋季班', isDropOut: false },
        { id: 7, title: '卡卡洛特', time: '2018-9-10', courseName: '秋季班', isDropOut: false },
        { id: 8, title: '卡卡洛特', time: '2018-9-10', courseName: '秋季班', isDropOut: false },
        { id: 9, title: '卡卡洛特', time: '2018-9-10', courseName: '秋季班', isDropOut: false },
        { id: 10, title: '卡卡洛特', time: '2018-9-10', courseName: '秋季班', isDropOut: false },
        { id: 11, title: '卡卡洛特', time: '2018-9-10', courseName: '秋季班', isDropOut: false },
        { id: 12, title: '卡卡洛特', time: '2018-9-10', courseName: '秋季班', isDropOut: false },
        { id: 13, title: '卡卡洛特', time: '2018-9-10', courseName: '秋季班', isDropOut: false },
        { id: 14, title: '卡卡洛特', time: '2018-9-10', courseName: '秋季班', isDropOut: false },
        { id: 15, title: '卡卡特', time: '2018-9-10', courseName: '秋季班', isDropOut: false },
        { id: 16, title: '卡卡特', time: '2018-9-10', courseName: '秋季班', isDropOut: false }

      ],
      poster: {id: 100, title: '1秒生成我的邀请海报'}
    }},
    
    '/getCurrentUser': function (req, res, next) {
      res.json({'errorCode': 0, 'errorInfo': '操作成功', 'result': {'isVisitor': false, 'currentUser': {'id': '2000000020000352126', 'loginName': 'zxp18655654520', 'name': 'zxp18655654520', 'role': 'parent', 'isAdmin': false, 'mobile': '18655654520', 'avatar': null}}})
    },
}