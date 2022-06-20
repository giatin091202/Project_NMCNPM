import React from 'react';

class Home extends React.Component {
    state = {
        name: '20127645',
        studentID : '20127645'
    }
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleClickButton = () =>
    {
        alert("wonderfull!!")
    }
    render() {
       
        //let name = "20127645"
        
        return (
            //cách 1
            // <div className='official'>
            //      <div className='first'>
            //     Hello world from {name}
            //     </div>

            //     <div className='second'>
            //         võ hoàng gia tín
            //     </div>
            // </div>
            //cách 2
        //    <React.Fragment>
        //         <div className='first'>
        //         Hello world from {name}
        //         </div>

        //         <div className='second'>
        //             võ hoàng gia tín
        //         </div>
        //    </React.Fragment>
           //cách 3
           <>
            <div className='first'>
                {/* Hello world from {name} */}
                <input value = {this.state.name} type ="text"
                onChange={(event) => this.handleOnChangeName(event)}
                />
                Hello world from {this.state.name}
                </div>

                <div className='second'>
                    võ hoàng gia tín
                </div>
                
                <div className='third '>
                    <button onClick={() => this.handleClickButton()}>submit</button>
                </div>
           </>
        )
    }
}
export default Home;