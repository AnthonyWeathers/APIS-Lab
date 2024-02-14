const buttonClicked = evt => {
    // console.log('button clicked')
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    .then((res) => {
        let residents = res.data.results[0].residents

        residents.forEach(person => {
            axios.get(person)
            .then((res) => {
                residentName = res.data.name

                let newHeader = document.createElement('h2')
                newHeader.textContent = residentName

                document.body.appendChild(newHeader)
            })
        })
    }
    )
}

const button = document.querySelector('#residents')

button.addEventListener('click', buttonClicked)