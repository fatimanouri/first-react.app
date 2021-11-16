import './form.css';
const formComponent = ()=>{
    return(
        <div className="div-form">
        <input type="text" placeholder="نام کاربری"  style={{marginTop: "10px"}} className="input"/>
        <input type="password" placeholder="رمز عبور" className="input"/>
        <button className="form-btn">ورود به بخش مدیریت وبلاگ</button>
        <a href="#" className="remember">کلمه عبور خود را فراموش کردم</a>
    </div>

    )
}
export default formComponent;

