const table = document.querySelector(`table`);

const writer = document.getElementById(`writer`);
const content = document.querySelector(`#content`);


function writeNote() {

    if (writer.value == `` || content.value == ``) {
        alert(`빈 칸이 있습니다.`);
        return;
    }


    let date = new Date();
    let ymd = `${date.getFullYear()} - ${date.getMonth()} - ${date.getDate()}`;
    let hr = `${date.getHours()} : ${date.getMinutes()}`;


    const tr = document.createElement(`tr`);
        
    const wirterTd = document.createElement(`td`);
    wirterTd.textContent = writer.value;
    const contentTd = document.createElement(`td`);
    contentTd.textContent = content.value;
    const dateTd = document.createElement(`td`);
    dateTd.textContent = `${ymd}  ${hr}`

    tr.appendChild(wirterTd);
    tr.appendChild(contentTd);
    tr.appendChild(dateTd);

    table.appendChild(tr);   


}