const note_container = document.getElementById('ncontainer');
const button_container = document.getElementById('bcontainer');
const note_stop = document.getElementById('nstop');
const create_button = document.getElementById('cbutton');
const delete_button = document.getElementById('dbutton');
const save_button = document.getElementById('ebutton');
const archive_button = document.getElementById('jbutton');
const clipboard_button = document.getElementById('gbutton');
const clear_button = document.getElementById('hbutton');
const config = {      
    color_palette: [        // corresponds to r, g, b values; implement colors as rgb(i[0], i[1], i[2])
    [25,35,40],
    [15,76,117],
    //[50,130,184]
    ],
    limit: 10,
    timeout: 300,
    allow_duplicates: false
}

let selected = []  // to be implemented

create_button.addEventListener('click', addBlankNote, false);
delete_button.addEventListener('click', deleteLastNote, false);
save_button.addEventListener('click', saveNotes, false);
archive_button.addEventListener('click', composeCollectionMenu, false);
clipboard_button.addEventListener('click', noteFromClipboard, false);
clear_button.addEventListener('click', clearAll, false);
note_container.addEventListener('dragstart', initiateDrag, false);
note_container.addEventListener('dragend', endDrag, false);
note_container.addEventListener('dragover', e => {
    e.preventDefault()
    const aft = getAfterElement(note_container, e.clientY)
    const drag = document.querySelector('.dragging')    
    if (aft == null) {
        note_container.insertBefore(drag, note_stop)
        saveTemp()
    }
    else {
        note_container.insertBefore(drag, aft)
        saveTemp()
    }
});


window.onload = () => {
    if (chrome != undefined) {
        chrome.storage.local.get("temp")
        .then(results => {
        if (results.temp == undefined) {
            chrome.storage.local.get("Notes")
            .then( results => {
                if (results.Notes == undefined) {
                    chrome.storage.local.set({Notes: ""})
                }
            })
        }
        else {
            loadTemp()
        }
    })
    }
};


function saveTemp(e=null) {
    let tmp = []
    let arr = Array.from(document.getElementsByClassName('note-text'))
    for (i=0;i<arr.length;i++) {
        tmp.push(arr[i].value)
    }
    chrome.storage.local.set({temp: tmp})
}


function loadTemp() {
    chrome.storage.local.get('temp')
    .then(results => { 
        for (i=0;i<results.temp.length;i++) {
        composeNote(text=results.temp[i])
    }})
    .catch(e=>console.log(e))
};


// credit to WebDevSimplified on the drag and drop functions
function getAfterElement(container, ypos) {
    const notes = [...container.querySelectorAll('.note:not(.dragging)')]
    return notes.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        offset = ypos - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset) {
            return {offset: offset, element: child}
        }
        else {
            return closest
        }
    }, {offset: Number.NEGATIVE_INFINITY}).element
};


function initiateDrag(e) {
    toggleStackSpread()
    let tar = e.target
    tar.classList.add('dragging')
};


function endDrag(e) {
    toggleStackSpread()
    let tar = document.querySelector('.dragging')
    tar.classList.remove('dragging')
};


function toggleStackSpread() {
    let arr = Array.from(document.getElementsByClassName('note'))
    for (let i in arr) {
        arr[i].classList.toggle('stacked')
        arr[i].classList.toggle('spread')
    }
};


function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
}


function composeCollection(key, options=config) {
    for (let value of key) {
        composeNote(text=value, options=options)
    }
}


