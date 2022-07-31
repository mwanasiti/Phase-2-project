
import {React, useState, useEffect} from 'react'


function Form({handleData}) {
  const [formData, setFormData] = useState({
    name:'',
    identification:'',
    department:'',
    rating:'',
    reason:'',
  });

  const onChange=(e)=>{
    const name = e.target.name
    let value = e.target.value

    setFormData({
      ...formData,
      [name]:value
    });
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    handleData(formData)
  }

  return (
     <form className='card cardform p-5' onSubmit={onSubmit}>
          <label>
            Name:
          </label>
          <input onChange={onChange} name="name" value={formData.name} type="text"/>
          <hr></hr>

         
          <label>
            ID Number:
          </label>
          <input onChange={onChange} name="identification" value={formData.identification} type="number"/>
          <hr></hr>

        
          <label>
            Instituition/office:
          </label>
          <input onChange={onChange} name="office" value={formData.office} type="text"/>
          <hr></hr>

        
          <label>
            Department visited:
          </label>
          <input onChange={onChange} name="department" value={formData.department} type="text"/>
          <hr></hr>

        
          <label>
            Service quality rating(1-10):
          </label>
          <input onChange={onChange} name="rating" value={formData.rating} type="number" min='1' max='10'/>
          <hr></hr>

          
          <label>
            Reason for above rating:
          </label>
          <textarea onChange={onChange} name="reason" value={formData.reason} type="text"/>
        
          <hr></hr>

          
    <div>
    <button type='submit'>Submit</button>
    </div>
        </form>
  );
}

export default Form;