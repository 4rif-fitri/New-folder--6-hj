import { renderPick } from "../render/Pick.js"
import { renderKombinasi } from "../render/Kombinasi.js"

import { setupPick } from "../logic/pickLogic.js"
import { defaultCheck } from "../logic/defaultCheck.js"
import { updateText } from "../logic/text.js"
import { setupClickBtn } from "../logic/neededLogic.js"
import { renderLearnKombinasi } from "../render/Learn/Kombinasi.js"
import { renderLearnKombinasiTerbalik } from "../render/Learn/KombinasiTerbalik.js"
import { renderLearnList } from "../render/Learn/List.js"
import { renderPopupDone } from "../render/components/PopupDone.js"

export let widgetRegistry = {

	text: {
		render: updateText,
		setup: () => { }
	},
	learnKombinasi: {
		render: renderLearnKombinasi,
		setup: () => { }
	},
	learnKombinasiTerbalik: {
		render: renderLearnKombinasiTerbalik,
		setup: () => { }
	},
	list: {
		render: renderLearnList,
		setup: () => { }
	},
	popUpDone:{
		render:renderPopupDone,
		
	}
	// pick: {
	// 	render: renderPick,
	// 	setup: setupPick,
	// 	check: defaultCheck,
	// },
	// needed: {
	// 	render: renderNeeded,
	// 	setup: setupClickBtn,
	// 	check: defaultCheck,
	// 	afterCorrect(lastElement, numberPicked, currentData) {
	// 		updateContent(lastElement.querySelector(".dialog p"), `${currentData.content.options[0]} perlukan ${currentData.content.pelengkap} untuk jadi 10`)
	// 	},
	// },
	// pecah: {
	// 	render: renderPecah,
	// 	setup: setupClickBtn,
	// 	check: defaultCheck,
	// 	afterCorrect(lastElement, numberPicked, currentData) {
	// 		updateContent(lastElement.querySelector(".dialog p"), `${currentData.content.pelengkap} itu kita akan ambil dari ${currentData.answer}`)
	// 		updateContent(lastElement.querySelectorAll(".eqn")[1], numberPicked)
	// 	},

	// },
	// baki: {
	// 	render: renderBaki,
	// 	setup: setupClickBtn,
	// 	check: defaultCheck,
	// 	afterCorrect(lastElement, numberPicked, currentData) {
	// 		updateContent(lastElement.querySelector(".dialog p"), `${currentData.content.options[1]} akan dipecahkan kepada ${currentData.content.pelengkap} dan ${currentData.answer}`)
	// 		updateContent(lastElement.querySelectorAll(".pecah")[1], numberPicked)
	// 	},

	// },
	// gabung: {
	// 	render: renderGabung,
	// 	setup: setupClickBtn,
	// 	check: defaultCheck,
	// 	afterCorrect(lastElement, numberPicked, currentData) {
	// 		updateContent(lastElement.querySelector(".dialog p"), `${currentData.content.options[0]} tambah ${currentData.content.pelengkap} akan dapat ${currentData.answer}`)
	// 		updateContent(lastElement.querySelectorAll(".hasil")[0], numberPicked)
	// 	},

	// },
	// sum: {
	// 	render: renderSum,
	// 	setup: setupClickBtn,
	// 	check: defaultCheck,
	// 	afterCorrect(lastElement, numberPicked, currentData) {
	// 		updateContent(lastElement.querySelector(".dialog p"), `${currentData.content.options[0] + currentData.content.pelengkap} tambah ${currentData.content.options[1] - currentData.content.pelengkap} akan dapat ${currentData.answer}`)
	// 		updateContent(lastElement.querySelectorAll(".jumlah")[0], `=${numberPicked}`)
	// 	},

	// },
	// summery: {
	// 	render: renderSummery,
	// 	setup: setupClickBtn,
	// 	check: defaultCheck,
	// 	afterCorrect(lastElement, numberPicked, currentData) {
	// 		updateContent(lastElement.querySelector(".dialog p"), `${currentData.content.options[0]} tambah ${currentData.content.options[1]} akan dapat ${currentData.answer}`)
	// 		updateContent(lastElement.querySelectorAll(".jumlahAkhir")[0], `${numberPicked}`)
	// 	},

	// },
	// latihanPecah: {
	// 	render: renderKombinasi,
	// 	setup: setupClickBtn,
	// 	check: defaultCheck,
	// 	afterCorrect(lastElement, numberPicked, currentData) {
	// 		updateContent(lastElement.querySelector(".dialog p"), `${currentData.content.whole} boleh dipecahkan kepada ${currentData.content.part[0]} dan ${numberPicked}`)
	// 		updateContent(lastElement.querySelectorAll(".circuleAns")[0], `${numberPicked}`)
	// 	},
	// },
	// latihanPecahTerbalik: {
	// 	render: renderPecahTerbalik,
	// 	setup: setupClickBtn,
	// 	check: defaultCheck,
	// 	afterCorrect(lastElement, numberPicked, currentData) {
	// 		updateContent(lastElement.querySelector(".dialog p"), `Jumlah ${currentData.content.part[0]} tambah ${currentData.content.part[1]} ialah ${currentData.answer}`)
	// 		updateContent(lastElement.querySelectorAll(".circuleAns")[0], `${numberPicked}`)
	// 	},
	// },
	// latihanBoxDiagram: {
	// 	render: renderBoxDiagram,
	// 	setup: setupClickBtn,
	// 	check: defaultCheck,
	// 	afterCorrect(lastElement, numberPicked, currentData) {
	// 		updateContent(lastElement.querySelector(".dialog p"), `${currentData.content.numberOfBox} perlukan ${currentData.answer} untuk jadi 10`)
	// 		let grid = document.querySelector(".grid") 
	// 		let addBox = Array.from({ length: currentData.answer }).map(() => {
	// 			let box = document.createElement("div")
	// 			box.classList.add("box","pop")
	// 			grid.appendChild(box)
	// 		})
	// 	},
	// },
	// trueFalse:{
	// 	render: renderTrueFalse,
	// 	setup: setupClickBtn,
	// 	check: defaultCheck,
	// 	afterCorrect: () => {},
	// },
	// dragnDrop1:{
	// 	render: renderDragDrop1,
	// 	setup: setupDragDrop1,

	// }
}