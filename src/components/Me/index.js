import './style.css';


function Me({ myData }) { 
    return (
        <div>
          <p>
              Életkor: {myData.age}
          </p>
          <p>
              Neve: {myData.firstName} {myData.lastName}
          </p>
          <div>
              Kedvenc zeném: 
              {myData.myMusic.map((zene, zeneIndex) => //annyi elemmel tér vissza amennyi a tömb darabszáma
                <p key={zeneIndex}>
                  { zene }
                </p>
              )}
          </div>
        </div>
    );
  }
  
  export default Me;