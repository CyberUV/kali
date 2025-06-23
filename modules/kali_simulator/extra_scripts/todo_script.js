// document.getElementById('center_header').addEventListener('mouseup', function() {
//     var terminal_win4 = document.getElementById('terminal_win4');
//     terminal_win4.classList.toggle('show_todo');
// })
// document.getElementById('terminal_win4').addEventListener('mouseover', function() {
//     var terminal_win4 = document.getElementById('terminal_win4');
//     terminal_win4.classList.toggle('show_todo');

// })
function ShowTodo() {
    var terminal_win4 = document.getElementById('terminal_win4');
    terminal_win4.classList.add('show_todo');
}
function DonotShowTodo() {
    var terminal_win4 = document.getElementById('terminal_win4');
    terminal_win4.classList.remove('show_todo');
}