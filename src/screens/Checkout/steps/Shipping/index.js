import './style.css';

function Shipping({formData, setFormData, setCurrentStep}) {
    return (
        <article className='step-content shipping-form'>
            <h2 className='step-title'>
                Szállítási adatok
            </h2>

            <div className='shipping-inputs'>

                <div className='form-group'>
                    <p className='warning'> A *-al jelölt mezőket kötelező kitölteni! </p>
                    <select name="ShippingType" className='form-control'>
                        <option value="" disabled selected> Szállítási opciók *</option>
                        <option value="delivery"> Futárszolgálat </option>
                        <option value="home"> Személyes átvétel </option>
                    </select>
                </div>

                <div className='form-group'>
                    <input type="text" class="form-control" name='country' placeholder="Ország *" required/>
                </div>

                <div className='form-group'>
                    <input type="text" class="form-control" name='address' placeholder="Irányítószám *" required/>
                </div>
                
                <div className='form-group'>
                    <input type='text' className='form-control' name='city' placeholder='Település *' required/>
                </div>

                <div className='form-group'>
                    <input type='email' className='form-control' name='street' placeholder='Utca/Házszám *' required/>
                </div>

                <div className='form-group'>
                    <input type='text' className='form-control' name='house' placeholder='Egyéb (Lépcsőház, emelet, ajtó, stb.)' />
                </div>

                <div className='form-group'>
                    <button className='button' onClick={ () => {setCurrentStep('billing')} }>
                        Vissza
                    </button>

                    <button className='button' onClick={ () => {setCurrentStep('summary')} }>
                        Tovább
                    </button>
                </div>
            </div>

        </article>
    )
}

export default Shipping;