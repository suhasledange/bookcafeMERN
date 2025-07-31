import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Book from './Book'
import Container from '../Container'

const books = [
  { id: 1, title: 'Book One', image: 'https://picsum.photos/200/300?1' },
  { id: 2, title: 'Book Two', image: 'https://picsum.photos/200/300?2' },
  { id: 3, title: 'Book Three', image: 'https://picsum.photos/200/300?3' },
  { id: 4, title: 'Book Four', image: 'https://picsum.photos/200/300?4' },
  { id: 5, title: 'Book Five', image: 'https://picsum.photos/200/300?5' },
  { id: 6, title: 'Book Six', image: 'https://picsum.photos/200/300?6' },
  { id: 7, title: 'Book Seven', image: 'https://picsum.photos/200/300?7' },
  { id: 8, title: 'Book Eight', image: 'https://picsum.photos/200/300?8' },
]

export default function BookSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 1, containScroll: "trimSnaps" })

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

  return (
    <Container >

    <div className="relative w-full px-16 py-6">
      <div className="overflow-hidden" ref={emblaRef}>

        <div className="flex gap-4">
          {books.map((book) => (
            <div
              key={book.id}
              // className="min-w-[20%] flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Book title={book.image} image={book.image}/>
            </div>
          ))}
        </div>

      </div>

      <button
        onClick={scrollPrev}
        className="absolute top-1/3 left-0 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={scrollNext}
        className="absolute top-1/3 right-0 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        <ChevronRight size={24} />
      </button>
    </div>
    </Container>
  )
}
