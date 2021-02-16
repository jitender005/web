import React, { Suspense, useState } from 'react';
import MyComponent from './Component/Mycomponent';

function App() {
  const [currentstate,setstate]=useState({
    info:"my first react app",
    para:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English"
  })

  const langeventchange=()=>{
    setstate({
      info:"أول تطبيق رد فعل",
       para:"هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. الهدف من استخدام لوريم إيبسوم أنه يحتوي على توزيع طبيعي -إلى حد ما- للأحرف ، بدلاً من        "
      
    })
  }

  return (
    <Suspense fallback="loading">
      <MyComponent data={currentstate.info} data2={currentstate.para} changeHandler={langeventchange} />
    </Suspense>
  );
}

export default App;
