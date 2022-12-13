let data = [
    {
        name : 'Charul',
        age :  '19'
    },
    {
        name : 'Om',
        age :  '15'
    },
    {
        name : 'Aruna',
        age :  '43'
    },
    {
        name : 'Harsha',
        age :  '18'
    },
    {
        name : 'A.Srinivas',
        age :  '47'
    },
    {
        name : 'Chaitanya',
        age :  '9'
    }
];

const info = document.querySelector('#info');

let details = data.map(function(item){
    return '<div>' + item.name + ' ' + 'is' + item.age + ' years old' + '</div>';
    
});

info.innerHTML = details.join('\n');