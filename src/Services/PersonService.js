export default class PersonService{    
    static getPersonListData = () => {
         return fetch("/api/person")
        .then(response => response.json())
    } 

    static getPersonById = (id) => {
         return fetch("/api/person" + "/" + id)
        .then(response =>  {
            if (response.ok) {
                return response.json();
            }
            else {
                return response.text()
            }
        })
        
    }

    static delPersonById = (id) => {
         return fetch("/api/person" + "/" + id, {
            method: 'DELETE',
         })
    }

    static addNewPerson = (obj) => {
        return fetch("/api/person", {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Accept': 'application/json',
                "Content-Type":"application/json"
            }
        })
    }

    static editPerson = (id , obj) => {
        return fetch("/api/person" + "/" + id, {
            method: 'PUT',
            body: JSON.stringify(obj),
            headers: {
                'Accept': 'application/json',
                "Content-Type":"application/json"
            }
        })
    }
}

