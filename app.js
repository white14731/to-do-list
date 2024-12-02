const inpt = document.querySelector('.inpt')
const btn = document.querySelector('.btn')
const btnClear = document.querySelector('.clear')

const list = document.querySelector('.del')

// let myArr = []



btn.addEventListener('click', function(){
    let inp = inpt.value
    if(inp.length === 0){
        alert('Ошибка!')
    }else{
        const newDiv = document.createElement('div')
        newDiv.className = 'items'
        list.appendChild(newDiv)
        if(newDiv){
            const newP = document.createElement('p')
            newP.className = 'pText'
            newDiv.appendChild(newP)
            newP.innerHTML = `${inp}`
            
        }

        if(newDiv){
            const divBtn = document.createElement('div')
            divBtn.className = 'btnBlock'
            newDiv.appendChild(divBtn)
                if(divBtn){
                    const btnDelet = document.createElement('button')
                    btnDelet.className = 'btndelet'
                    btnDelet.innerHTML = 'Удалить'
                    divBtn.appendChild(btnDelet)
                    btnDelet.addEventListener('click', function(){
                        newDiv.remove()
                    })
                }
                if(divBtn){
                    const btnReady = document.createElement('button')
                    btnReady.className = 'btnReady'
                    btnReady.innerHTML = 'Выполнено!'
                    divBtn.appendChild(btnReady)
                    btnReady.addEventListener('click', function(){
                        
                        newDiv.classList.add('green')
                    })
                }
        }

        // myArr.push(textArr)
        //console.log(myArr);
        if (inp.length > 0){
            inpt.value = ""
        }
    }
})






btnClear.addEventListener('click', function(){
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    myArr = []
})
