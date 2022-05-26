// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

const firstUserFavColor = new Set();
firstUserFavColor.add("Yellow");
firstUserFavColor.add("Pink");
firstUserFavColor.add("White");
firstUserFavColor.add("Purple");

const secondUserFavColor = new Set();
secondUserFavColor.add("Blue");
secondUserFavColor.add("Black");
secondUserFavColor.add("Grey");

class userEdu{
    constructor(name,city,graduate) {
        this.name = name;
        this.city = city;
        this.graduate = graduate;
    }
}

const firstUserSchool1 = new userEdu("SD 01","Jakarta", 2016);
const firstUserSchool2  = new userEdu("SMP 02","Jakarta",2019);
const firstUserSchool3  = new userEdu("SMA 03","tangerang");

const secondUserSchool1 = new userEdu("SD 02","Jakarta", 2010);
const secondUserSchool2 = new userEdu("SMP 03","Bogor", 2013);
const secondUserSchool3 = new userEdu("SMA 01","Surabaya",2016);
const secondUserSchool4 = new userEdu("Universitas Maju","tangerang");

const firstUserEdu = [firstUserSchool1, firstUserSchool2, firstUserSchool3];

const secondUserEdu = [secondUserSchool1, secondUserSchool2, secondUserSchool3, secondUserSchool4];

const firstUserFavResto = new Set();
firstUserFavResto.add("Bento");
firstUserFavResto.add("Sushi");
firstUserFavResto.add("Pancake");
firstUserFavResto.add("Eggy");
firstUserFavResto.add("Tempura");
firstUserFavResto.add("Bento");
firstUserFavResto.add("Eggy");
firstUserFavResto.add("Padang");
firstUserFavResto.add("Tteok");
firstUserFavResto.add("Sushi");
firstUserFavResto.add("Sushi");

const secondUserFavResto = new Set();
secondUserFavResto.add("Tempura");
secondUserFavResto.add("Bento");
secondUserFavResto.add("Sushi");
secondUserFavResto.add("Pancake");
secondUserFavResto.add("Padang");
secondUserFavResto.add("Katsu");
secondUserFavResto.add("Geprek");
secondUserFavResto.add("Pancake");
secondUserFavResto.add("Eggy");

const monica = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor : firstUserFavColor,
    isHavePet : "Yes",
    education: firstUserEdu,
    favouriteRestaurant: firstUserFavResto
    
};
const wendy = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: secondUserFavColor,
    isHavePet:  "No",
    education: secondUserEdu,
    favouriteRestaurant: secondUserFavResto
};




// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [monica,wendy];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};