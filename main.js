function notPure() {
	UnknownGlobalCouldHaveSideEffect.test('value');
}

function pure(num1, num2) {
	return num1 + num2;
}

console.log('test');