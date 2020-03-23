const clientId = 'XMN2F3BTJSPQMYSFK044F4PU0XHOODODBDR2GHQ4R1NFEL53';
const clientSecret = 'AJJB00LQAXAX4EBLDZR3B4FFNUYOHJVM21ZO0K3JWOI5Y3FA';
const version = '20180323';

export const getPlaces = () => {
    return fetch(`https://api.foursquare.com/v2/venues/explore?section=coffee&limit=30&near=lecco&client_id=${clientId}&client_secret=${clientSecret}&v=${version}`)
	.then(data => data.json())
	.then(data => data.response.groups[0].items)
}