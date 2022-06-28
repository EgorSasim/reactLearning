
const greeting = <h1>Greeting!!!</h1>
const content = <div>Some content 
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</div>
const footer = <p>Some footer info</p>

const page = <div>
    {greeting}
    {content}
    {footer}
</div>

let $container = document.getElementById('container');

$container.append(JSON.stringify(page));

ReactDOM.createRoot(document.querySelector('#container'))
.render(
    <div>
        {page}
    </div>
)