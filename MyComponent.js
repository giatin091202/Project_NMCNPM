import React from 'react';
import ChildComponent from './ChildComponent';
 import AddComponent from './AddComponent';
import { toContainHTML } from '@testing-library/jest-dom/dist/matchers';
class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'developer', salary: '500 $' },
            { id: 'abcJob2', title: 'tester', salary: '300 $' }
        ]
    }
    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) =>{
        let current = this.state.arrJobs;
        current = current.filter(item => item.id !== job.id);
        this.setState({
            arrJobs : current
        })
    }

    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob = {this.deleteAJob}
                />
            </>
        )
    }
}

export default MyComponent
// import React from "react";
// import ChildComponent from './ChildComponent';
//  import AddComponent from './AddComponent';

// class MyComponent extends React.Component{
//     state = {
//         arrJob : [
//             {id: '1', title: 'Developer', salary: '1000$'},
//             {id: '2', title: 'Tester', salary: '800$'}
//         ]
//     }
//     addNewJob = (job) => {
//                  this.setState({
//                     arrJobs: [...this.state.arrJobs, job]
//                  })
//              }
   
//     render (){
//         return(
//             <>
//                 <this.addNewJob
//                     addNewJob = {this.addNewJob}
//                 />
//                 <ChildComponent
//                 arrJob = {this.state.arrJob}
//                 />
//             </>
               
        
          

//         )
//     }
// }

// export default MyComponent;