class Api {
    constructor (options) {
        this.url = options.baseUrl;
    }


getAllItems(item) {
    return fetch(this.url+"/"+item, {
        headers:{
          //  authorization: "Bearer " + token,
        }
    })
    .then(res=> {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Error: ${res.status}`)
    })
}

getOneItem(item, id){
    return fetch(this.url+"/"+item+"/"+id, {
        headers:{
          //  authorization: "Bearer " + token,
        }
    })
    .then(res=> {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Error: ${res.status}`)
    })
    }

updateUserInfo(newInfo, token){
    return fetch(this.url+"/users/me", {
        method: "PATCH",
        headers:{
            authorization: "Bearer " + token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: newInfo.name,
            about: newInfo.about
        })
    })
    .then(res=> {
            if (res.ok) {
               
                return res.json()
            }
            return Promise.reject(`Error: ${res.status}`)
        })
    }

addNewItem(element, item) {
        return fetch(this.url+"/"+ element, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
        .then(res=> {
                if (res.ok) {
                   
                    return res.json()
                }
                return Promise.reject(`Error: ${res.status}`)
            })
    
}    

deleteItem(item, id)    {
    return fetch(this.url+"/"+ item + "/" + id, {
    method: "DELETE",
    headers:{
        "Content-Type": "application/json"
    },
})
.then(res=> {
        if (res.ok) {
           
            return res.json()
        }
        return Promise.reject(`Error: ${res.status}`)
    })

}    

addLike(id, isLiked, token) {
    const method = isLiked ? "DELETE" : "PUT";
    return fetch(this.url+"/cards/"+id+"/likes", {
        method: method,
        headers:{
            authorization: "Bearer " + token
        }
    })
    .then(res=> {
        if (res.ok) {
           
            return res.json()
        }
        return Promise.reject(`Error: ${res.status}`)
    })
    }

updateAvatar(avatarUrl, token) {
    return fetch(this.url+"/users/me/avatar", {
        method: "PATCH",
        headers:{
            authorization: "Bearer " + token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            avatar:avatarUrl
        })
        
    })
    .then(res=> {
            if (res.ok) {
               
                return res.json()
            }
            return Promise.reject(`Error: ${res.status}`)
        })
}     

}    

export const api = new Api({
    baseUrl: "http://localhost:8080/api",
    }
  );



