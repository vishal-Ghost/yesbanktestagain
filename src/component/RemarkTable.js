import React,{useState} from 'react'

function Remarktable() {
  const [servicelist, setservicelist] = useState([{name:'',remark:''}])

  const handleaddrow = () =>{
    setservicelist([...servicelist,{name:'', remark:''}])
  }

  const handleremoverow = (index)=>{
    const list =[...servicelist]
    list.splice(index,1)
    setservicelist(list)
  }

  function handlelog() {
  console.log('servicelist',servicelist)
  }

  const handlechangeinput = (index,event) =>{
    const values = [...servicelist]
    values[index][event.target.name]= event.target.value
    setservicelist(values)
  }


  return (
    <>
    <div className='container' id='div1'>
    <table id='table1'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Remark
        <button className='btn btn-primary' id ='btns' onClick={handlelog}>Save</button>
    <button className='btn btn-success' id='btna' onClick={handleaddrow} >+</button>
             </th>
        </tr>
      </thead>
      {servicelist.map((singleservice,index) => (
        <tbody>
        <tr>
          <td>
            <select name="name" id="name" value={servicelist.name} onChange={event=> handlechangeinput(index,event)} >
              <option value="">--select Name--</option>
              <option value="Vishal">Vishal</option>
              <option value="madhur">madhur</option>
              <option value="swapnali">swapnali</option>
            </select>
          </td>
          <td>
            <textarea name="remark" id="remark" cols="140" rows="5" placeholder='Enter Remark Here' value={servicelist.remark} onChange={event=> handlechangeinput(index,event)}></textarea>
          </td>
        </tr>
        <button className='btn btn-danger' id='btnr'  onClick={()=>handleremoverow(index)}>-</button>
      </tbody>
    ))}     
    </table>
    </div>
    </>
  )
}

export default Remarktable