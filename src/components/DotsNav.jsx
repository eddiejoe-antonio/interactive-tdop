import './dots.css'

function DotsNav() {
    const numOfSections = 6;

    const renderSections = num => {
        let arr = new Array(num)

        for (let i =1; i < num; i++){
            arr[i] = `section-${i}`;
        }
        return arr;
    };
    return ( 
        <main>
            {renderSections(numOfSections).map(ele => (
                <div id={ele}>
                    <h1>{ele}</h1>
                </div>
            ))}
            <div className="dot-nav">
                <ul>
                    {renderSections(numOfSections).map(ele =>
                    <li>
                        <h1><a href={`#${ele}`}>{ele}</a></h1>
                    </li>    
                    )}
                </ul>
            </div>
        </main>
     );
}

export default DotsNav;