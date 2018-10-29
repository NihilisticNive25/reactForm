import React from 'react';
import Select from 'react-select';

const time = ({ timing, handleTimeChange, onRouteChange }) => {
	
	const clock = [
	{value : "00:00", label : "00:00"},
{value : "01:00", label : "01:00"},
{value : "02:00", label : "02:00"},
{value : "03:00", label : "03:00"},
{value : "04:00", label : "04:00"},
{value : "05:00", label : "05:00"},
{value : "06:00", label : "06:00"},
{value : "07:00", label : "07:00"},
{value : "08:00", label : "08:00"},
{value : "09:00", label : "09:00"},
{value : "10:00", label : "10:00"},
{value : "11:00", label : "11:00"},
{value : "12:00", label : "12:00"},
{value : "13:00", label : "13:00"},
{value : "14:00", label : "14:00"},
{value : "15:00", label : "15:00"},
{value : "16:00", label : "16:00"},
{value : "17:00", label : "17:00"},
{value : "18:00", label : "18:00"},
{value : "19:00", label : "19:00"},
{value : "20:00", label : "20:00"},
{value : "21:00", label : "21:00"},
{value : "22:00", label : "22:00"},
{value : "23:00", label : "23:00"},
{value : "24:00",  label : "24:00"},
	];



	return (
		<div>

<div className="table">
<div className="timeRow ma3">
<p  className="title f3 w-90 tableColumn">What time is your business open?</p>
</div>
 

  <div className="timeRow">
    <p className="activeBtn" >Mon</p>
 <p className="activeBtn" >Tue</p>
 <p className="activeBtn" >Wed</p>
 <p className="activeBtn" >Thu</p>
 <p className="activeBtn" >Fri</p>
 <p className="inactiveBtn" >Sat</p>
 <p className="inactiveBtn" >Sun</p>
 </div>
 <div className="timeRow ma3">
           <div className="w-100 w-40-m w-50-l tableColumn" >
        <label  className="labelCSS">Open time</label>
		 <Select
          defaultValue={timing.weekDayOpen}
          options={clock}
          onChange={handleTimeChange('weekDayOpen')}
           
          />
          
          </div>
           <div className="w-100 w-40-m w-50-l tableColumn" >
        
        <label  className="labelCSS">Close timing</label>
          <Select
          defaultValue={timing.weekDayClose}
          options={clock}
          onChange={handleTimeChange('weekDayClose')}
          
          />
          
          </div>
          </div>

          <div className="timeRow">
          
          <p className="inactiveBtn" >Mon</p>
 <p className="inactiveBtn" >Tue</p>
 <p className="inactiveBtn" >Wed</p>
 <p className="inactiveBtn" >Thu</p>
 <p className="inactiveBtn" >Fri</p>
 <p className="activeBtn" >Sat</p>
 <p className="inactiveBtn" >Sun</p>
</div>
<div className="timeRow ma3">
           <div className="w-100 w-40-m w-50-l tableColumn" >
        
        <label  className="labelCSS">Open time</label>
          <Select
          defaultValue={timing.weekEndOpen}
          options={clock}
          onChange={handleTimeChange('weekEndOpen')}
          
          />
          
          </div>
           <div className="w-100 w-40-m w-50-l tableColumn" >
        
        <label  className="labelCSS">Close timing</label>
          <Select
          defaultValue={timing.weekEndClose}
          options={clock}
          onChange={handleTimeChange('weekEndClose')}
          
          />
           </div>
          
          </div>
          <div className="timeRow ">
          <p className="inactiveBtn " onClick={() => onRouteChange('home')}>Back</p>
          </div>
          </div>
	</div>
	);
}



export default time;