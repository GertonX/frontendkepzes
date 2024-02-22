import Shipping from '../Shipping';
import './style.css';
import { Link } from 'react-router-dom';

function Billing({ formData, setFormData, setCurrentStep}) {
    console.log(formData);
    return (
        <article className='step-content billing-form'>
            <h2 className='step-title'>
                Személyes információk / Számlázás
            </h2>

            <div className='billing-inputs'>

                <div className='form-group'>
                    <p className='warning'> A *-al jelölt mezőket kötelező kitölteni! </p>
                    <select defaultValue="person" 
                    value={formData.isCompany ? 'company' : 'person'} 
                    name="customerType" 
                    className='form-control'
                    onChange={event => setFormData({
                        ...formData, isCompany: event.target.value === 'company'
                            }) 
                        }
                    >
                        <option value="default" disabled selected> Vásárló típusa *</option>
                        <option value="person"> Magánszemély </option>
                        <option value="company"> Cég </option>
                    </select>
                </div>


                { !formData.isCompany &&
                <div className='form-group'>
                <input  value={formData.lastname}
                        onChange={event => setFormData({...formData, lastname: event.target.value})}
                        type="text" class="form-control" name='lastname' placeholder="Vezetéknév *" required/>
                </div>
                }
                
                { !formData.isCompany &&
                <div className='form-group'>
                    <input  value={formData.firstname}
                            onChange={event => setFormData({...formData, firstname: event.target.value})}
                            type='text' className='form-control' name='firstname' placeholder='Keresztnév *' required/>
                </div>
                }   

                { formData.isCompany &&
                <div className='form-group'>
                    <input  value={formData.companyName}
                            onChange={event => setFormData({...formData, companyName: event.target.value})}
                            type="text" class="form-control" name='companyName' placeholder="Cégnév *" required/>
                </div>
                }
                
                { formData.isCompany &&
                <div className='form-group'>
                    <input  value={formData.taxNumber}
                            onChange={event => setFormData({...formData, taxNumber: event.target.value})}
                            type='text' className='form-control' name='taxNumber' placeholder='Adószám *' required/>
                </div>
                }

                <div className='form-group'>
                    <input  value={formData.email}
                            onChange={event => setFormData({...formData, email: event.target.value})}
                            type='email' className='form-control' name='email' placeholder='E-mail cím *' required/>
                </div>

                <div className='form-group'>
                    <input  value={formData.phoneNumber}
                            onChange={event => setFormData({...formData, phoneNumber: event.target.value})}
                            type='text' className='form-control' name='phoneNumber' placeholder='Telefonszám' />
                </div>

            </div>

            <div className='form-group'>
                <button className='button' onClick={ () => {setCurrentStep('shipping')} }>
                    Tovább
                </button>
            </div>
            

        </article>
    )
}

export default Billing;