import React from 'react';

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs //Phủ định
        }
        )
    }

    handleOnclickDelete = (job) => {
        this.props.deleteAJob(job)
    }

    render() {
        console.log('>>>Check props', this.props)

        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJob = true' :'showJob = false';
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button className='show' onClick={() => this.handleShowHide()}>
                            Show
                        </button>
                    </div>
                :
                    <>
                        <div className='job-list'>
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} 
                                            <></> 
                                            <span className='buttonDelete' onClick={() => this.handleOnclickDelete(item)}><button>x</button></span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button className='hide' onClick={() => this.handleShowHide()}>
                                Hide
                            </button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default ChildComponent

// import React from "react";

// class ChildComponent extends React.Component
// {
//     state = {
//         showJob: false
//     }
//     onClickShowHideJob = () =>{
//         this.setState({
//             showJob : !this.state.showJob
//         })
      
//     }
//     render(){
//         console.log("check:", this.props)
//         let { arrJob} = this.props;
//         let { showJob } = this.state;
//         let check = showJob === true ? 'showJob = true' :'showJob = false';
//         return(
//             <>  
                
//             {
//                 (showJob === false) ?
//                 <div>
//                     <button className="show" onClick={() => this.onClickShowHideJob()}>Show</button> <br/>
//                 </div>
//                :
//                <>
//                     <div className="job_list">
//                     {
//                                  arrJob.map((item, index) => {
//                                      return (
//                                          <div key={item.id}>
//                                             {item.title} - {item.salary} 
//                                             <></> 
//                                             {/* <span className='buttonDelete' onClick={() => this.handleOnclickDelete(item)}><button>      x</button></span> */}
//                                         </div>
//                                     )
//                                 })
//                             }
//                     </div>
//                     <div>
//                         <button className="show" onClick={() => this.onClickShowHideJob()}>Hide</button> <br/>
//                      </div>
//                </>
           
//             }
//             </>
//         )
       
//     }
// }
// export default ChildComponent;