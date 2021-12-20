let btnMenu = document.getElementById('btnMenu').addEventListener('click',abrirMenu)
let menu = document.getElementsByTagName('nav')[0]

function abrirMenu(){
    if(menu.classList.contains('esconderMenu')){
        menu.classList.remove('esconderMenu');
        menu.classList.add('exibirMenu');
    }else{
        menu.classList.remove('exibirMenu');
        menu.classList.add('esconderMenu');
    }
}

let btnPreview = document.getElementsByClassName('controlePreview')[0].addEventListener('click',anterior)
let btnNext = document.getElementsByClassName('controleNext')[0].addEventListener('click',proximo)
let textoMain = document.getElementsByClassName('texto1')[0]


function anterior(){
    if(textoMain.classList.contains('texto1')){
        textoMain.innerText=" 2 -Aliquam erat volutpat maecenas ornare mi non ipsum molestie eleifend. Etiam ullamcorper condimentum velit, nec bibendum lorem sagittis a. Maecenas nec est eget libero lobortis maximus. Nam sit amet semper felis. Sed et maximus mi. Proin diam quam, auctor vel luctus non"
        textoMain.classList.add('texto2')
        textoMain.classList.remove('texto1')
       
} else if (textoMain.classList.contains('texto2')){
    textoMain.classList.add('texto3')
    textoMain.classList.remove('texto2')
    textoMain.innerText=" 3 - Duis cursus tortor dignissim efficitur efficitur. Suspendisse vitae augue nibh. Nam non mattis justo. Etiam mollis enim vitae volutpat auctor. Sed cursus, lacus pulvinar consequat tempus."
}else{
    textoMain.classList.add('texto1')
    textoMain.classList.remove('texto3')
    textoMain.innerText="1 Lorem ipsum dolor sit amet. Maecenas a lacus metus. Viv Duis enim arcu, tristique eget viverra quis, placeratvitae enim. Mauris placerat, quam ut vestibulum suscipit, lorem nisl tempus lectus, id condimentum odio elit et tortor. Sed sagittis, tortor et volutpat tincidunt, odio tellus condimentum eros, quis condimentum sem orci ac dolor. Nulla eu orci tincidunt, congue eros sit amet."

}
    
    
}

function proximo(){
    if(textoMain.classList.contains('texto1')){
        textoMain.innerText="2 -Aliquam erat volutpat maecenas ornare mi non ipsum molestie eleifend. Etiam ullamcorper condimentum velit, nec bibendum lorem sagittis a. Maecenas nec est eget libero lobortis maximus. Nam sit amet semper felis. Sed et maximus mi. Proin diam quam, auctor vel luctus non"
        textoMain.classList.add('texto2')
        textoMain.classList.remove('texto1')
        
    } else if (textoMain.classList.contains('texto2')){
    textoMain.classList.add('texto3')
    textoMain.classList.remove('texto2')
    textoMain.innerText=" 3- Duis cursus tortor dignissim efficitur efficitur. Suspendisse vitae augue nibh. Nam non mattis justo. Etiam mollis enim vitae volutpat auctor. Sed cursus, lacus pulvinar consequat tempus."
    }else{
        textoMain.classList.add('texto1')
        textoMain.classList.remove('texto3')
        textoMain.innerText="1 Lorem ipsum dolor sit amet. Maecenas a lacus metus. Viv Duis enim arcu, tristique eget viverra quis, placeratvitae enim. Mauris placerat, quam ut vestibulum suscipit, lorem nisl tempus lectus, id condimentum odio elit et tortor. Sed sagittis, tortor et volutpat tincidunt, odio tellus condimentum eros, quis condimentum sem orci ac dolor. Nulla eu orci tincidunt, congue eros sit amet."
    }
}

let btnPreview2 = document.getElementsByClassName('controlePreview')[1].addEventListener('click',anteriorArticle)
let btnNext2 = document.getElementsByClassName('controleNext')[1].addEventListener('click',proximoArticle)
let textoMain2 = document.getElementsByClassName('textoArticle1')[0]
let subTitulo = document.getElementById('subtitulo')

