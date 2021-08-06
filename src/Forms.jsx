import React, { useState } from "react";

const FormSection = ()=>{
    {/**/}
    const[userName,SetName ]= useState(''); 
    const[userEm,SetEmail] = useState('');
    const[userG,SetGender] = useState();
    const [takeFile,UpdateFile] = useState();
    const[selectEdu,setEdu] = useState();
    const[userpassword,SetPass] = useState();
    const[passre,SetPassRe] = useState();

    {/*your Nname*/}
    const userHandler = (event) =>{
        SetName(event.target.value);
    }
    {/*your email*/}
    const userEmail =(event) => {
        SetEmail(event.target.value);
    }
    {/*your gender*/}
    const userGender = (event)=>{
        SetGender(event.target.value);
    }
    {/*your file*/}
    const userFile = (event)=>{
        UpdateFile(event.target.value);
    }
    {/*Level of Education(Select options)*/}
    const userEducation = (event)=>{
        setEdu(event.target.value);
    }
    {/*your password*/}
    const userPas = (event)=>{
        SetPass(event.target.value);
    }
    {/*your password*/}
     const userRenterPas = (event)=>{
        SetPassRe(event.target.value);
    }
    {/*print all values on the console*/}
    const formSubmit = (e)=>{
        e.preventDefault();
        console.log({userName})
        console.log({userEm});
        console.log({userG});
        console.log({takeFile});
        console.log({selectEdu});
        console.log({userpassword});
        console.log({passre});
        alert('congratulation! your data is submit');
    }

    return(
        <form className="formBox" onSubmit={formSubmit}>
            <p className="formFiled">
                <input type="text" placeholder="Enter your Name" name={userName} value={userName} onChange={userHandler} required/>
            </p>
            <p className="formFiled">
               <input type="email" placeholder="Enter your Email"  name={userEm} value={userEm} onChange={userEmail} required/>
            </p>
            <p className="formFiled">
                <div className="radioButtonFiled">
                    <span>
                        Gender
                    </span>
                    <div className="radioBtnItem">
                        <input type="radio" id="male" name="gender" value="Male" onChange={userGender} required/>
                        <label for="male">Male</label>
                    </div>
                    <div className="radioBtnItem">
                        <input type="radio" id="female" name="gender" value="Female" onChange={userGender}  required/>
                        <label for="female">Female</label>
                    </div>
                </div>
            </p>
            <p className="formFiled">
                <label for="myfile" >Select Your Profile:</label> &nbsp; &nbsp;
                <input type="file" id="myfile" name={takeFile} value={takeFile} onChange={userFile} className="Myfile" required/>
            </p>
            <p className="formFiled">
                <label className="selectMenu">
                Level of Education(Select options):
                    <select onChange={userEducation}>
                        <option value="Highschool">High school </option>
                        <option value="Technical">Technical or occupational certificate</option>
                        <option value="AssociateDegree">Associate degree.</option>
                        <option value="BachelorDegree">Bachelor's degree</option>
                        <option value="MasterDegree">Master's degree</option>
                        <option value="Doctorate">Doctorate</option>
                    </select>
                </label>
            </p>
            <p className="formFiled">
                <input type="password" placeholder="Enter your password" name={userpassword} value={userpassword} onChange={userPas} required/>
            </p>
            <p className="formFiled">
                <input type="password" placeholder="Confirm password" name={passre} value={passre} onChange={userRenterPas} required/>
            </p>
            <p>
                <input type="submit" value="Submit" className="btn"/>
            </p>
        </form>
    );
}
export default FormSection;