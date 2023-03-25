
window.onload = (event) => {
    const params = new URLSearchParams(window.location.search);
    console.log(params.get('matrix_id'));
    const matrix_id = params.get('matrix_id');
    var stt = 1;
        var fiveMinutes = 60 * 45,
            display = document.getElementById('time2');
        startTimer(fiveMinutes, display);
    fetch('http://localhost:3000/matrices/details/'+ matrix_id +'')
    .then(response => response.json())
    .then(data => {
      console.log('data', data);
    
      data.forEach(matrixDetail => {
        fetch('http://localhost:3000/questions/'+ matrixDetail.questionType +'/'+  matrixDetail.quantity  +'')
            .then(response => response.json())
            .then(question => {
                console.log('question', question[0]);
                renderCauhoi(stt++, question[0]._id, question[0].content);
                fetch('http://localhost:3000/answers/'+ question[0]._id)
                .then(response => response.json())
                .then(answer => {
                    console.log('answer', answer);
                    renderCauTraLoi(question[0]._id, answer);
                })
                .catch(error => {
                //handle error
                });
            })
            .catch(error => {
            //handle error
            });
            renderTongSoCauHoi(params.get('total'));
      })
    })
    .catch(error => {
      //handle error
    });
}

function renderCauhoi(stt, question_id, content){
    var render = '<div class="" id="ques'+question_id+'"">' +
    '<div>' +
    '    <h5>Câu ' + stt + ': ' + content +'</h5>' +
    '</div>';
    document.getElementById('divDeThi').innerHTML += render;
}

function renderCauTraLoi(question_id, answers){
    var render = '<div class="form-check">';
    answers.sort((a, b) => a.name > b.name);
    answers.forEach(answer => {
        render +=   '<div class="form-check" style="padding-left: 0px;">' +
        '<input class="form-check-input" type="radio" name="ques'+question_id+'" id="answer' + answer.name +'"></input>' +
        '<label class="form-check-label" for="answer' + answer.name +'">' +
          answer.name + '. ' + answer.content
        '</label>'
      '</div>';
    })
    render += '</div>'
    console.log('render', render)
    document.getElementById('ques' + question_id).innerHTML += render;
}

function renderTongSoCauHoi(total){    
    divBangCauHoi = document.getElementById('divBangCauHoi');
    var render = '';
    for(var i=1; i<=total; i++) {
        render += '<div class="col l-2-4"><button class="itemnumber">'+i+'</button></div>';
    }
    divBangCauHoi.innerHTML = render;
}
function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
