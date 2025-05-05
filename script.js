// 公告内容数组
const announcements = [
    '重要公告：欢迎访问学生墙网站！',
    '新功能上线：支持留言互动',
    '校园活动：本周五下午3点举办讲座',
    '温馨提示：请遵守社区规范'
];

// 获取公告栏元素
const announcementBar = document.querySelector('.announcement-bar marquee');

// 更新公告内容
function updateAnnouncement() {
    const randomIndex = Math.floor(Math.random() * announcements.length);
    announcementBar.textContent = announcements[randomIndex];
}

// 每10秒更新一次公告
setInterval(updateAnnouncement, 10000);