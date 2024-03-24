// Preview.js
import '../../css/preview.css'

const stairs = {
    notes: [
      { time: 100, column: 1 },
      { time: 200, column: 2 },
      { time: 300, column: 3 },
      { time: 400, column: 4 },
      { time: 500, column: 3 },
      { time: 600, column: 2 },
      // Add more notes as needed
    ]
};

const thrills = {
    notes: [
      { time: 100, column: 1 },
      { time: 100, column: 2 },
      { time: 200, column: 3 },
      { time: 200, column: 4 },
      { time: 300, column: 1 },
      { time: 300, column: 2 },
      { time: 400, column: 3 },
      { time: 400, column: 4 },
      { time: 500, column: 1 },
      { time: 500, column: 2 },
      { time: 600, column: 3 },
      { time: 600, column: 4 },
      // Add more notes as needed
    ]
};

  function Preview() {
    const { notes } = thrills;
    const columnCount = 4; // Assuming 4 columns for osu!mania
  
    // Calculate the maximum time to determine the length of the preview
    const maxTime = Math.max(...notes.map(note => note.time));
  
    // Create an array to represent each column
    const columns = Array.from({ length: columnCount }, () => []);
  
    // Distribute notes into columns
    notes.forEach(note => {
      const columnIndex = note.column - 1; // Adjust column index to start from 0
      columns[columnIndex].push(note);
    });
  
    // Function to render notes falling down in columns
    const renderColumns = () => {
        // Calculate the number of repetitions needed based on the maximum time
        const repetitions = Math.ceil(maxTime / (1000 * columnCount));
      
        // Repeat the columns
        const repeatedColumns = Array(repetitions).fill(columns).flat();
      
        // Render the notes inside each column
        return repeatedColumns.map((column, columnIndex) => (
          <div key={columnIndex} className="Column">
            {column.map((note, noteIndex) => {
                const animationDelay = note.time / 1000;
              return (
                <div key={noteIndex} className="Note" style={{ animationDelay: `${animationDelay}s` }}>
                  <div className="NoteBox"><img src="/images/mania-note2.png" alt="note"></img></div>
                </div>
              );
            })}
          </div>
        )).slice(0, columnCount);;
      };
  
      const renderLighting = () => {
        // Calculate the number of repetitions needed based on the maximum time
        const repetitions = Math.ceil(maxTime / (1000 * columnCount));
      
        // Repeat the columns
        const repeatedColumns = Array(repetitions).fill(columns).flat();
      
        // Render the notes inside each column
        return repeatedColumns.map((column, columnIndex) => (
          <div key={columnIndex} className="ColumnLighting">
            {column.map((note, noteIndex) => {
                const animationDelay = note.time / 1000;
              return (
                <div key={noteIndex} className="lighting" style={{ animationDelay: `${animationDelay+0.38}s` }}>
                  <div className="lighting-box"><img src="/images/lightingN.png" alt="lighting"></img></div>
                </div>
              );
            })}
          </div>
        )).slice(0, columnCount);;
      };

    return (
      <div className="Preview border-2">
        <div className="Notes">
          <div className="ColumnsWrapper">
            {renderColumns()}
          </div>
        </div>
        <div className='flex'>
            <div className="hitcircle">
                <img src="/images/hitcircle.png" alt="hit"></img>
            </div>
            <div className="hitcircle">
                <img src="/images/hitcircle.png" alt="hit"></img>
            </div>
            <div className="hitcircle">
                <img src="/images/hitcircle.png" alt="hit"></img>
            </div>
            <div className="hitcircle">
                <img src="/images/hitcircle.png" alt="hit"></img>
            </div>
          </div>
          <div className="lighting-container">
            {renderLighting()}
          </div>
      </div>
    );
  }
  
  export default Preview;