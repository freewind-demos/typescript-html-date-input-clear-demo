// 为清空按钮添加点击事件监听器
const clearButton = document.getElementById('clearButton')!;
const dateInput = document.getElementById('dateInput') as HTMLInputElement;

clearButton.addEventListener('click', () => {
    // 清空日期输入框
    dateInput.value = '';
});
