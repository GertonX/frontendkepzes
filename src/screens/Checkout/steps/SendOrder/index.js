import './style.css';

function SendOrder ({setCurrentStep}) {
    return (
        <article className='step-content sendOrder-form'>
            <h2 className='step-title'>
                Megrendelés
            </h2>

            <div className='form-group'>
                <button className='button' onClick={ () => {setCurrentStep('summary')} }>
                    Vissza
                </button>

                <button className='button'>
                    Megrendelés leadása
                </button>
            </div>

        </article>
    )
}

export default SendOrder;