function anteriorArticle(){
    if(textoMain2.classList.contains('textoArticle1')){
        textoMain2.classList.remove('textoArticle1')
        textoMain2.classList.add('textoArticle3')
        textoMain2.innerText="Nulla malesuada at massa vel convallis. Pellentesque eget pretium leo. Aliquam mollis congue erat, ut tincidunt justo varius vitae. Nullam nec lacinia ipsum"
        subTitulo.innerHTML="Montanhas Estaladas"
       
} else if (textoMain2.classList.contains('textoArticle3')){
    textoMain2.classList.add('textoArticle2')
    textoMain2.classList.remove('textoArticle3')
    textoMain2.innerText="Aenean lobortis lorem id tellus egestas vestibulum eget nec enim. Nullam molestie lectus et odio vehicula congue. Praesent quis ipsum lobortis enim lacinia sagittis a vel nisi."
    subTitulo.innerHTML="Montanhas Osacas"
}else{
    textoMain2.classList.add('textoArticle1')
    textoMain2.classList.remove('textoArticle2')
    textoMain2.innerText="Lorem ipsum dolor sit amet. Maecenas a lacus metus. Viv Duis enim arcu, tristique eget viverra quis, placerat vitae enim. Mauris placerat, quam ut vestibulum suscipit, lorem nisl tempus lectus, id condimentum odio elit et tortor. Sed sagittis, tortor et volutpat tincidunt, odio  Maecenas a lacus metus. Viv Duis enim arcu, tristique eget viverra quis, placerat vitae enim. Mauris placerat, quam ut vestibulum suscipit, lorem nisl tempus lectus, id condimentum odio elit et tortor. Sed sagittis, tortor et volutpat tincidunt, tellus condimentum eros, quis condimentum sem orci ac dolor. Nulla eu orci tincidunt, congue quam ut vestibulum suscipit, lorem nisl tempus lectus, id condimentum eros sit amet."
    subTitulo.innerHTML="Montanhas Tuhmiras"

}
    
    
}

function proximoArticle(){
    if(textoMain2.classList.contains('textoArticle1')){
        textoMain2.classList.remove('textoArticle1')
        textoMain2.classList.add('textoArticle2')
        textoMain2.innerText="Aenean lobortis lorem id tellus egestas vestibulum eget nec enim. Nullam molestie lectus et odio vehicula congue. Praesent quis ipsum lobortis enim lacinia sagittis a vel nisi."
        subTitulo.innerHTML="Montanhas Osacas"

        
    } else if (textoMain2.classList.contains('textoArticle2')){
    textoMain2.classList.add('textoArticle3')
    textoMain2.classList.remove('textoArticle2')
    textoMain2.innerText="Nulla malesuada at massa vel convallis. Pellentesque eget pretium leo. Aliquam mollis congue erat, ut tincidunt justo varius vitae. Nullam nec lacinia ipsum!"
    subTitulo.innerHTML="Montanhas Estaladas"
    }else{
        textoMain2.classList.add('textoArticle1')
        textoMain2.classList.remove('textoArticle3')
        textoMain2.innerText="Lorem ipsum dolor sit amet. Maecenas a lacus metus. Viv Duis enim arcu, tristique eget viverra quis, placerat vitae enim. Mauris placerat, quam ut vestibulum suscipit, lorem nisl tempus lectus, id condimentum odio elit et tortor. Sed sagittis, tortor et volutpat tincidunt, odio  Maecenas a lacus metus. Viv Duis enim arcu, tristique eget viverra quis, placerat vitae enim. Mauris placerat, quam ut vestibulum suscipit, lorem nisl tempus lectus, id condimentum odio elit et tortor. Sed sagittis, tortor et volutpat tincidunt, tellus condimentum eros, quis condimentum sem orci ac dolor. Nulla eu orci tincidunt, congue quam ut vestibulum suscipit, lorem nisl tempus lectus, id condimentum eros sit amet."
        subTitulo.innerHTML="Montanhas Tuhmiras"
    }
}