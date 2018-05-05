import HelloWorld from './helloWorld'

describe('helloWorld class', () => {
	describe('"up"', () => {
		it('should export a function', () => {
			const hello = new HelloWorld('world')
			expect(hello.hello).to.be.a('function')
		})
	})
	describe('instantiation', () => {
		it('should return correct message', () => {
			const hello = new HelloWorld('world')
			expect(hello.hello()).to.equal('Hello world')
		})
	})
})
