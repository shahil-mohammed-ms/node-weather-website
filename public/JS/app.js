const weatherForm= document.querySelector('form')
const search=document.querySelector('input')
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    let location=search.value
    const a=JSON.stringify(location)
    console.log(a)

    messageOne.textContent='loading...'
    messageTwo.textContent=''

fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+a+'?unitGroup=metric&key=UG7RSD7JJFJNGJS233Z2ZX55W&contentType=json').then((response)=>{
  
response.json().then((forecastData)=>{
    messageOne.textContent=forecastData.address
    messageTwo.textContent=forecastData.days[0].temp
    
       console.log(forecastData.days[0])
            console.log(forecastData.address)
            console.log(forecastData.days[0].temp)
            console.log(forecastData.timezone) 
    })
    }).catch((reject)=>{
        console.log(reject)
        messageOne.textContent='check network connecion '
        console.log('check network connecion ')
    })
})
