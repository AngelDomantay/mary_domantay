
import './index.css'

const avatar = document.getElementById('avatar')
const name = document.getElementById('name')

const url = `https://avatars.dicebear.com/api/big-smile/${name.value}.svg`
    avatar.src = url
    name.addEventListener('keyup', Avatar)

