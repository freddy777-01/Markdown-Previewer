import Prism from 'prismjs';
const marked = require('marked');
marked.setOptions({
    breaks: true,
    highlight: function (code) {
      return Prism.highlight(code, Prism.languages.javascript, 'javascript');
    }
  });
  const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const Previewer =(props)=>{
    return(
        <div>
        <div className="preview-container bxShadow">
        <h2>Previewer</h2>
            <div dangerouslySetInnerHTML={{
        __html: marked(props.toPreview, { renderer: renderer })}}  id="preview">
                
            </div>

        </div>
        </div>
    )
}

export default Previewer