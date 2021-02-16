import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

function MyComponent(props) {
  const { t, i18n } = useTranslation();

  return(
  <div> <h1>{props.data}</h1>
  <p>{props.data2}</p>
  <button onClick={props.changeHandler}>change</button>
  </div>
                     )
  
}

export default MyComponent;