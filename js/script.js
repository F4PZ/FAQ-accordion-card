  const question = document.querySelectorAll('.question')

  question.forEach(element => {
    element.addEventListener('click', ()=> {
      element.nextElementSibling.classList.toggle('show')
      element.classList.toggle('active')

      question.forEach(item => {
        if(element != item){
          item.nextElementSibling.classList.remove('show')
          item.classList.remove('active')
        }
      })
    })
  });