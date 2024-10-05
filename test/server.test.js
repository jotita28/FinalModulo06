const chai = require('chai');
const chaiHttp = require('chai-http');
const { app } = require('../index.js');  //servidor 

chai.use(chaiHttp);

//pruebas para conexion con el servidor(no sé si entendi mal pero el requerimiento solo es probar la respuesta del servidor, no todos los verbos http)

describe("GET /animes", () => {
    it("Responde un codigo 200", (done) => {
        chai.request(app)
        .get("/animes")
        .end((err, res) => {
            chai.expect(res).status(200);
            done();
        })
    });
    it("Responde un JSON", (done) => {
        chai.request(app)
            .get("/animes")
            .end((err, res) => {
                chai.expect(res).to.be.json;
                done();
            });
    });
})


