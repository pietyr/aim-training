(function () {
	const reflexButton = document.querySelector("button.reflex");
	const outputMessage = document.querySelector("p.result-time");
	let timer;
	let startTime;
	reflexButton.addEventListener("click", function clickReflex(e) {
		const text = reflexButton.textContent;
		switch (text) {
			case "Start":
				outputMessage.textContent = "";
				reflexButton.classList.remove("blue");
				reflexButton.classList.add("red");
				reflexButton.textContent = "Wait";
				timer = setTimeout(function countTime() {
					startTime = Date.now();
					reflexButton.classList.remove("red");
					reflexButton.classList.add("green");
					reflexButton.textContent = "Click!";
				}, Math.floor(Math.random() * 6000 + 1000));
				break;
			case "Wait":
				clearTimeout(timer);
				outputMessage.textContent = "Too early!";
				reflexButton.classList.remove("red");
				reflexButton.classList.add("blue");
				reflexButton.textContent = "Start";
				break;
			case "Click!":
				const diff = Date.now() - startTime;
				const seconds = Math.floor(diff / 1000);
				const mils = Math.floor(diff - seconds * 1000);
				outputMessage.textContent = `${mils}ms`;
				reflexButton.classList.remove("green");
				reflexButton.classList.add("blue");
				reflexButton.textContent = "Start";
				break;
		}
	});
})();
