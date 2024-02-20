
import "./Navbar.css"

const Navbar = () => {
    const fruits = ["apple", "banana", "mango", "orange"]

    const num = 10
    const mul = []
    for (let i=1; i<=10; i++) {
        mul.push(<li>{num}*{i}={num*i}</li>)
    }

    let PStyle = {
        border: "5px solid blue",
        backgroundColor:"red", 
        color:"white", 
        height:"100px", 
        fontSize:"3rem",
        paddingLeft:"100px", 
        padding:"10px", 
        borderRadius:"20px"
    };


    return(
        <>
        
            {/* <h1>JSX</h1>
            <h2>{10+20}</h2> */}
            {/* {console.log("Hii good morning...!!!")} */}

            {/* <div>
                <span>Welcome to react</span>
            </div> */}

            
            {/* {
                if(10>5){
                    <h1>Its not working</h1>
                }
            }

            {
                switch(3){
                    case 1:
                    <div>Switch case alos not working</div>
                }
            } */}

            {/* {10 > 5 ? <h1>True</h1> : <h1>False</h1>}
            {1 > 5 ? <h1>True</h1> : <h1>False</h1>}

            {10 > 5 ? 2 > 5 ? <h1>True</h1> : <h1>False</h1> : <h1>False</h1>}

            <div className='text'>Hello Tushar How are you</div> */}


            <div>
                <h1 id="list">List of fruits</h1>
                <h1>{
                    fruits.map((data)=>{
                        return <li className='listItems'>{data}</li>
                    })
                }
                </h1>

                <p style={{
                    backgroundColor:"red", 
                    color:"white", 
                    height:"100px", 
                    fontSize:"3rem",
                    paddingLeft:"100px", 
                    padding:"10px", 
                    borderRadius:"20px"}}>Tushar</p>

                
                <p style={PStyle}>Tushar Kumar</p>




                <h1>{mul}</h1>


            </div>
        </>
    )
}

export default Navbar;
