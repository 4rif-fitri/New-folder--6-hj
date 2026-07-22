export function renderSquareBoxDiagram(data) {
	return `
		<div class="content grid-5 gap-1">
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>

			<div class="box pop"></div>
			<div class="box pop"></div>
			<div class="box pop"></div>
			<div class="box pop"></div>
			<div class="box pop"></div>
		</div>

		<div class="options grid-3">
			<div class="option soft-box btnAns">
				<h2>1</h2>
			</div>
			<div class="option soft-box btnAns">
				<h2>1</h2>
			</div>
			<div class="option soft-box btnAns">
				<h2>1</h2>
			</div>
		</div>
	`
}