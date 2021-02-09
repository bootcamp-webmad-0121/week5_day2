class CharactersAPi {

    constructor() {
        this.app = axios.create({
            baseURL: 'https://ih-crud-api.herokuapp.com'
        })
    }

    getAllCharacters = () => this.app.get('/characters')
    getOneCharacter = id => this.app.get(`/characters/${id}`)
    createCharacter = character => this.app.post('/characters', character)
    editCharacter = (id, character) => this.app.put(`/characters/${id}`, character)
}