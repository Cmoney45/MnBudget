const axios = require("axios");

module.exports = {
    getInstitutions: function (req, res) {
        axios
            .get(//fincity institution rougte\\
                )
            .then(({ data: result }) => res.json(result))
            .catch(err => res.status(422).json(err));
    }
}
