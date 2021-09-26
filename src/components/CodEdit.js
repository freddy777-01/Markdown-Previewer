
export default function CodeEdit(props) {
    return(
      <div>
      <div className="editor-container bxShadow">
      <h2>Editor</h2>
          <textarea name="" id="editor" cols="60" rows="30" onChange={props.onChange} value={props.value}></textarea>
      </div>
  </div>
    ) 
  }