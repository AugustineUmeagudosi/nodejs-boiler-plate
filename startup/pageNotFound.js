module.exports = function (app) {
    app.get('*', (req, res) => res.status(404).json({ message: 'Sorry, the resource you are looking for was not found.' }));
    app.post('*', (req, res) => res.status(404).json({ message: 'Sorry, the resource you are looking for was not found.' }));
    app.put('*', (req, res) => res.status(404).json({ message: 'Sorry, the resource you are looking for was not found.' }));
    app.delete('*', (req, res) => res.status(404).json({ message: 'Sorry, the resource you are looking for was not found.' }));
};