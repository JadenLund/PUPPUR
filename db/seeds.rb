# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or create!d alongside the database with db:setup, icon: "").
#

puts "Deleting old data..."
Dog.destroy_all
Comment.destroy_all
Client.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!(Dog.table_name)
ActiveRecord::Base.connection.reset_pk_sequence!(Client.table_name)
ActiveRecord::Base.connection.reset_pk_sequence!(Comment.table_name)

puts "Seeding dog breeds..."

Dog.create!(
  breed: "Doberman Pinscher",
  image:
    "https://vgl.ucdavis.edu/sites/g/files/dgvnsk8836/files/inline-images/Doberman-Pinscher-800px.jpg",
  size: "Large",
  group: "Working",
  coat_length: "Short",
  icon:
    "https://static.vecteezy.com/system/resources/previews/002/736/838/non_2x/doberman-dog-pet-mascot-breed-head-character-free-vector.jpg"
)

Dog.create!(
  breed: "Akita",
  image:
    "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Japanese-Akita.jpg?itok=GbMV9z73",
  size: "Large",
  group: "Working",
  coat_length: "Medium",
  icon:
    "https://media.istockphoto.com/vectors/flat-colored-black-shiba-inu-front-face-with-tongue-out-vector-id1278407981?k=20&m=1278407981&s=170667a&w=0&h=XkDfvwHPkXoS4qOTrA6Gnus9boA7ol1mkoy7_E2TE9c="
)

Dog.create!(
  breed: "Xoloitzcuintli",
  image: "https://www.europetnet.org/images/dogbreeds/mexicanhairlessdog.jpg",
  size: "Medium",
  group: "Non-Sporting",
  coat_length: "Short",
  icon:
    "https://media.istockphoto.com/vectors/border-collie-cute-kawaii-vector-character-vector-id1193510957?k=20&m=1193510957&s=170667a&w=0&h=bgBPOJaVRWvxE-nEyRHnmoYRdkmT6NhaJ25F_gYDS_A="
)

Dog.create!(
  breed: "Golden Retriever",
  image:
    "https://www.purina.co.nz/sites/default/files/2021-02/BREED%20Hero_0059_golden_retriever.jpg",
  size: "Large",
  group: "Sporting",
  coat_length: "Long",
  icon:
    "https://thumbs.dreamstime.com/b/outlined-cute-golden-retriever-front-head-196761032.jpg"
)

Dog.create!(
  breed: "Labrador Retrievers",
  image:
    "https://media.istockphoto.com/photos/labrador-retriever-12-months-old-sitting-picture-id450726311?k=20&m=450726311&s=612x612&w=0&h=6gUrHrWD6HV4q3gURf1uKFx7zNjMscDy7AMlZrhGplE=",
  size: "Large",
  group: "Sporting",
  coat_length: "Medium",
  icon:
    "https://c8.alamy.com/zooms/9/56aac6229ea84feca3c186d5b00eb115/2gnkck3.jpg"
)

Dog.create!(
  breed: "Chihuahua",
  image:
    "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Chihuahua-Smooth-Coat.jpg?itok=J40w8Swm",
  size: "Small",
  group: "Toy",
  coat_length: "Medium",
  icon:
    "https://media.istockphoto.com/vectors/chihuahua-cute-kawaii-vector-character-vector-id1192935139?k=20&m=1192935139&s=170667a&w=0&h=FDZFBb1QUbO5O1g5TOhahyykp11whzkf5pNwK9d3oyg="
)

Dog.create!(
  breed: "Shiba Inu",
  image:
    "https://www.hundeo.com/wp-content/uploads/2019/05/Shiba-Inu-Profilbild.jpg",
  size: "Medium",
  group: "Sporting",
  coat_length: "Medium",
  icon:
    "https://i.pinimg.com/originals/6f/54/97/6f54977b9364c86a1fe5652e17779049.jpg"
)

