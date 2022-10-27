
const getUser = (req, res) => {
    res.send('its a get')
};

const postUser = (req, res) => {
    res.send('its a post')
}

const putUser = (req, res) => {
    const { id } = req.params;
    res.send(`its a put, you selected id: ${id}`)
}

const deleteUser = (req, res) => {
    const { id } = req.params;
    res.send(`its a delete, you selected id: ${id}`)
}

module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser,
}