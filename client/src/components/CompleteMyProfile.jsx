import React, { useRef, useState } from 'react';

import profilepic from '../images/profilepic.png';
// import Typist from 'react-typist';
// import 'react-typist/dist/Typist.css'; 
import '../styles/CompleteMyProfile.css';
import backendUrl from '..';

function ProfileEditForm() {
  let individual_id;
  let auth = localStorage.getItem("member")
  auth = JSON.parse(auth)
  console.log(auth)
    if(auth === null){
        window.location.href = "/login";
    }
    else{
       individual_id = auth.member._id
       console.log(individual_id)
    }
  const fileInputRef = useRef(null);
  const [photoSrc, setPhotoSrc] = useState(profilepic);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.member.name,
    email: auth.member.email,
    // password:'',
    academic:'',
    branch:'',
    contact: '',
    linkedin: '',
    git: '',
    // inputList: [{Name:'', link:''}],
    inputList: [{ Name: '', link: '' }],
    textBoxes: [{ expertise: '', specificExpertiseList: [''] }],
  });
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
  };

  const handleBlur = () => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const isValid = emailRegex.test(email);
    setIsValidEmail(isValid);
  };
  const handlePhotoClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);
      setPhotoSrc(objectURL);
    } else {
      setPhotoSrc('profilepic.png');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const [inputList, setinputList]= useState([{Name:'', link:''}]);
 
//   const handleinputchangelink=(e, index)=>{
//     const {name, value}= e.target;
//     const list= [...inputList];
//     list[index][name]= value;
//     setinputList(list);
 
//   }

    const handleinputchangelink = (e, index) => {
        const { name, value } = e.target;
        setinputList((prevInputList) => {
            const updatedList = [...prevInputList];
            const currentItem = updatedList[index];
        
            // Update the current item based on the input field's name
            currentItem[name] = value;
        
            return updatedList;
        });
    };
  
  
  const handleremove= index=>{
    const list=[...inputList];
    list.splice(index,1);
    setinputList(list);
  }
 
  const handleaddclick=()=>{ 
    setinputList([...inputList, { Name:'', link:''}]);
  }
  
  const [textBoxes, setTextBoxes] = useState([{ expertise: '', specificExpertiseList: [''] }]);

  const expertiseOptions = ["Web Development", "App Development", "Machine Learning"];

  const specificExpertiseOptions = {
    "Web Development": ["ReactJS", "NodeJS", "MERN Stack"],
    "App Development": ["Flutter"],
    "Machine Learning": ["TensorFlow", "PyTorch", "Scikit-Learn"],
  };

  const addTextBox = () => {
    setTextBoxes([...textBoxes, { expertise: '', specificExpertiseList: [''] }]);
  };

  const addMoreSpecificExpertise = (index) => {
    const updatedTextBoxes = [...textBoxes];
    updatedTextBoxes[index].specificExpertiseList.push('');
    setTextBoxes(updatedTextBoxes);
  };

  /*const removeTextBox = (index) => {
    if (textBoxes.length > 1) {
      const updatedTextBoxes = [...textBoxes];
      updatedTextBoxes.splice(index, 1);
      setTextBoxes(updatedTextBoxes);
    }
  };*/

  const handleInputChangedomain = (index, field, value) => {
    const updatedTextBoxes = [...textBoxes];
    updatedTextBoxes[index][field] = value;
    setTextBoxes(updatedTextBoxes);
  };

  const handleSpecificExpertiseChange = (index, listIndex, value) => {
    const updatedTextBoxes = [...textBoxes];
    updatedTextBoxes[index].specificExpertiseList[listIndex] = value;
    setTextBoxes(updatedTextBoxes);
  };
  
  const submit = async (e) => {
    e.preventDefault();
    const { name, email,  academic, branch, contact, linkedin, git, inputList, textBoxes } = formData;
    const expertise = textBoxes.map((textBox) => textBox.expertise);
    const specificExpertiseList = textBoxes.map((textBox) => textBox.specificExpertiseList);
    const data = { name, email,  academic, branch, contact, linkedin, git, inputList, expertise, specificExpertiseList };
    console.log(data);
    const response = await fetch(`${backendUrl}/api/register`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      
    });
    const body = await response.text();
    console.log(body);
    alert("Succesful")
    // window.location.href = "/";
  }
  
  
  return (
    <div className="wrapper">
      <div className="profile">
        <div className="content">
          
        <div className='register-text'>
          <label>Register</label>
          </div>
 
          <form action="">
            {/* Photo */}
            <div className="photo-container" onClick={handlePhotoClick}>
              <span className="photo" style={{ backgroundImage: `url(${photoSrc})` }}></span>
              <input
                type="file"
                className="btn"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                style={{ display: 'none' }}
              />
            </div>

            {/* Name */}
            <div className="form-field">
              <label htmlFor="name" className="julius-font">
                FULL NAME
              </label>
              <div className="input-container">
                <input  required type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
              </div>
            </div>

            
            {/* Class */}
            

            {/* Email */}
            <div className="form-field">
              <label htmlFor="email">EMAIL</label>
              <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {/* {isValidEmail ? null : <p style={{ color: 'red' }}>Enter a valid email address</p>} */}
            </div>
            {/*password */}
            <div className="form-field">
        <label htmlFor="password">PASSWORD</label>
        <div >
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '9px', fontSize: '16px', borderRadius: '3px', backgroundColor: '#ddd', marginBottom: '20px' }}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
          >
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </div>
      </div>
      {/* Other form fields */}
       {/* Academic Year */}
            <div className="form-field">
              <label htmlFor="class">ACADEMIC YEAR</label>
              <input type="text" id="academic" name="academic" value={formData.academic} onChange={handleInputChange} />
            </div>

            {/* Branch */}
            <div className="form-field">
              <label htmlFor="branch" className="julius-font">
                BRANCH
              </label>
              <div className="input-container">
                <input type="text" id="branch" name="branch" value={formData.branch} onChange={handleInputChange} />
              </div>
            </div>

            {/* Contact */}
            <div className="form-field">
                <label htmlFor="contact">PHONE NUMBER</label>
                <input
                          type="tel"
                           id="contact"
                              name="contact"
                                   pattern="[0-9]{10}" // Use a pattern for 10 digits
                            value={formData.contact}
                             onChange={handleInputChange}
                             required
                             style={{marginBottom:'10px'}}
                             />
                     </div>
            {/* Social Media links (linkedIn) */}
            <div className="form-field">
            <label htmlFor="linkedin">LINKEDIN</label>
              
              
              <input type="text" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleInputChange} />
            
            </div>
          
            {/* Social Media links (GitHub) */}
            <div className="form-field">
              <label htmlFor="git"> GITHUB</label>
              <input type="text" id="git" name="git" value={formData.git} onChange={handleInputChange} />
            </div>
           


            {/* Two textboxes in a single div */}
            

            
            { 
            inputList.map( (x,i)=>{
              return(
              <div className="form-field" >
                 <label >Additional links</label>
                 <div class="form-group " >
                 
                 
                  <input type="text" style={{   alignItems: 'center' }} name="Name" class="form-control"  placeholder="Name" onChange={ e=>handleinputchangelink(e,i)} />
               
              
                  <input type="text"  name="link" class="form-control"  style={{marginLeft: '10px'}}  placeholder="Link" onChange={ e=>handleinputchangelink(e,i) }/>
                  {
                  inputList.length!==1 &&
                  <button  className="btn btn-danger mx-1" onClick={()=> handleremove(i)} style={{marginLeft: '10px',marginBottom: '10px'}}>Remove</button>
               }
               </div>
               <div class="form-group col-md-2 mt-4"  style={{ marginLeft: '0px',marginBottom:'10px' }}>
               
               { inputList.length-1===i &&
               <button  className="btn btn-success" onClick={ handleaddclick}>Add More</button>
               }
               </div>
            </div>
              );
             } )} 
            {/* Other form fields */}
             <div className="form-field">
              <label >Expertise</label>
              {textBoxes.map((textBox, index) => (
  <div key={index}>
    {/* Input for Expertise with Dropdown */}
    <div style={{ display: 'flex', marginRight: '50px', marginBottom: '0px' }}>
      <input
        type="text"
        name="expertise"
        className="form-control"
        placeholder="Expertise"
        value={textBox.expertise}
        onChange={(e) => handleInputChangedomain(index, 'expertise', e.target.value)}
        list={`expertise-options-${index}`}
      />
      {/* Dropdown for Expertise */}
      <datalist id={`expertise-options-${index}`}>
        {expertiseOptions.map((option, optionIndex) => (
          <option key={optionIndex} value={option} />
        ))}
      </datalist>
    </div>
    {/* Add more specific expertise button */}
    <button
      type="button"
      className="btn btn-primary ml-2"
      onClick={() => addMoreSpecificExpertise(index)}
      style={{ marginLeft: '0px', marginBottom: '15px' }}
    >
      Add More Specific Expertise
    </button>

    {/* Input for Specific Expertise */}
    {textBox.specificExpertiseList.map((specificExpertise, listIndex) => (
      <div key={listIndex} className="mt-2">
        <input
          type="text"
          name={`specificExpertise-${listIndex}`}
          className="form-control"
          placeholder="Specific Expertise"
          value={specificExpertise}
          onChange={(e) => handleSpecificExpertiseChange(index, listIndex, e.target.value)}
          list={`specific-expertise-options-${index}-${listIndex}`}
        />
        {/* Dropdown for Specific Expertise */}
        <datalist id={`specific-expertise-options-${index}-${listIndex}`}>
          {specificExpertiseOptions[textBox.expertise]?.map((option, optionIndex) => (
            <option key={optionIndex} value={option} />
          ))}
        </datalist>
      </div>
    ))}

    {/* Remove button */}
  </div>
))}
      {/* Add more button */}
      <div className="form-group col-md-2 mt-4" style={{ marginLeft: '0px', marginBottom: '10px' }}>
        <button type="button" className="btn btn-success" onClick={addTextBox}>
          Add More
        </button>
      </div>
               </div>
             
    {/*submit */}
            <div className="button-container">
              <input type="submit" className="Btn" value="Submit" onClick={submit}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  }

export default ProfileEditForm;