Dog.create!(
  breed: "Standard Poodle",
  image:
    "https://media.istockphoto.com/photos/white-standard-poodle-picture-id994143796?k=20&m=994143796&s=612x612&w=0&h=eyZZgMyQLTh-SAVkzxj_PMczn4BLIoM9ATg4exktbag=",
  size: "Large",
  group: "Non-Sporting",
  coat_length: "Medium",
  icon:
    "https://media.istockphoto.com/vectors/toy-poodle-front-head-flat-color-vector-id1276937437?k=20&m=1276937437&s=170667a&w=0&h=FSe6vTFuoHIeI75p5-vyhF7hC3aIsrhtP7jgpS1fAEc="
)

Dog.create!(
  breed: "Siberian Husky",
  image:
    "https://img.freepik.com/premium-photo/siberian-husky-front-white-background_191971-25384.jpg",
  size: "Medium",
  group: "Working",
  coat_length: "Long",
  icon:
    "https://m.media-amazon.com/images/I/41gTlBj2OXL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg"
)

Dog.create!(
  breed: "French Bulldog",
  image:
    "https://www.purina.co.nz/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0114_french_bulldog.jpg?itok=WANE6bt-",
  size: "Small",
  group: "Non-Sporting",
  coat_length: "Short",
  icon:
    "https://cdn.xxl.thumbs.canstockphoto.com/cute-cartoon-french-bulldog-face-drawing-adorable-little-dog-portrait-simple-vector-illustration-eps-vector_csp51515088.jpg"
)

Dog.create!(
  breed: "German Shepherd",
  image:
    "https://www.purina.co.nz/sites/default/files/2021-02/BREED%20Hero_0053_german_shepherd.jpg",
  size: "Large",
  group: "Herding",
  coat_length: "Medium",
  icon:
    "https://image.shutterstock.com/image-vector/cute-little-dog-german-shepherd-260nw-1559573690.jpg"
)

Dog.create!(
  breed: "English Bulldog",
  image: "https://www.cesarsway.com/wp-content/uploads/2019/02/Bulldog.jpeg",
  size: "Small",
  group: "Non-Sporting",
  coat_length: "Short",
  icon:
    "https://img.freepik.com/premium-vector/cute-dogs-face-avatar-funny-bulldog-puppy-face-pups-head-portrait-adorable-doggy-snout-sweet-amusing-pets-muzzle-flat-vector-illustration-isolated-white-background_633472-696.jpg?w=2000"
)

Dog.create!(
  breed: "Afghan Hound",
  image:
    "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Afghan-Hound.jpg?itok=JfyHgCyq",
  size: "Large",
  group: "Hound",
  coat_length: "Medium",
  icon:
    "https://media.istockphoto.com/vectors/simple-and-adorable-afghan-hound-illustration-front-face-vector-id1426163310?b=1&k=20&m=1426163310&s=170667a&w=0&h=6aT6xzn3zlBM_F9j6tGOa6b6XjoMKKv2eobakmNbdCo="
)

Dog.create!(
  breed: "Border Collie",
  image:
    "https://www.purina.co.nz/sites/default/files/2021-02/BREED%20Hero_0018_border_collie.jpg",
  size: "Medium",
  group: "Miscellaneous ",
  coat_length: "Medium",
  icon: "https://cdn-icons-png.flaticon.com/512/4843/4843819.png"
)

Dog.create!(
  breed: "American Eskimo",
  image:
    "https://ckcusa.com/media/147408/american-eskimo-miniature.jpg?preset=ckcBreedImage375",
  size: "Medium",
  group: "Non-Sporting",
  coat_length: "Medium",
  icon:
    "https://images.yappy.com/yappicon/americaneskimodog/americaneskimodog-01.png"
)

Dog.create!(
  breed: "Rottweiler",
  image:
    "http://www.pashudhanpraharee.com/wp-content/uploads/2022/03/Rottweiler-dog-jpg.jpg",
  size: "Large",
  group: "Working",
  coat_length: "Short",
  icon:
    "https://c8.alamy.com/compfr/2h8ay6p/dessin-drole-de-tete-de-chien-de-rottweiler-portrait-de-chiot-mignon-illustration-de-clip-d-art-vectoriel-2h8ay6p.jpg"
)

