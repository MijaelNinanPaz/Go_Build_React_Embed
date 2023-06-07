import './CoolCalcDemo.css';

const CoolCalcDemo = () => {
    const name = import.meta.env.VITE_COMPANY;
    const username = import.meta.env.VITE_USERNAME;
    const password = import.meta.env.VITE_PASSWORD;

    console.log(name)
return (
    <>
        <h1>
            Cool Calc Demo
        </h1>
        <div className="responsive-container">
            <div className="responsive-element">
                <h2>COMPANY</h2>
                <p>{name}</p>
            </div>
            <div className="responsive-element">
                <h2>USERNAME</h2>
                <p>{username}</p>
            </div>
            <div className="responsive-element">
                <h2>PASSWORD</h2>
                <p>{password}</p>
            </div>
            <div className="responsive-element">Elemento 4</div>
            <div className="responsive-element">Elemento 5</div>
            <div className="responsive-element">Elemento 6</div>
        </div>
    </>
    );
}

export default CoolCalcDemo
