function printNumbers(from, to) {
if (from <= to) {
		console.log(from);
		from++;
		setTimeout(printNumbers, 2000, from, to);
}
}

printNumbers(1, 5);
