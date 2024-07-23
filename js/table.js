const table = document.querySelector('table')
// 使用事件冒泡来解决子标签的点击问题
table.addEventListener('click', (e) => {
    if (e.target.tagName === 'TD') {
        // 找到原先高亮的元素。
        const td = document.querySelector('.active')
        // 若这个元素存在，则直接移除高亮类
        if (td) {
            td.classList.remove('active')
        }
        e.target.classList.add('active')
    }
})