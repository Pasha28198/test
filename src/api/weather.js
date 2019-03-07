export default function (name = 'Kiev') {
    return fetch(`https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json`, {
        method: 'GET'
    }).then(res => res.json())
}