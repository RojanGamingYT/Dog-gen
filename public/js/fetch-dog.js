let img = document.getElementById("dog-image");

function doggify() {
	let main = document.getElementById("main");

	let breed = document.getElementById("breeds").value;

	let url = "https://dog.ceo/api/breeds/image/random";

	let urlBreed = "https://dog.ceo/api/breed/";

	let breedArray = breed.split("-");

	if (breed == "random") {
		fetch(url)
			.then((response) => response.json())
			.then((data) => placeImage(data));
	} else if (breedArray.length > 1) {
		let newUrl = `${urlBreed}${breedArray[1]}/${breedArray[0]}/images/random`;
		fetch(newUrl)
			.then((response) => response.json())
			.then((data) => placeImage(data));
	} else {
		let finalUrl = `${urlBreed}${breed}/images/random`;
		fetch(finalUrl)
			.then((response) => response.json())
			.then((data) => placeImage(data));
	}
}

doggify();

function placeImage(data) {
	img.src = data.message;
}
