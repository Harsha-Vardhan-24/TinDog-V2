// Create the Dog class here

let likedDogs = [];

class Dog {
    constructor(dogData) {
        Object.assign(this, dogData);
        this.currentDogData = dogData;
        if (dogData === undefined) {
            this.renderLikedDogs();
        }
    }

    render() {
        let { name, avatar, age, bio } = this;
        return `
            <section>
                <div class="data-area">
                    <img
                        class="dog-img"
                        alt="user image"
                        src="${avatar}"
                    />
                    <div class="text-area">
                        <h3>${name}, ${age}</h3>
                        <p>${bio}</p>
                    </div>
                </div>
            </section>
        `;
    }

    renderNewDog(e) {
        let { hasBeenSwiped, hasBeenLiked } = this.currentDogData;

        this.currentDogData.hasBeenSwiped = !hasBeenSwiped;

        if (e.target.id === "like-btn") {
            this.currentDogData.hasBeenLiked = !hasBeenLiked;
        }

        if (this.currentDogData.hasBeenLiked) {
            likedDogs.push(this.currentDogData);
        }
    }

    renderLikedDogs() {
        document.getElementById("action-buttons").style.display = "none";
        let likedDogData = "";
        likedDogs.map((dog) => {
            likedDogData += `
                <div class="liked-dog-data">
                    <img
                        src="${dog.avatar}"
                        class="liked-dog-img"
                        alt="liked dog images"
                    />
                    <div class="liked-dog-text">
                        <h3>${dog.name}, ${dog.age}</h3>
                        <p>
                            ${dog.bio}
                        </p>
                    </div>
                </div>
            `;
        });
        document.querySelector("main").style.display = "none";
        document.getElementById("liked-dogs").innerHTML += likedDogData;
        document.getElementById("liked-dogs").style.display = "block";
    }
}

export default Dog;
