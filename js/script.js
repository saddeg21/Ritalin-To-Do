
    const input = document.querySelector("#task-name");
    const submit = document.querySelector("#task-button");
    const elemanlar = document.querySelector(".list__elements");
    const elemanlar2 = document.querySelector(".list__elements2");

submit.addEventListener('click', () => {
    if(!(input.value === "")) {
        const metin = input.value;
        const item = document.createElement("div");
        item.classList.add('list__item');
        item.classList.add('got-fade');
        
        const p = document.createElement('input');
        p.type = 'text';
        p.classList.add('text');
        p.value = metin;
        p.setAttribute('readonly','readonly');

        item.appendChild(p);
        
        const edit = document.createElement('button');
        const remove = document.createElement('button');
        const tamamla = document.createElement('button');
        edit.innerText = "EDIT"; remove.innerText = "SİL";tamamla.innerText="TAMAMLA";edit.classList.add("edit"); remove.classList.add('remove');tamamla.classList.add("tamamla");
        item.appendChild(edit); item.appendChild(remove);item.appendChild(tamamla);

        item.classList.add("fade-in")
        elemanlar.appendChild(item);

        input.value = "";

        edit.addEventListener('click',(e) => {
            if (edit.innerText === 'EDIT') {
                edit.innerText = 'KAYDET';
                p.removeAttribute('readonly');
                p.classList.add('editable');
                p.focus();
                
            }else {
                edit.innerText = "EDIT";
                p.setAttribute("readonly","readonly");
                p.classList.remove('editable');
            }
        })

        remove.addEventListener('click',(e) => {
           elemanlar.removeChild(item);
        })

        tamamla.addEventListener('click',(e) => {
            elemanlar.removeChild(item);
            item.removeChild(edit);item.removeChild(remove);item.removeChild(tamamla);
            elemanlar2.appendChild(item);
        })
    }else {
        alert("Değer giriniz.");
    }
});



