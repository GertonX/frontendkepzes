import './style.css';
import { useState } from 'react';
import Billing from './steps/Billing';  
import Shipping from './steps/Shipping';
import { Link } from 'react-router-dom';
import Summary from './steps/Summary';
import SendOrder from './steps/SendOrder';

function Checkout () {

    const orderSteps = [
        { id: 'billing', orderNumber: '1', label: 'Számlázás' },
        { id: 'shipping', orderNumber: '2', label: 'Szállítás' },
        { id: 'summary', orderNumber: '3', label: 'Összegzés' },
        { id: 'send-order', orderNumber: '4', label: 'Megrendelés' }
    ] 

    //const orderSteps = ["billing", "shipping", "summary", "send-order"];
    const [currentStep, setCurrentStep] = useState('billing');
    const [checkoutFormData, setCheckoutFormData] = useState({isCompany: false});


    const getStepContent = () => {
        switch(currentStep) {
            case 'billing':
              return <Billing setCurrentStep={setCurrentStep} formData={checkoutFormData} setFormData={setCheckoutFormData} /> ;
            case 'shipping':
              return <Shipping setCurrentStep={setCurrentStep} formData={checkoutFormData} setFormData={setCheckoutFormData} />;
            case 'summary':
              return <Summary setCurrentStep={setCurrentStep} />;
            case 'send-order':
              return <SendOrder setCurrentStep={setCurrentStep} />;
            default:
              return 'foo';
          } 
        
    }

    return (
        <section className='checkout'>
            <div className='container'>
                <h1 className='headline'>
                    Rendelés
                </h1>

                <ul className='order-steps'>
                    
                    {orderSteps.map((order) =>
                    
                    <>
                        <li className={'order-step ' + (currentStep === order.id ? 'active' : '')}>
                            <div className='order-step-counter'>
                                {order.orderNumber}
                            </div>

                            <p className='order-step-label'>
                                {order.label}
                            </p>
                        </li>
                        </>
                
                
                )}

                </ul>

                <div className='order-steps-countent'>
                    { getStepContent() }
                </div> 
            </div>
        </section>
    )
}

export default Checkout;