function composeCollectionMenu(collection=null, options=config) {
    let container = document.createElement('div')
    let repr_container = document.createElement('div')
    let button_container = document.createElement('section')
    let exit_button = document.createElement('button')
    let delete_button = document.createElement('button')
    let exit_button_icon = document.createElement('i')
    let delete_button_icon = document.createElement('i')
    let text_input = document.createElement('input')

    if (!document.getElementById('collection-menu')) {

        container.id = 'collection-menu'
        container.tabIndex = -1
        container.classList.add('collection-menu')
        container.classList.add('hidden')

        repr_container.id = 'repr-container'
        repr_container.style.display = 'inline-flexbox'
        repr_container.style.width = '95%'
        repr_container.style.flexFlow = 'row wrap'
        /* repr_container.style.gridAutoColumns = 'auto auto'
        repr_container.style.gridAutoFlow = 'row dense' */
        repr_container.style.marginLeft = '.5em'
        repr_container.style.marginRight = '.5em'
        repr_container.style.paddingLeft = '0.1em'
        repr_container.style.paddingRight = '0.1em'
        repr_container.style.paddingBottom = '1em'
        repr_container.style.justifyContent = 'space-between'


        chrome.storage.local.get('Archive')
        .then(results => {
            if (Object.keys(results.Archive) != undefined && Object.keys(results.Archive).length > 0) {
                for (let [key, values] of Object.entries(results.Archive)) {
                    let button = document.createElement('button')
                    button.innerText = key
                    button.classList.add('collection-menu-button')
                    button.setAttribute('draggable', true)
                    button.addEventListener('click', function() {
                        deleteNotes()
                        composeCollection(values, options=options)
                        container.remove()
                    }, false);
                    repr_container.appendChild(button)
                }
            }
        })

        text_input.classList.add('collection-text-input')
        text_input.addEventListener('keyup', function(e) {
            e.preventDefault()
            let input = document.getElementsByClassName('collection-text-input')[0].value.trim()
            let list = Array.from(document.getElementsByClassName('collection-menu-button'))
            let xx

            for (i=0;i<list.length;i++) {
                let tar = list[i]
                let text = tar.innerText || tar.innerHTML
                
                tar.SetHeightWidth = function(target) {
                    target.style.width = 0
                    target.style.height = 0
                    tar.style.position = 'absolute'
                }
                
                function getRandomArbitrary(min, max) {
                    return Math.random() * (max - min) + min;
                }

                if (text.indexOf(input) < 0) {
                    tar.style.color = "rgba(0,0,0, 0.25)"
                    tar.style.fontSize = '4px'
                    if (xx==0) {
                        xx=1
                        tar.style.transform = `translate(-100px, ${getRandomArbitrary(-100,100)}px)`
                    }
                    else {
                        xx=0
                        tar.style.transform = `translate(100px, ${getRandomArbitrary(-100,100)}px)`
                    }
                    nn = setTimeout(() => {tar.SetHeightWidth(tar)}, 1);
                    tar.style.opacity = 0 
                    tar.tabIndex = -1
                    tar.style.pointerEvents = "none"
                }
                else {
                    tar.style.fontSize = ''
                    tar.style.color = ''
                    tar.style.backgroundColor = ''
                    tar.style.border = ''
                    tar.style.width = ''
                    tar.style.height = ''
                    tar.style.position = ''
                    tar.style.transform = ''
                    tar.style.opacity = ''
                    tar.style.margin = ''
                    tar.style.padding = ''
                    tar.tabIndex=''
                    tar.style.pointerEvents = "all"
                }
            }
        }, false);

        exit_button_icon.classList.add('fa-solid')
        exit_button_icon.classList.add('fa-x')
        exit_button.classList.add('collection-menu-exit-button')
        exit_button.classList.add('create-button')
        exit_button.appendChild(exit_button_icon)
        exit_button.addEventListener('click', function () {
            container.remove()
        }, false)

        delete_button_icon.classList.add('fa-solid')
        delete_button_icon.classList.add('fa-dumpster')
        delete_button.classList.add('create-button')
        delete_button.classList.add('collection-menu-delete-button')
        delete_button.appendChild(delete_button_icon)
        delete_button.addEventListener('click', deleteArchive, false)

        button_container.classList.add('collection-menu-button-container')
        button_container.appendChild(text_input)
        button_container.appendChild(delete_button)
        button_container.appendChild(exit_button)
        
        container.appendChild(button_container)
        container.appendChild(repr_container)
        
        
        note_container.insertBefore(container, note_container.children[1])
        requestAnimationFrame(function(){
            container.classList.remove('hidden')
        })
        return container
    }
    else {
        d = document.getElementById('collection-menu')
        d.remove()
    }
}


function composeNote(text=null, options=config) {
    let note = document.createElement('div')
    let note_text = document.createElement('textarea')
    let note_clipboard_button = document.createElement('button')
    let clipboard_button_icon = document.createElement('i')
    let ncn = document.getElementsByClassName('note').length
    let ncd = options.color_palette.length
    let nnc = ncn % ncd 
    let c = options.color_palette[nnc]
    
    note.classList.add('note')
    note.classList.add('stacked')
    note.classList.add('hidden')
    note.setAttribute('tabIndex', -1)
    note.setAttribute('draggable', true)
    note.setAttribute('z-index', ncn)
    note.addEventListener('blur', saveTemp, true);

    note_text.classList.add('note-text')
    note_text.setAttribute('tabIndex', 1)
    note_text.placeholder = "Enter text"
    note_text.style.backgroundColor = `rgb(${c[0]},${c[1]},${c[2]})`
    
    if (text != null) {
        note_text.value = text
    }

    clipboard_button_icon.classList.add('fa-solid')
    clipboard_button_icon.classList.add('fa-copy')

    note_clipboard_button.classList.add('create-button')
    note_clipboard_button.classList.add('note-clip-button')
    note_clipboard_button.setAttribute('tabIndex', -1)
    note_clipboard_button.addEventListener('click', noteToClipboard, false);
    note_clipboard_button.appendChild(clipboard_button_icon)

    note.appendChild(note_text)
    note.appendChild(note_clipboard_button)
    note_container.insertBefore(note, note_stop)
    requestAnimationFrame(function() {
        note.classList.remove('hidden')
    })
    return note
};


function addBlankNote() {
    let total = document.getElementsByClassName('note').length
    if (total < config.limit) {
        composeNote()
    }
};

