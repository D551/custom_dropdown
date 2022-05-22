function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export const formatManagersData = (response) => {
    const formattedResponse = [];
    response.data.forEach((data) => {
        const { firstName, lastName, name } = data.attributes
        formattedResponse.push({
            id: data.id,
            firstName,
            lastName,
            name,
            accountId:data.relationships.account.data.id,
            profileColor:getRandomColor()
        })
    })
    formattedResponse.forEach((data) => {
        const filteredObject = response.included.filter((x) => {
            return data.accountId === x.id
        })
        data.email = filteredObject[0].attributes.email;
    })
    return formattedResponse;
}