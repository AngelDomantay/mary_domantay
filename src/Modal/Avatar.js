import React from 'react'



const avatar = document.getElementById('avatar')
const name = document.getElementById('name')
const url = `https://avatars.dicebear.com/api/big-smile/${name.value}.svg`
    avatar.src = url
    name.addEventListener('keyup', Avatar)

function Avatar() {
  return (
    <div className="container">
        <div className = "box">
            <img className="img-fluid rounded-circcle" id="avatar" />
            <input type="text" id="name" placeholder="Hi! Please enter your name." />
            
        </div>
    </div>

    
  )
 
}

export default Avatar;