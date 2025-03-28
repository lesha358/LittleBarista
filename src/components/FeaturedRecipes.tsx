import Image from 'next/image';

const recipes = [
  {
    id: 1,
    title: 'Классический эспрессо',
    description: 'Идеальный эспрессо - основа многих кофейных напитков',
    image: '/images/espresso.jpg'
  },
  {
    id: 2,
    title: 'Капучино',
    description: 'Традиционный итальянский напиток с идеальной пенкой',
    image: '/images/cappuccino.jpg'
  },
  {
    id: 3,
    title: 'Латте',
    description: 'Сливочный и нежный напиток с молоком',
    image: '/images/latte.jpg'
  }
];

export default function FeaturedRecipes() {
  return (
    <section className="section-container section-padding gradient-section">
      <div className="container">
        <div className="section-title">
          <h2>Популярные напитки</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                <p className="text-gray-600">{recipe.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 