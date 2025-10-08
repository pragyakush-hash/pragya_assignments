import React, { useEffect } from 'react'

const Semi_hard3 = () => {
     useEffect(() => {
    console.log('componentDidMount behavior');
    const intervalId = setInterval(() => {
      console.log('Interval running');
    }, 1000);

    return () => {
      console.log('componentWillUnmount behavior');
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h3>Semi_hard1_question 3</h3>
    </div>
  )
}

export default Semi_hard3