/* async function noteFromClipboard(e=null) {
    console.log('made it here')
    if (e) {
        e.preventDefault()
    }
    if (navigator.clipboard) {
        try {
            const res = await navigator.clipboard.readText();
            return console.log(res);
        } catch (e_1) {
            return console.log(e_1);
        }
    }
} */

function getClipboard() {
    var pasteTarget = document.createElement("div");
    pasteTarget.contentEditable = true;
    var actElem = document.activeElement.appendChild(pasteTarget).parentNode;
    pasteTarget.focus();
    document.execCommand("Paste", null, null);
    var paste = pasteTarget.innerText;
    actElem.removeChild(pasteTarget);
    return paste;
};

function pasteFromClipboard() {
    if (navigator.clipboard) {

    }
}

function noteFromClipboard(e=null) {
    console.log('j')
    console.log(window.isSecureContext)
    composeNote(text=getClipboard())
};


function noteToClipboard(e=null) {
    if (e) {
        e.preventDefault()
    }
    let tar = this.parentNode.children[0]
    if (tar) {
        copyToClipboard(tar.value)
    }
}


function copyToClipboard(textToCopy) {
    if (navigator.clipboard) {
        return navigator.clipboard.writeText(textToCopy);
    }
}


function appendToArchive(data) {
    chrome.storage.local.get('Archive')
    .then(results => {
        let hold = results
        let copy = [...data]
        let ll = Array.from(document.getElementsByClassName('note'))
        let accum
        
        if (results.Archive) {
            accum = Object.keys(results.Archive).length
        }
        else {
            accum = 0
        }
        
        
        if (ll.length > 0) {
            Swal.fire({
                title: 'Please name this collection',
                input: 'text',
                inputValue: `Collection ${accum++}`,
                width: '250px',
                /* height: '200px', */
                showCloseButton: true,
                showCancelButton: true,
                inputValidator: (value) => {
                  if (!value) {
                    return 'Please enter a name.'
                  }
                }
                }).then(results => {
                    if (results.isConfirmed) {
                        let name = results.value
                        let final = {}
                        final[name] = copy
                        if (hold.Archive != undefined) {
                            let res = hold.Archive
                            res[name] = copy
                            chrome.storage.local.set({Archive: res})
                            .then(showArchive())
                        }
                        else {
                            chrome.storage.local.set({Archive: final})
                            .then(showArchive())
                    }}
                    else {
                        accum--
                    }
                })
        }
    })
}


function showArchive(key=null) {
    chrome.storage.local.get('Archive')
    .then(results => {
        if (results.Archive) {
            if (key != null) {
                console.log(results.Archive[key])
            }
            else {
                for (let [key, values] of Object.entries(results.Archive)) {
                    console.log(`${key}: ${values}`)
                }
            } 
        }
    })
}


function appendToStorage(data) {
    chrome.storage.local.get('Notes')
    .then(results => {
        if (results.Notes != undefined && results.Notes != '') {
            let arr = Array.from(results.Notes)
            for ( let i in data) {
                arr.push(data[i])
            }
            let s = Array.from(arr)
            /* if (s.length > 0) {
                appendToArchive(s)
            } */
            chrome.storage.local.set({Notes: s})
        } 
        else {
            let s = Array.from(data)
            /* if (s.length > 0) {
                appendToArchive(s)
            } */
            chrome.storage.local.set({Notes: s})
        }
    })
    .catch(e=> console.log(e))
};


function saveNotes() {
    let notes = []
    let arr = Array.from(document.getElementsByClassName('note-text'))
    for (i=0;i<arr.length;i++) {
        notes.push(arr[i].value)
    }
    appendToStorage(new Set(notes))
    appendToArchive(new Set(notes))
};


function loadNotes() {
    chrome.storage.local.get('Notes')
    .then(results => { 
        if (results.Notes.length > 0) {
            deleteNotes()
            for (i=0;i<results.Notes.length;i++) {
                composeNote(text=results.Notes[i])
            }
        }
    })
    .catch(e=> fire({
        top: 0,
        title: null,
        text: `${e}`
    }))
};


function clearAll() {
    chrome.storage.local.remove('Notes')
    chrome.storage.local.remove('temp')
    deleteNotes()
}

function deleteArchive() {
    Swal.fire({
        title: "Are you sure?",
        text: "Deleting the archive is irreversible",
        showCloseButton: true,
        showCancelButton: true
    })
    .then(results => {
        if (results.isConfirmed) {
            chrome.storage.local.remove('Archive')
            let d = document.getElementById('collection-menu')
            d.remove()
        }
    })
}


function deleteNotes() {
    let arr = Array.from(document.getElementsByClassName('note'))
    for (i=0;i<arr.length;i++) {
        arr[i].remove()
    }
    saveTemp()
};
 

function deleteLastNote() {
    let arr = Array.from(document.getElementsByClassName('note'))
    let last = arr[arr.length - 1]
    if (last != undefined) {
        last.remove()
        saveTemp()
    }
};