install: 
	npm ci;
brain-even:
	node bin/games/brain-even.js
brain-calc:
	node bin/games/brain-calc.js
brain-gcd:
	node bin/games/brain-gcd.js
brain-progression:
	node bin/games/brain-progression.js
lint:
	npx eslint
publish: 
	npm publish --dry-run

