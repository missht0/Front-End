      // 生成+1标签向上飞出，然后消失
      // 获得当前点击的表情的位置
      const addspan = event.target.parentNode.parentNode.childNodes[1]
      const add1 = document.createElement('div')
      add1.innerText = '+1'
      // 起点为addspan的位置
      add1.style.position = 'absolute'
      add1.style.color = 'red'
      add1.style.fontSize = '1.5rem'
      add1.style.zIndex = 100
      add1.style.transition = 'all 0.5s'
      add1.style.opacity = 0
      add1.style.transform = 'translateY(-100px)'
      addspan.appendChild(add1)
      setTimeout(() => {
        add1.style.opacity = 1
        add1.style.transform = 'translateY(-200px)'
      }, 0)
      setTimeout(() => {
        add1.style.opacity = 0
        add1.style.transform = 'translateY(-300px)'
      }, 500)
      setTimeout(() => {
        document.body.removeChild(add1)
      }, 1000)
