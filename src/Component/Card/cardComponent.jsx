import './card.css'; 

const card =()=>{
    const name="کیک کدو حلوایی";
    let url ="hossein-heydari.ir";
    return(
      
        <div className="card">
            <p style={{color: "blue", fontsize: "12px" , marginright: "10px" ,margin: "10px"}}>{name}</p>
            <a href="#" style={{textdecoration: "none", color: "gray", marginright: "10px"}}> {url}</a>
            <p style={{fontsize: "12px", margin: "20px"}}>این مطلب درمورد پرده اتاق کودک بسیار زیبا و شیک است . این مطلب از سایت اتاق میباشد . برای مشاهده ی کامل این مطلب به سایت اتاق مراجعه کنید</p>
        </div>
    )
}
export default card;
