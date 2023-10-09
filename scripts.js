const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];


class Gallery {
    constructor(civilImages, militaryImages) {
     
       this.civilImages = civilImages
       this.militaryImages = militaryImages
    }
    
    getRandomCivil() {

        const randomIndex = Math.floor(Math.random() * this.civilImages.length);
        return this.civilImages[randomIndex];

    }
    
    getRandomMilitary() {

    const randomIndex = Math.floor(Math.random() * this.militaryImages.length);
    return this.militaryImages[randomIndex];

    }
    
    getAll() {

         return this.civilImages, this.militaryImages
    

    }
}

class Painter {
    constructor(createGallery) {
        this.createGallery()
    }

    createGallery() {
    const section = document.createElement ('section')
    section.classList.add('Gallery')
    document.body.appendChild(section)
    this.section = section;
    
    }

    createImageTag(imageUrl) {
    const img = document.createElement ('img')
    img.src = imageUrl
    return img

    }

    paintSingleImage(imageUrl) {
    const imgSingle = this.createImageTag(imageUrl)
    this.section.appendChild(imgSingle)
    }

    paintMultipleImages(arrayOfImages) {
        arrayOfImages.forEach((imageUrl) => {
            const imgSingle = this.createImageTag(imageUrl)
            this.section.appendChild(imgSingle) 
        }
    )}
}



const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();