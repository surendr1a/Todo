
function addtask(){
    const takevalue = document.getElementById('todo');
    const taketask = takevalue.value.trim();

    if(taketask !== ''){
        const newdiv = document.createElement('div');
        newdiv.textContent = taketask;
        
        const deletetask = document.createElement('button');
        deletetask.textContent = 'Delete';

        deletetask.onclick = function(){
            newdiv.remove();
        };
        newdiv.appendChild(deletetask);

        const continer = document.getElementById('whaleContainer');
        continer.appendChild(newdiv);
        takevalue.value = '';

    }

}