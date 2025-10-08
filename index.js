marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();

function App() {  
    const defaultText = `# Welcome to My Markdown Previewer!

## This is a Subheading

Here's a [link to freeCodeCamp](https://www.freecodecamp.org).

Inline code example: \`<h1>Hello World</h1>\`

\`\`\`javascript
// This is a code block
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

- List item 1
- List item 2
- List item 3

> This is a blockquote.

![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

**This text is bold!**`;
  const [text, setText] = React.useState(defaultText);

  return (
    <div className="text-center px-4">
      <h1 className="p-4">My Markdown Previewer</h1>
      <textarea
        name="text"
        id="editor"
        rows={10}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="textarea"
      ></textarea>
      <h3 className="subtitle">Preview</h3>
      <Preview markdown={text} /> 
    </div>
  );
}

function Preview({ markdown }) {
  return (
    <div id="preview"
    className="preview"
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer })
      }}
    ></div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
