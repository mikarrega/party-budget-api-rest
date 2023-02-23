const mongoose = require("mongoose")

async function main() {
    try {

        mongoose.set("strictQuery", true)

        await mongoose.connect(
            "mongodb+srv://mikarrega:b1gA1OqR1c1V0DRz@cluster0.jhtq3p7.mongodb.net/?retryWrites=true&w=majority"
            // "mongodb+srv://mikarrega:b1gA1OqR1c1V0DRz@cluster0.jhtq3p7.mongodb.net/?retryWrites=true&w=majority"
        )

        console.log("conectado ao banco!")
    } catch(error) {
        console.log('Erro: ${error}')
    }
}

module.exports = main