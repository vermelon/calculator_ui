function AddForm(props) {



    
    return(
           
               <form onSubmit = {handleSubmit}>
           <label>
               {props.label}
              <br />
               <input type="text" value={newValue} onChange = {handleChange} name="size" />
               <br />
           </label>
           <input type="submit" value="Submit" />
       </form>    
    )
}