const MyComp = () => {
    return <h1>My First Component</h1>
  }
  let x = 10
  const myjsx = <span>This {x} is my JSX</span>
  
  function MyComp2() {
    return (
      <>
        <h1>My Second {myjsx} Component</h1>
        <MyComp />
      </>
  )
  }
  
  const MyComp3 = () => {
    return (
      <>
        <h1>I am parent of everyone!</h1>
        <MyComp />
        <MyComp2 />
      </>
    )
  }

  export {MyComp, MyComp2}; // named export
  export default MyComp3;