Dog.create!(
  breed: "Dachshund",
  image:
    "https://www.purina.co.nz/sites/default/files/2021-02/BREED%20Hero_0041_dachshund_smooth_mini.jpg",
  size: "Small",
  group: "Hound",
  coat_length: "Short",
  icon:
    "https://media.istockphoto.com/vectors/dachshund-dog-face-vector-illustration-vector-id1221502425?k=20&m=1221502425&s=612x612&w=0&h=AiDxCRy60HyOLT42H50ytguRg8exvAIat1bCK6lxVWc="
)

Dog.create!(
  breed: "Great Dane",
  image:
    "https://www.petbarn.com.au/petspot/app/uploads/2014/07/54.-Great-Dane.jpg",
  size: "Large",
  group: "Working",
  coat_length: "Short",
  icon:
    "https://t3.ftcdn.net/jpg/01/21/81/14/360_F_121811489_x4kMoUmBMYf3Aty2MszVzK5739Df9ECx.jpg"
)

Dog.create!(
  breed: "Maltese",
  image:
    "https://dogsbestlife.com/wp-content/uploads/2020/03/Maltese-scaled.jpeg",
  size: "Small",
  group: "Toy",
  coat_length: "Long",
  icon:
    "https://thumbs.dreamstime.com/z/outlined-simple-adorable-white-maltese-dog-front-head-illustration-outlined-simple-adorable-white-maltese-dog-front-head-211365377.jpg"
)

Dog.create!(
  breed: "Basset Hound",
  image:
    "https://img.freepik.com/premium-photo/basset-hound-dog_87557-11183.jpg",
  size: "Medium",
  group: "Hound",
  coat_length: "Short",
  icon:
    "https://images.assetsdelivery.com/compings_v2/you1023/you10232112/you1023211200012.jpg"
)

Dog.create!(
  breed: "Shetland Sheepdog",
  image:
    "https://www.akc.org/wp-content/uploads/2017/11/Shetland-Sheepdog-On-White-01.jpg",
  size: "Medium",
  group: "Sporting",
  coat_length: "Long",
  icon:
    "https://img.myloview.com/posters/outlined-simple-shetland-sheepdog-front-head-700-271138233.jpg"
)

Dog.create!(
  breed: "Samoyed",
  image:
    "https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=675,fit=cover/animal/breed/dog/adult/5caf1605d95a6536635501.jpg",
  size: "Medium",
  group: "Working",
  coat_length: "Long",
  icon:
    "https://img.freepik.com/premium-vector/dog-samoyed-head-iconsvector-illustration-with-cartoon-style_650087-113.jpg?w=2000"
)

Dog.create!(
  breed: "Bedlington Terrier",
  image:
    "https://www.petbarn.com.au/petspot/app/uploads/2016/08/104.-Bedlington-Terrier.jpg",
  size: "Small",
  group: "Terrier",
  coat_length: "Medium",
  icon:
    "http://cdn.shopify.com/s/files/1/0550/5659/7223/products/bedlington-terrier-sticker-272049.jpg?v=1643685033"
)

Dog.create!(
  breed: "Havanese",
  image:
    "https://cdn.shopify.com/s/files/1/1267/6891/files/Havanese_1080x.png?v=1643390305",
  size: "Small",
  group: "Toy",
  coat_length: "Long",
  icon:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2g0kzlQYyXlglNE_kBEj_vrIsKP2gUA2fZVpOqp83tmCXD5MANnqkE8y4x1lBCPGAFHw&usqp=CAU"
)

Dog.create!(
  breed: "Yorkshire Terrier",
  image:
    "https://www.purina.co.nz/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0000_yorkshire_terrier.jpg?itok=zFe6oRsp",
  size: "Small",
  group: "Toy",
  coat_length: "Medium",
  icon:
    "https://thumbs.dreamstime.com/b/yorkshire-terrier-cute-icon-graphic-illustration-vector-t-shirt-emblem-tattoo-logo-yorkshire-terrier-cute-icon-cute-pet-186481543.jpg"
)

Dog.create!(
  breed: "Cane Corso",
  image:
    "https://bowwowinsurance.com.au/wp-content/uploads/2018/10/cane-corso-700x700.jpg",
  size: "Large",
  group: "Working",
  coat_length: "Short",
  icon:
    "https://images.yappy.com/yappicon/canecorsoitaliano/canecorsoitaliano-02.png"
)

