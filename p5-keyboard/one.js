const insert = document.getElementById('insert')

window.addEventListener('keydown',function(e){
    insert.innerHTML = `
    <table>
    <thead>
      <tr>
        <th>Key</th>
        <th>keyCode</th>
        <th>Code</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${e.key === ' ' ? "space" : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
    </tbody>
    </table>  
    `
})