import React from 'react';

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    }
    onChangeTitleJob = (event) => {
        this.setState(
            {
                title: event.target.value
            }
        )
    }
    onChangeSalary = (event) => {
        this.setState(
            {
                salary: event.target.value
            }
        )
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.title === '' || this.state.salary === '') {
            alert('Error')
            return;
        }
        else alert('congratulation!!!!')
        this.props.addNewJob({
            id: Math.floor(Math.random() * 10001),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }
    render() {
        return (
            <form>
                <label className='title' htmlFor="fname">Job Title:</label><br />
                <input
                className='inputJob'
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.onChangeTitleJob(event)}
                    
                />
                <br />
                <label className='salary' htmlFor="lname">Salary:</label><br />
                <input
                className='inputSalary'
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.onChangeSalary(event)}
                />
                <br /><br />
                <input
                    className='submit'
                    type="submit"
                    value="Submit"
                    onClick={(event) => this.handleSubmit(event)}
                   
                />
            </form>
        )
    }
}

export default AddComponent

// import React from "react";  

// class AddComponent extends React.Component
// {
//     state = {
//         title:'',
//         salary:'',
//     }
//     onChangeTittleJob = (event) =>{
//         this.setState({
//             title : event.target.value
//         })
//     }

//     onChangeSalary =(event) =>{
//         this.setState({
//             salary: event.target.value
//         })
//     }

//     onClickSubmit = (event) =>
//     {
//         event.preventDefault()
//         if(this.state.title === '' || this.state.salary === '')
//         {
//             alert("errol!!!")
//             return;
//         }
//         this.props.addNewJob({
//                         id: Math.floor(Math.random() * 10001),
//                         title: this.state.title,
//                         salary: this.state.salary
//                      })

//         this.setState({
//             title:'',
//             salary:''
//         })
       
//     }
//     render (){
//         return(
//             <form>
//                 <label className="job" htmlFor="jobs" > Job Title:</label> <br/>
//                 <input  
//                     type = "text"
//                     value = {this.state.title}
//                     onChange = {(event) => this.onChangeTittleJob(event)}
//                 />
//                 <br/>
//                 <label className="salary" htmlFor="salary">Salary</label> <br/>
//                 <input 
//                     type = "text"
//                     value = {this.state.salary}
//                     onChange = {(event) => this.onChangeSalary(event)}
//                 />
//                 <br/>
//                 <button className="submit" onClick={(event)=> this.onClickSubmit(event)}>Submit</button>
//             </form>
          

//         )
//     }
// }

// export default AddComponent;