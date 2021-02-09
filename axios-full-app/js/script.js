
const charactersApi = new CharactersAPi()


refreshCharacters()


function refreshCharacters() {

    charactersApi
        .getAllCharacters()
        .then(response => {
            let characters = response.data.reverse(), list = ''
            characters.forEach(elm => list += `<li><p><strong>${elm.name}</strong> (Id ${elm.id})</p><p>Trabajo: ${elm.occupation}</p><p>Arma: ${elm.weapon}</p></li>`)
            document.querySelector('#charactersList').innerHTML = list
        })
        .catch(err => console.log('ERROR', err))
}



document.querySelector('#newCharacterForm').onsubmit = e => {

    e.preventDefault()

    const inputs = document.querySelectorAll('#newCharacterForm input')

    const character = {
        name: inputs[0].value,
        occupation: inputs[1].value,
        weapon: inputs[2].value
    }

    charactersApi
        .createCharacter(character)
        .then(() => {
            refreshCharacters()
            // this.reset()
            // e.target.reset()
            document.querySelector('#newCharacterForm').reset()
        })
        .catch(err => console.log(err))
}





document.querySelector('#getCharacterIdForm').onsubmit = e => {

    e.preventDefault()

    const characterId = document.querySelector('#getCharacterIdForm input').value

    charactersApi
        .getOneCharacter(characterId)
        .then(response => fillEditForm(response.data))
        .catch(err => console.log(err))
}




function fillEditForm(data) {

    const inputs = document.querySelectorAll('#editCharacterForm input')

    inputs[0].value = data.name
    inputs[1].value = data.occupation
    inputs[2].value = data.weapon
}


document.querySelector('#editCharacterForm').onsubmit = e => {

    e.preventDefault()

    const inputs = document.querySelectorAll('#editCharacterForm input')
    const id = document.querySelector('#getCharacterIdForm input').value

    const character = {
        name: inputs[0].value,
        occupation: inputs[1].value,
        weapon: inputs[2].value
    }

    charactersApi
        .editCharacter(id, character)
        .then(() => {
            refreshCharacters()
            document.querySelectorAll('#getCharacterIdForm, #editCharacterForm').forEach(elm => elm.reset())
        })
        .catch(err => console.log(err))
}
