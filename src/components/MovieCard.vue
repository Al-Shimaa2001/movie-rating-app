<script setup>
const movies = [
  {
    id: 1,
    name: 'The Shawshank Redemption',
    genres: ['Drama', 'Crime'],
    rating: 9.3,
    poster: 'https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    description:
      'A banker wrongly convicted of murder finds hope and friendship in prison. A tale of perseverance and redemption.',
    in_theaters: false,
  },
  {
    id: 2,
    name: 'The Godfather',
    genres: ['Crime', 'Drama'],
    rating: 9.2,
    poster: 'https://image.tmdb.org/t/p/original/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
    description:
      'A powerful mafia family’s patriarch transfers control to his reluctant son. A saga of power, loyalty, and betrayal.',
    in_theaters: null,
  },
  {
    id: 3,
    name: 'The Dark Knight',
    genres: ['Action', 'Crime', 'Drama'],
    rating: 9.0,
    poster: 'https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    description:
      'Batman faces the chaotic Joker in a battle for Gotham’s soul. A gripping mix of action and psychological depth.',
    in_theaters: null,
  },
  {
    id: 4,
    name: 'Pulp Fiction',
    genres: ['Crime', 'Drama'],
    rating: 8.9,
    poster: 'https://image.tmdb.org/t/p/original/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    description:
      'Interconnected crime stories unfold with dark humor and violence. A cult classic with unforgettable dialogues.',
    in_theaters: false,
  },
  {
    id: 5,
    name: 'Inception',
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    rating: 8.8,
    poster: 'https://image.tmdb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    description:
      'A thief enters dreams to plant ideas, but reality blurs. A mind-bending sci-fi thriller by Christopher Nolan.',
    in_theaters: false,
  },
  {
    id: 6,
    name: 'Parasite',
    genres: ['Drama', 'Thriller', 'Comedy'],
    rating: 8.6,
    poster: 'https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    description:
      'A poor family schemes to work for a wealthy household. A darkly comic masterpiece on class divide.',
    in_theaters: false,
  },
]
</script>

<template>

    <main
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 justify-center items-center"
    >
      <div v-for="movie in movies" :key="movie.id" class="border text-center">
        <img :src="movie.poster" :alt="movie.name" class="w-[100px] h-[100px]" />
        <h3>{{ movie.name }}</h3>
        <span
          v-for="(genres, index) in movie.genres"
          :key="index"
          class="m-2 bg-purple-500 p-1 rounded-xl"
          >{{ genres }}</span
        >
        <p>{{ movie.description }}</p>
        <ul>
          <li>rating</li>
        </ul>
      </div>
    </main>
</template>

<style lang="css" scoped></style>
