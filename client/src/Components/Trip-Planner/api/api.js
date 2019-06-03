function get_port() {
    return (!process.env.dev) ?
        window.location.port :
        process.env.dev
}

export async function request(body, type, port=get_port(), host=window.location.hostname){
    return fetch('http://' + host + ":" + port + '/' + type, {
        method:"POST",
        body: JSON.stringify(body)
    }).then(response => {return response.json()}).catch(err => {console.error(err)});
}

export async function get_config(port=get_port(), host=window.location.hostname) {
    return fetch('http://' + host + ":" + port + '/config', {
        method:"GET"
    }).then(response => {return response.json()}).catch(err => {console.error(err)});
}