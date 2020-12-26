const {v4: uuidv4} = require("uuid")

const peopleDB=[{"Role":"Director","Name":"Joe Russo", "id":"1","Description":"Joseph Russo, 49, is an American director and producer best known for directing the four films in the Marvel Cinematic Universe.","C1":"Stephen McFeely", "C2":"Tom Holland","C3":"Anthony Russo","C4":"Justin Russo","C5":"Robert Downey, Jr","C6":"Chris Evans","Profile":"https://www.gstatic.com/tv/thumb/persons/303029/303029_v9_bb.jpg","M1":"https://upload.wikimedia.org/wikipedia/en/b/b7/The_Mummy_Returns_poster.jpg","M2":"https://resizing.flixster.com/Zdh9vCOYKFwrrzMCxRFmJZ1lHJE=/206x305/v2/https://flxt.tmsimg.com/assets/p19239_p_v8_ab.jpg","M3":"https://upload.wikimedia.org/wikipedia/en/b/b6/Jumanji_poster.jpg"},
{"Role":"Director","Name":"Peter Hewitt", "id":"2","Description":"Peter Hewitt, 35, is a British director and producer best known for directing the horror films.","C1":"Micheal Jordon", "C2":"Andrew Garfield","C3":"Anthony Russo","C4":"Justin Russo","C5":"Robert Downey, Jr","C6":"Chris Evans","Profile":"https://www.gstatic.com/tv/thumb/persons/214002/214002_v9_ba.jpg","M1":"https://m.media-amazon.com/images/M/MV5BN2M2ZTg2MDctMmM0Zi00NmZiLTgzMzUtYmYxNjEyYTFhOWMxXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_UY1200_CR135,0,630,1200_AL_.jpg","M2":"https://images-na.ssl-images-amazon.com/images/I/51owUwuNgSL._AC_SY445_.jpg","M3":"https://occ-0-2567-2568.1.nflxso.net/art/fba5b/81e6f6f9416bb5058be40daa53036a91941fba5b.jpg"},
{"Role":"Writer","Name":"Stephen McFeely","id":"3","Description":"Stephen McFeely, 50, is an American screenwriter and producer. He is the third most successful screenwriters of all times in terms of U.S. box office reseipts.","C1":"Brad Pitt", "C2":"Emma Watson","C3":"Anthony Russo","C4":"Justin Russo","C5":"Robert Downey, Jr","C6":"Chris Evans","Profile":"https://photos.geni.com/p13/96/0b/3b/d9/53444847bff51f98/stephen_mcfeely_original.jpg","M1":"https://upload.wikimedia.org/wikipedia/en/b/b7/The_Mummy_Returns_poster.jpg","M2":"https://resizing.flixster.com/Zdh9vCOYKFwrrzMCxRFmJZ1lHJE=/206x305/v2/https://flxt.tmsimg.com/assets/p19239_p_v8_ab.jpg","M3":"https://upload.wikimedia.org/wikipedia/en/b/b6/Jumanji_poster.jpg"},
{"Role":"Writer","Name":"Greg Taylor", "id":"4","Description":"Greg Taylor, 55, is an American screenwriter and producer. He is a screenwriters  in terms of U.S. box office reseipts.","C1":"Emma Stone", "C2":"Daniel Radcliff","C3":"Tom Felton","C4":"Justin Russo","C5":"Robert Downey, Jr","C6":"Chris Evans","Profile":"https://images.macmillan.com/folio-assets/author-photos-186/6517891.jpg","M1":"https://m.media-amazon.com/images/M/MV5BZTk2ZmUwYmEtNTcwZS00YmMyLWFkYjMtNTRmZDA3YWExMjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY216_CR7,0,148,216_AL_.jpg","M2":"https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Omen_ver4.jpg/220px-Omen_ver4.jpg","M3":"https://m.media-amazon.com/images/M/MV5BY2UwOTQ0Y2QtZmM4NC00ZTRiLWIyZDUtMmIzYzg4MjQyNTUyXkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_UY1200_CR90,0,630,1200_AL_."},
{"Role":"Actor", "Name":"Tom Holland","id":"5","Description":"Thomas Stanley Holland is a 24 year old English actor who began his career on stage in London's West End from 2008 to 2010.","C1":"Jon Watts", "C2":"Joe Russo","C3":"Anthony Russo","C4":"Justin Russo","C5":"Robert Downey, Jr","C6":"Chris Evans","Profile":"https://www.refinery29.com/images/8981298.jpg","M1":"https://m.media-amazon.com/images/M/MV5BOGQ5YTM3YzctOTVmMC00OGIyLWFkZTYtMWYwOWZhMjA2MWMwXkEyXkFqcGdeQXVyMjUyMTE5MA@@._V1_.jpg","M2":"https://cdn.collider.com/wp-content/uploads/2019/03/spider-man-far-from-home-poster-london.jpg","M3":"https://i.insider.com/5ca3d2b892c8866e8b4618d9?width=750&format=jpeg&auto=webp"},
{"Role":"Actor", "Name":"Jonathan Hyde","id":"6","Description":"Jonathan Hyde is a 40 year old American actor who began his career on stage in California from 1990 to 2000.","C1":"Micheal Jordon", "C2":"Selena Gomez","C3":"Anthony Russo","C4":"Justin Bieber","C5":"Robert Downey, Jr","C6":"Chris Evans","Profile":"https://www.gstatic.com/tv/thumb/persons/74681/74681_v9_bb.jpg","M1":"https://upload.wikimedia.org/wikipedia/en/b/b7/The_Mummy_Returns_poster.jpg","M2":"https://resizing.flixster.com/Zdh9vCOYKFwrrzMCxRFmJZ1lHJE=/206x305/v2/https://flxt.tmsimg.com/assets/p19239_p_v8_ab.jpg","M3":"https://upload.wikimedia.org/wikipedia/en/b/b6/Jumanji_poster.jpg"}
]

const createPeople = (personObj) => {

    if (personObj === null) {
        return null;
    }

    let newPerson = {
        
        Role:personObj.role,
        Name: personObj.name,
        Image: personObj.image,
        pastWorks: personObj.pastWorks
    }

    return newPerson; 

};

const people = (searchParameters) => {
   
    let userParams = {};

    //If no parameters were supplied --> Return all the users
    if (searchParameters.name) {
        userParams.Name = searchParameters.name;
    }

    return userParams;

};

const peopleWithId = (peopleId) => {
    //console.log("inside get people id");
    let p = null;
    peopleDB.forEach(person => {
        if (person.hasOwnProperty("id")) {
            if(person.id === peopleId) {
                //console.log("found people id");
                p=person;
                return;
            }
        }
    });
  
    return p;
    

}

const followPeople = (users, peopleToFollow) => {

    if (users === null || peopleToFollow === null) {
        return false;
    }
    //User is now following the person

    users.following.push(peopleToFollow);
    peopleToFollow.followers.push(peopleToFollow);
    
    return true;

};

module.exports = {
    createPeople, people, peopleWithId, followPeople
}