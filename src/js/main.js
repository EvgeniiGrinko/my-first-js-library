import './lib/lib';
import $ from './lib/lib';

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(1000);
});
$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(1000);
});
$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(1000);
});

$('.wrap').html(
    `
    <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" id="dropdownMenuBtn">Dropdown button</button>
            <div class="dropdown-menu" data-toggle-id="dropdownMenuBtn">
            <a href="#" class="dropdown-item">Action #1</a>
            <a href="#" class="dropdown-item">Action #1</a>
            <a href="#" class="dropdown-item">Action #1</a>
            </div>
    </div> `
);
$('.dropdown-toggle').dropdown();

$('#trigger').click(()=> {
    $('#trigger').createModal({
        text: {
            title: 'Modal title Wauu!',
            body: 'Lorem ipsum dolor sit amet consecteturlibero aliquam obcaecati, sequi aperiam aliquid!QQQQ!!!'
        },
        btns: {
            count: 3,
            settings: [
                [
                    'Close',
                    ['btn-danger', 'mr-10'],
                    true
                ],
                [
                    'Save changes',
                    ['btn-success'],
                    false,
                    () => {
                        alert('Данные сохранены')
                    }
                ],
                [
                    "Another buttun",
                    ['btn-warning', 'ml-10'],
                    false,
                    () => {
                        alert('Hello, World!')
                    }
                ]
            ]
        }
    });

})
$().get('https://jsonplaceholder.typicode.com/todos/1')
.then(res => console.log(res))