Dog.create!(
  breed: "Bull Terrier",
  image:
    "https://www.petbarn.com.au/petspot/app/uploads/2015/01/12.-Bull-Terrier.jpg",
  size: "Medium",
  group: "Terrier",
  coat_length: "Short",
  icon:
    "https://thumbs.dreamstime.com/b/cute-simple-illustration-bull-terrier-dog-front-head-all-hand-drawn-248727871.jpg"
)
Dog.create!(
  breed: "Brian Griffin",
  image:
    "https://www.dogtime.com/assets/uploads/2013/12/file_18925_brian-family-guy-dog-brought-back-to-life.jpg",
  size: "Medium",
  group: "Sporting",
  coat_length: "short",
  icon:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEv5Z2ebka66Bf7B6YGSZuPDL9gnsC5sxx8w&usqp=CAU"
)
# Dog.create!(breed: "", image: "",  size: "", group "", coat_length: "", icon: "")

puts "Seeding users..."

Client.create!(username: "Sammy010", password: "Sammy1234")
Client.create!(username: "CatLover2002", password: "AnyB0dy656")
Client.create!(username: "Ap3xMan", password: "Ap3xPr3dat0r")
Client.create!(username: "xXAnimalXx", password: "Meowwoem171!")
Client.create!(username: "Noitabra", password: "C@pyB@ra123")
Client.create!(username: "BartTheBoy", password: "AbCdE123")
Client.create!(username: "Angry_Horse", password: "An1malsAr3gr8")
Client.create!(username: ".xXSussyXx.", password: "D0gg0B@rkS")
Client.create!(username: "user123", password: "password123")
Client.create!(username: "XerniaAxel", password: "animal")

puts "Seeding comments..."

Comment.create!(
  name: "I love this breed!!!",
  summary:
    "Yes these are the target dogs, I love their curved snouts and how protective they are",
  likes: 5,
  client_id: 1,
  dog_id: 27
)
Comment.create!(
  name: "This dog scares me",
  summary: "Although small these dogs are scary!!",
  likes: 0,
  client_id: 2,
  dog_id: 6
)
Comment.create!(
  name: "Such a sweet breed",
  summary: "I honestly grew up with these dogs, so I cannot love them enough!",
  likes: 10,
  client_id: 3,
  dog_id: 4
)
Comment.create!(
  name: "Doggo",
  summary: "Bark Bark",
  likes: -1,
  client_id: 4,
  dog_id: 27
)
Comment.create!(
  name: "I hate dogs",
  summary: "I hate everything about them",
  likes: -5,
  client_id: 10,
  dog_id: 22
)
Comment.create!(
  name: "Cuties",
  summary: "Just so sweet, I love them so much!!!",
  likes: 3,
  client_id: 5,
  dog_id: 16
)
Comment.create!(
  name: "This dog scares me",
  summary: "Although small these dogs are scary!!",
  likes: 0,
  client_id: 9,
  dog_id: 8
)
Comment.create!(
  name: "Such a sweet breed",
  summary: "I honestly grew up with these dogs, so I cannot love them enough!",
  likes: 8,
  client_id: 3,
  dog_id: 19
)
Comment.create!(
  name: "Doggo",
  summary: "Bark Bark",
  likes: -1,
  client_id: 7,
  dog_id: 7
)
Comment.create!(
  name: "I dislike dogs",
  summary: "I hate everything about them",
  likes: -5,
  client_id: 6,
  dog_id: 10
)
Comment.create!(
  name: "Cuteee",
  summary: "Just so sweet, I love them so much!!!",
  likes: 3,
  client_id: 5,
  dog_id: 12
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 1
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 2
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 3
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 4
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 5
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 6
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 7
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 8
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 9
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 10
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 11
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 12
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 13
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 14
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 15
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 16
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 17
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 18
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 19
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 20
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 21
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 22
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 23
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 24
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 25
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 26
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 27
)
Comment.create!(
  name: "I love dogs",
  summary: "This dog breed is my favorite",
  likes: 3,
  client_id: 1,
  dog_id: 28
)
# Comment.create!(name: "",  summary: "", likes: , client_id: , dog_id: )

puts "Done seeding all data!"
