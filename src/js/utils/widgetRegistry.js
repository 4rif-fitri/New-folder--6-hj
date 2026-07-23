import { renderPick } from "../render/Pick.js"
import { renderKombinasi } from "../render/Kombinasi.js"

import { setupPick } from "../logic/pickLogic.js"
import { defaultCheck } from "../logic/defaultCheck.js"
import { updateText } from "../logic/text.js"
import { setupClickBtn } from "../logic/neededLogic.js"
import { renderLearnKombinasi } from "../render/Learn/Kombinasi.js"
import { renderLearnKombinasiTerbalik } from "../render/Learn/KombinasiTerbalik.js"
import { renderLearnList } from "../render/Learn/List.js"
import { renderLearnSquareBoxDiagram } from "../render/Learn/SquareBoxDiagram.js"
import { renderPopupDone } from "../render/components/PopupDone.js"

import { renderLearnPick } from "../render/Learn/teknik/Pick.js"
import { renderLearnGabung } from "../render/Learn/teknik/Gabung.js"
import { renderLearnPecah } from "../render/Learn/teknik/Pecah.js"
import { renderLearnBaki } from "../render/Learn/teknik/Baki.js"
import { renderLearnNeeded } from "../render/Learn/teknik/Needed.js"
import { renderLearnSum } from "../render/Learn/teknik/Sum.js"
import { renderLearnSummery } from "../render/Learn/teknik/Summery.js"
import { updateContent } from "./helper.js"
import { renderKombinasiTerbalik } from "../render/KombinasiTerbalik.js"
import { renderNeeded } from "../render/Needed.js"
import { renderPecah } from "../render/Pecah.js"
import { renderBaki } from "../render/Baki.js"
import { renderGabung } from "../render/Gabung.js"
import { renderSum } from "../render/Sum.js"
import { renderSummery } from "../render/Summery.js"
import { renderSquareBoxDiagram } from "../render/SquareBoxDiagram.js"

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
	LearnDiagramBox: {
		render: renderLearnSquareBoxDiagram,
		setup: () => { }
	},
	LearnPick: {
		render: renderLearnPick,
	},
	LearnNeeded: {
		render: renderLearnNeeded,
	},
	LearnPecah: {
		render: renderLearnPecah,
	},
	LearnBaki: {
		render: renderLearnBaki,
	},
	LearnGabung: {
		render: renderLearnGabung,
	},
	LearnSum: {
		render: renderLearnSum,
	},
	LearnSummery: {
		render: renderLearnSummery,
	},
	
	Pick: {
		render: renderPick,
		setup: setupPick,
		check: defaultCheck,
		afterCorrect(numberPicked, currentData) {
			updateContent(document.querySelector(".dialog p"), `${currentData.content.nums[0]} ialah nombor paling besar`)
		},
	},
	Needed: {
		render: renderNeeded,
		setup: setupClickBtn,
		check: defaultCheck,
		afterCorrect(numberPicked, currentData) {
			updateContent(document.querySelector(".dialog p"), `${currentData.content.nums[0]} perlukan ${currentData.content.pelengkap} untuk jadi 10`)
			updateContent(document.querySelector(".tempatKosong"), `${currentData.content.pelengkap}`)
		},
	},
	Pecah: {
		render: renderPecah,
		setup: setupClickBtn,
		check: defaultCheck,
		afterCorrect(numberPicked, currentData) {
			updateContent(document.querySelector(".dialog p"), `${currentData.content.pelengkap} itu kita akan ambil dari ${currentData.content.nums[1]}`)
			updateContent(document.querySelector(".tempatKosong"), `${currentData.content.nums[1]}`)
		}
	},
	Baki: {
		render: renderBaki,
		setup: setupClickBtn,
		check: defaultCheck,
		afterCorrect(numberPicked, currentData) {
			updateContent(document.querySelector(".dialog p"), `${currentData.content.nums[1]} akan dipecahkan kepada ${currentData.content.pelengkap} dan ${currentData.content.baki}`)
			updateContent(document.querySelector(".tempatKosong"), `${currentData.content.baki}`)
		},
	},
	Gabung: {
		render: renderGabung,
		setup: setupClickBtn,
		check: defaultCheck,
		afterCorrect(numberPicked, currentData) {
			updateContent(document.querySelector(".dialog p"), `${currentData.content.nums[0]} tambah ${currentData.content.pelengkap} akan dapat ${currentData.content.nums[0] + currentData.content.pelengkap}`)
			updateContent(document.querySelector(".hasil"), `${currentData.content.nums[0] + currentData.content.pelengkap}`)
		},
	},
	Sum: {
		render: renderSum,
		setup: setupClickBtn,
		check: defaultCheck,
		afterCorrect(numberPicked, currentData) {
			updateContent(document.querySelector(".dialog p"), `10 tambah ${currentData.content.baki} akan dapat ${currentData.content.baki + currentData.content.baki}`)
			updateContent(document.querySelector(".tempatKosong"), `=${currentData.content.nums[0] + currentData.content.nums[1]}`)
		},
	},
	Summery: {
		render: renderSummery,
		setup: setupClickBtn,
		check: defaultCheck,
		afterCorrect(numberPicked, currentData) {
			updateContent(document.querySelector(".tempatKosong"), `${currentData.content.nums[0] + currentData.content.nums[1]}`)
		},

	},
	latihanPecah: {
		render: renderKombinasi,
		setup: setupClickBtn,
		check: defaultCheck,
		afterCorrect(numberPicked, currentData) {
			updateContent(document.querySelector(".dialog p"), `${currentData.content.whole} boleh dipecahkan kepada ${currentData.content.part[0]} dan ${numberPicked}`)
			let answerElements = document.querySelectorAll(".circula-ans");
			if (currentData.content.part[0] === "") {
				updateContent(answerElements[0], numberPicked);
			}
			if (currentData.content.part[1] === "") {
				updateContent(answerElements[1], numberPicked);
			}
		}
	},
	latihanPecahTerbalik: {
		render: renderKombinasiTerbalik,
		setup: setupClickBtn,
		check: defaultCheck,
		afterCorrect(numberPicked, currentData) {
			updateContent(document.querySelector(".dialog p"), `Jumlah ${currentData.content.part[0]} dan ${currentData.content.part[1]} ialah ${currentData.answer}`)
			document.querySelectorAll(".target").forEach(target => {
				target.textContent = numberPicked
			})
		},
	},
	SquareBoxDiagram: {
		render: renderSquareBoxDiagram,
		setup: setupClickBtn,
		check: defaultCheck,
		afterCorrect(numberPicked, currentData) {
			updateContent(document.querySelector(".dialog p"), `${currentData.content.numberOfBox} perlukan ${currentData.answer} untuk jadi 10`)
			let content = document.querySelector(".content")
			Array.from({ length: currentData.answer }).map(() =>{
				let div = document.createElement("div")
				div.classList.add("box","pop")
				content.appendChild(div)
			})

		},
	},

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