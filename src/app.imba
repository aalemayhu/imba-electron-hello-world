tag App

	css & d: flex jc: center fld: column ai: center min-height: 100vh
	css header font-size: 64px;
	css button padding: 16px; font-size: 48px;

	def setup
		n = 0

	def score
		n += 1

	def render
		<self .App>
			<header>
				"Hello, world with Imba!"
			<header>
				"Score: {n}"
			<button :tap.score>
				"Get a point"

imba.mount <App>