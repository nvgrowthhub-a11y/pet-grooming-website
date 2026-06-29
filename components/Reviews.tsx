'use client';

const reviews = [
  {
    name: 'Rajesh Kumar',
    location: 'South Delhi',
    text: 'बिल्कुल शानदार सेवा! मेरे कुत्ते को यहाँ इतनी प्रेमपूर्ण देखभाल मिली कि वह अब बार-बार जाना चाहता है।',
    rating: 5,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5%20%20-KgQlhZPxkB6Jfg4JCjtVa13qHQYF55.jpeg'
  },
  {
    name: 'Priya Singh',
    location: 'Gurgaon',
    text: 'ग्रूमिंग के बाद मेरे पालतू जानवर की त्वचा बिल्कुल स्वस्थ हो गई। टीम बहुत पेशेवर है।',
    rating: 5,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%20%20-Ab2n7cnLuszI18u4XXCeRCnJ7jbCUE.jpeg'
  },
  {
    name: 'Amit Verma',
    location: 'Noida',
    text: 'घर पर ही इतनी बेहतरीन सुविधा मिलेगी यह मुझे पता नहीं था। कीमत भी उचित है।',
    rating: 5,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5%20%20-KgQlhZPxkB6Jfg4JCjtVa13qHQYF55.jpeg'
  },
  {
    name: 'नीता गुप्ता',
    location: 'Faridabad',
    text: 'मेरी बिल्ली बहुत डरपोक है लेकिन इन लोगों की नरम व्यवहार ने उसे शांत रखा। सब कुछ परफेक्ट!',
    rating: 5,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%20%20-Ab2n7cnLuszI18u4XXCeRCnJ7jbCUE.jpeg'
  },
];

export default function Reviews() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          What Our Clients Say
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Hear from our happy pet parents across India
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-lg shadow-lg border-l-4 border-pink-600">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-800">{review.name}</p>
                  <p className="text-sm text-gray-600">📍 {review.location}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 italic leading-relaxed">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
