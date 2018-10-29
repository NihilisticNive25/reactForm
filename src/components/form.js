import React from 'react';
import Select from 'react-select';

const form = ({ handleChange, handleSelectChange, details, timing, onRouteChange}) => {
  
  
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const countryList = [
            {Value: "France", label: "France"}, 
            {Value: "Germany", label: "Germany"}, 
            {Value: "Greece", label: "Greece"},
            {Value: "Turkey", label: "Turkey"},
            {Value: "Italy", label: "Italy"},
            {Value: "Netherlands", label: "Netherlands"},
            {Value: "Portugal", label: "Portugal"},
            {Value: "Spain", label: "Spain"},
            {Value: "Switzerland", label: "Switzerland"},
            {Value: "United Kingdom", label: "United Kingdom"},
            {Value: "United States of America", label: "United States of America"},
        ];


	return (
  
<div className="table">
<div className="tableRow">

        <div className="w-90 w-40-m w-50-l tableColumn">
          <label  className="labelCSS">Name of the place </label>
          <input  className="inputStyle w-100" 
          onChange={handleChange.bind(this)}
          name = "name"
          type="text" defaultValue={details.name}/>
          
        </div>
        <div className="w-90 w-40-m w-50-l tableColumn" >
        
          <label  className="labelCSS">Street Address</label>
          <input  className="inputStyle w-100" 
          onChange={handleChange.bind(this)}
          name = "street"
          type="text" defaultValue={details.street}/>
          
        </div>
        </div>
        
        <div className="tableRow mb2">
        <div className="w-90 w-40-m w-50-l tableColumn" >
        <label className="labelCSS">City </label>
        <Select
          defaultValue={details.city}          
          options={options}
          placeholder = "City"
          classNamePrefix ="w-100"
          name  = "city"
          onChange={handleSelectChange('city')}
          />

          </div>
          
          <div className="w-90 w-40-m w-50-l tableColumn" >
          <label className="labelCSS">State <span className="normal black-60">(optional)</span></label>
        <Select
          defaultValue={details.state}          
          options={options}
          placeholder  ="State"
          name  = "state"
          onChange={handleSelectChange('state')}
          />
          </div>
          </div>
  
<div className="tableRow">
<div className="w-90 w-40-m w-50-l tableColumn" >
        
          <label  className="labelCSS">Zip code </label>
          <input  className="inputStyle db w-100"
          onChange={handleChange.bind(this)}
          name = "zipcode"
           type="text" defaultValue={details.zipcode}/>   
        </div>
        <div className="w-90 w-40-m w-50-l tableColumn" >
        <label  className="labelCSS">Country </label>
          <Select
          defaultValue={details.country}
          options={countryList}
          placeholder = "Country"
          onChange={handleSelectChange('country')}
          />
          </div>
</div>

<div className="tableRow">

        <div className="w-90 w-40-m w-50-l tableColumn">
          <label  className="labelCSS">Website </label>
          <input  className="inputStyle w-100" 
          onChange={handleChange.bind(this)}
          name = "website"
          type="text" defaultValue={details.website}/>
          
        </div>
        <div className="w-90 w-40-m w-50-l tableColumn" >
        
          <label  className="labelCSS">Link to online menu </label>
          <input  className="inputStyle w-100" 
          onChange={handleChange.bind(this)}
          name = "menu"
          type="text" defaultValue={details.menu}/>
          
        </div>
        </div>

        <div className="tableRow">
        <div className="w-90 w-40-m w-50-l tableColumn" >
        
          <label  className="labelCSS">Instagram</label>
         
          <input  className="inputStyle w-100"
          onChange={handleChange.bind(this)}
          name = "insta"
           type="text" 
          defaultValue= {`@ ${details.insta}`}/>
          
        </div>
        <div className="w-90 w-40-m w-50-l tableColumn" >
        
          <label  className="labelCSS">Facebook</label>
          <input  className="inputStyle w-100" 
          onChange={handleChange.bind(this)}
          name = "facebook"
          type="text" defaultValue={details.facebook}/>
          
        </div>
        </div>

<div className="tableRow">
<div className="w-90 w-40-m w-50-l tableColumn" >
        
          <label className="labelCSS">About <span className="normal black-60">(Max 180 characters)</span></label>
          <textarea defaultValue={details.about} 
          onChange={handleChange.bind(this)}
          name = "about"
          className="textareaStyle w-100 tableColumn " aria-describedby="comment-desc"></textarea>
        
  </div>
<div className="w-90 w-40-m w-50-l tableColumn" >
          
          <label  className="labelCSS">Category</label>
          <small className="black-60 readOnly">{details.category}</small>       
        
<div className="tl">
         <a className="linkBtn tl" title="Contact">Edit</a>
</div>
  <label  className="labelCSS">Opening hours</label>
          <div className="subRows">
          <label  className="subColumn tl">Monday - Friday</label>
           <span className="normal black-60">{`${timing.weekDayOpen.value} - ${timing.weekDayClose.value}`}</span>  
</div>

<div className="subRows">
         <label  className="subColumn">Saturday</label>
           <span className="normal black-60">{`${timing.weekEndOpen.value} - ${timing.weekEndClose.value}`}</span>  
</div>

<div className="subRows">
          <label  className="subColumn">Sunday</label>
           <span className="normal black-60">Closed</span>
</div>
<div className="tl">
           <p className="linkBtn tl" onClick={() => onRouteChange('timeDisplay')} >Edit</p>
           </div>
           </div>
</div>
     
      </div>
  );

}

export default form;