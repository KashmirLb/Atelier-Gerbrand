export const generarId = () =>{
    const random = Math.random().toString(36).substring(2)
    const randomDate= Date.now().toString()
    return random+randomDate
}

export const artistName = artist =>{
    if(artist=='gerbrand') {
        return "Gerbrand Lub"
    }
    else if(artist==='eline') {
        return"Eline de Zoete"
    }
    else if(artist==='both'){
        return "Eline & Gerbrand"
    }
}

export const addDates = wrongDate =>{

        const year = wrongDate.substring(0 ,4)
        const month = wrongDate.substring(5, 7)
        const day = wrongDate.substring(8, 10)

        let newMonth = {
            "01": "January",
            "02": "February",
            "03": "March",
            "04": "April",
            "05": "May",
            "06": "June",
            "07": "July",
            "08": "August",
            "09": "September",
            "10": "October",
            "11": "November",
            "12": "December"
        }

        return `${day} ${newMonth[month]} ${year}` 
}

export const formatLink = link =>{
    if(link.includes("http")){
        return link
    }
    else return `https://${link}`
}