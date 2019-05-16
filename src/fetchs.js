export const fetchPoster = (state) => {
    fetch('http://localhost:3001/api/v1/reservations', {
        method: 'POST',
        body: JSON.stringify(state),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
}