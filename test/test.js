const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function () {
	it('Si la palabra termina con "ar" se le quitan esas dos letras', function () {
		const translation = platzom("programar")
		expect(translation).to.equal("program")
	})
	it('Si inicia con "Z " se le añade "pe" al final', function () {
		const translation = platzom("zorro")
		const translation2 = platzom("zarpar")
		expect(translation).to.equal("zorrope")

		expect(translation2).to.equal("zarppe")
		
	})
	it('Si la palara traducida tiene 10 o más ', function () {
		const translation = platzom("abecedario")
		expect(translation).to.equal("abece-dario")
		
	})
	it('Si la palabra es un palindromo', function () {
		const translation = platzom("sometemos")
		expect(translation).to.equal("SoMeTeMoS")
	})
})