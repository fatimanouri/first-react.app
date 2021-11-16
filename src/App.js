
import './App.css';
import aks from './assets/images/photo_2021-04-13_18-21-12.jpg';

function App() {
  return (

    <div className="container">
    <div className="header">
        <img src={aks} alt="LOGO"/>
    </div>

    <div className="contact">
        <div className="div-title">
            <p className="title">بلاگفا یک ابزار قدرتمند برای ساخت و مدیریت وبلاگ است . بلاگفا به شما کمک میکند تا با سرعت و سهولت اطلاعات ، خاطرات و مطالب و مقالات خود را در اینترنت منتشر کنید</p>
            <button className="title-btn">ثبت نام و ایجاد وبلاگ جدید</button>
        </div>
        <div className="div-form">
            <input type="text" placeholder="نام کاربری"  style={{marginTop: "10px"}} className="input"/>
            <input type="password" placeholder="رمز عبور" className="input"/>
            <button className="form-btn">ورود به بخش مدیریت وبلاگ</button>
            <a href="#" className="remember">کلمه عبور خود را فراموش کردم</a>
        </div>

    </div>


    <div className="weblog-title">
        <hr/>
        <p style={{padding: "0 10px", fontsize:"10px" ,color:"blue", textalign:"center", width: "400px"}}>وبلاگ های بروز شده</p>
        <hr/>
    </div>

    <div className="div-box">

        <div className="card">
            <p style={{color: "blue", fontsize: "12px" , marginright: "10px" ,margin: "10px"}}>کیک کدو حلوایی</p>
            <a href="#" style={{textdecoration: "none", color: "gray", marginright: "10px"}}>hossein-heydari.ir</a>
            <p style={{fontsize: "12px", margin: "20px"}}>این مطلب درمورد پرده اتاق کودک بسیار زیبا و شیک است . این مطلب از سایت اتاق میباشد . برای مشاهده ی کامل این مطلب به سایت اتاق مراجعه کنید</p>
        </div>

        <div className="card">
        <p style={{color: "blue", fontsize: "12px" , marginright: "10px" ,margin: "10px"}}>کیک کدو حلوایی</p>
            <a href="#" style={{textdecoration: "none", color: "gray", marginright: "10px"}}>hossein-heydari.ir</a>
            <p style={{fontsize: "12px", margin: "20px"}}>این مطلب درمورد پرده اتاق کودک بسیار زیبا و شیک است . این مطلب از سایت اتاق میباشد . برای مشاهده ی کامل این مطلب به سایت اتاق مراجعه کنید</p>     
               </div>
               <div className="card">
            <p style={{color: "blue", fontsize: "12px" , marginright: "10px" ,margin: "10px"}}>کیک کدو حلوایی</p>
            <a href="#" style={{textdecoration: "none", color: "gray", marginright: "10px"}}>hossein-heydari.ir</a>
            <p style={{fontsize: "12px", margin: "20px"}}>این مطلب درمورد پرده اتاق کودک بسیار زیبا و شیک است . این مطلب از سایت اتاق میباشد . برای مشاهده ی کامل این مطلب به سایت اتاق مراجعه کنید</p>
        </div>
        <div className="card">
            <p style={{color: "blue", fontsize: "12px" , marginright: "10px" ,margin: "10px"}}>کیک کدو حلوایی</p>
            <a href="#" style={{textdecoration: "none", color: "gray", marginright: "10px"}}>hossein-heydari.ir</a>
            <p style={{fontsize: "12px", margin: "20px"}}>این مطلب درمورد پرده اتاق کودک بسیار زیبا و شیک است . این مطلب از سایت اتاق میباشد . برای مشاهده ی کامل این مطلب به سایت اتاق مراجعه کنید</p>
        </div>
        <div className="card">
            <p style={{color: "blue", fontsize: "12px" , marginright: "10px" ,margin: "10px"}}>کیک کدو حلوایی</p>
            <a href="#" style={{textdecoration: "none", color: "gray", marginright: "10px"}}>hossein-heydari.ir</a>
            <p style={{fontsize: "12px", margin: "20px"}}>این مطلب درمورد پرده اتاق کودک بسیار زیبا و شیک است . این مطلب از سایت اتاق میباشد . برای مشاهده ی کامل این مطلب به سایت اتاق مراجعه کنید</p>
        </div>
        <div className="card">
            <p style={{color: "blue", fontsize: "12px" , marginright: "10px" ,margin: "10px"}}>کیک کدو حلوایی</p>
            <a href="#" style={{textdecoration: "none", color: "gray", marginright: "10px"}}>hossein-heydari.ir</a>
            <p style={{fontsize: "12px", margin: "20px"}}>این مطلب درمورد پرده اتاق کودک بسیار زیبا و شیک است . این مطلب از سایت اتاق میباشد . برای مشاهده ی کامل این مطلب به سایت اتاق مراجعه کنید</p>
        </div>
        
    </div>

</div>
  );
}

export default App;
