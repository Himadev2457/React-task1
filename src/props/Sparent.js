import Student from '../props/Student.js'

function Parent (){
    return(
        <div>
       <Student name="Hima Bindu" age={21}  isStudent={true}/>
       <Student name="Mukku" age={23} isStudent={false}/>
       <Student />
        </div>
    )
}
export default Parent;