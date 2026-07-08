import logoImg from '../../assets/logo2.png'


const Logo = () => {
    return (
        <div className="flex items-center">
            <img src={logoImg} alt="" className="w-18 h-18 object-cover" />
        </div>
    )
}


export default Logo;