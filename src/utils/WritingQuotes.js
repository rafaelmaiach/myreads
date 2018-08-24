const randomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomQuote = () => {
  const quotesList = [
    {
      quote: 'I try to create sympathy for my characters, then turn the monsters loose.',
      author: 'Stephen King',
    },
    {
      quote: 'Prose is architecture, not interior decoration.',
      author: 'Ernest Hemingway',
    },
    {
      quote: 'It\'s none of their business that you have to learn to write. Let them think you were born that way.',
      author: 'Ernest Hemingway',
    },
    {
      quote: 'Most writers regard the truth as their most valuable possession, and therefore are most economical in its use.',
      author: 'Mark Twain',
    },
    {
      quote: 'If you can tell stories, create characters, devise incidents, and have sincerity and passion, it doesn\'t matter a damn how you write.',
      author: 'Somerset Maugham',
    },
    {
      quote: 'To produce a mighty book, you must choose a mighty theme.',
      author: 'Herman Melville',
    },
    {
      quote: 'It is perfectly okay to write garbage—as long as you edit brilliantly.',
      author: 'C. J. Cherryh',
    },
    {
      quote: 'It took me fifteen years to discover I had no talent for writing, but I couldn\'t give it up because by that time I was too famous.',
      author: 'Robert Benchley',
    },
    {
      quote: 'A blank piece of paper is God\'s way of telling us how hard it to be God.',
      author: 'Sidney Sheldon',
    },
    {
      quote: 'Not that the story need be long, but it will take a long while to make it short.',
      author: 'Henry David Thoreau',
    },
    {
      quote: 'If you have other things in your life—family, friends, good productive day work—these can interact with your writing and the sum will be all the richer.',
      author: 'David Brin',
    },
    {
      quote: 'My own experience is that once a story has been written, one has to cross out the beginning and the end. It is there that we authors do most of our lying.',
      author: 'Anton Chekhov',
    },
    {
      quote: 'I have been successful probably because I have always realized that I knew nothing about writing and have merely tried to tell an interesting story entertainingly.',
      author: 'Edgar Rice Burroughs',
    },
    {
      quote: 'First, find out what your hero wants, then just follow him!',
      author: 'Ray Bradbury',
    },
    {
      quote: 'Most of the basic material a writer works with is acquired before the age of fifteen.',
      author: 'Willa Cather',
    },
    {
      quote: 'I love deadlines. I like the whooshing sound they make as they fly by.',
      author: 'Douglas Adams',
    },
    {
      quote: 'Words are a lens to focus one\'s mind.',
      author: 'Ayn Rand',
    },
    {
      quote: 'Poetry creates the myth, the prose writer draws its portrait.',
      author: 'Jean-Paul Sartre',
    },
    {
      quote: 'A writer without interest or sympathy for the foibles of his fellow man is not conceivable as a writer.',
      author: 'Joseph Conrad',
    },
    {
      quote: 'Science fiction writers, I am sorry to say, really do not know anything.',
      author: 'Philip K. Dick',
    },
    {
      quote: 'The only thing I was fit for was to be a writer, and this notion rested solely on my suspicion that I would never be fit for real work, and that writing didn\'t require any.',
      author: 'Russell Baker',
    },
    {
      quote: 'Half my life is an act of revision.',
      author: 'John Irving',
    },
    {
      quote: 'People do not deserve to have good writing, they are so pleased with bad.',
      author: 'Ralph Waldo Emerson',
    },
    {
      quote: 'I went for years not finishing anything. Because, of course, when you finish something you can be judged.',
      author: 'Erica Jong',
    },
    {
      quote: 'Don\'t try to figure out what other people want to hear from you; figure out what you have to say. It\'s the one and only thing you have to offer.',
      author: 'Barbara Kingsolver',
    },
    {
      quote: 'Writing a novel is like driving a car at night. You can only see as far as your headlights, but you can make the whole trip that way.',
      author: 'E. L. Doctorow',
    },
    {
      quote: 'Get it down. Take chances. It may be bad, but it\'s the only way you can do anything really good.',
      author: 'William Faulkner',
    },
    {
      quote: 'I am irritated by my own writing. I am like a violinist whose ear is true, but whose fingers refuse to reproduce precisely the sound he hears within.',
      author: 'Gustave Flaubert',
    },
    {
      quote: 'There\'s no money in poetry, but then there\'s no poetry in money either.',
      author: 'Robert Graves',
    },
    {
      quote: 'It is the writer who might catch the imagination of young people, and plant a seed that will flower and come to fruition.',
      author: 'Isaac Asimov',
    },
    {
      quote: 'The work never matches the dream of perfection the artist has to start with.',
      author: 'William Faulkner',
    },
    {
      quote: 'Begin with an individual, and before you know it you have created a type; begin with a type, and you find you have created nothing.',
      author: 'F. Scott Fitzgerald',
    },
    {
      quote: 'Writing is its own reward.',
      author: 'Henry Miller',
    },
    {
      quote: 'The unread story is not a story; it is little black marks on wood pulp. The reader, reading it, makes it live: a live thing, a story.',
      author: 'Ursula K. Le Guin',
    },
    {
      quote: 'Almost anyone can be an author; the business is to collect money and fame from this state of being.',
      author: 'A. A. Milne',
    },
    {
      quote: 'A wounded deer leaps the highest.',
      author: 'Emily Dickinson',
    },
    {
      quote: 'Only in men\'s imagination does every truth find an effective and undeniable existence. Imagination, not invention, is the supreme master of art as of life.',
      author: 'Joseph Conrad',
    },
    {
      quote: 'Literature is all, or mostly, about sex.',
      author: 'Anthony Burgess',
    },
    {
      quote: 'Writers are always selling somebody out.',
      author: 'Joan Didion',
    },
    {
      quote: 'Anecdotes don\'t make good stories. Generally I dig down underneath them so far that the story that finally comes out is not what people thought their anecdotes were about.',
      author: 'Alice Munro',
    },
    {
      quote: 'You learn by writing short stories. Keep writing short stories. The money\'s in novels, but writing short stories keeps your writing lean and pointed.',
      author: 'Larry Niven',
    },
    {
      quote: 'Everywhere I go I\'m asked if I think the university stifles writers. My opinion is that they don\'t stifle enough of them.',
      author: 'Flannery O\'Connor',
    },
    {
      quote: 'I can\'t write five words but that I change seven.',
      author: 'Dorothy Parker',
    },
    {
      quote: 'There\'s no such thing as writer\'s block. That was invented by people in California who couldn\'t write.',
      author: 'Terry Pratchett',
    },
    {
      quote: 'Writing is not necessarily something to be ashamed of, but do it in private and wash your hands afterwards.',
      author: 'Robert A. Heinlein',
    },
    {
      quote: 'No one can write decently who is distrustful of the reader\'s intelligence or whose attitude is patronizing.',
      author: 'E. B. White',
    },
    {
      quote: 'A poet can survive everything but a misprint.',
      author: 'Oscar Wilde',
    },
    {
      quote: 'Rejection slips, or form letters, however tactfully phrased, are lacerations of the soul, if not quite inventions of the devil—but there is no way around them.',
      author: 'Isaac Asimov',
    },
    {
      quote: 'Fiction is about stuff that\'s screwed up.',
      author: 'Nancy Kress',
    },
    {
      quote: 'In general, there\'s no point in writing hopeless novels. We all know we\'re going to die; what\'s important is the kind of men and women we are in the face of this.',
      author: 'Anne Lamott',
    },
    {
      quote: 'Great is the art of beginning, but greater is the art of ending.',
      author: 'Henry Wadsworth Longfellow',
    },
    {
      quote: 'Tell the readers a story! Because without a story, you are merely using words to prove you can string them together in logical sentences.',
      author: 'Anne McCaffrey',
    },
    {
      quote: 'If science fiction is the mythology of modern technology, then its myth is tragic.',
      author: 'Ursula K. Le Guin',
    },
    {
      quote: 'All the information you need can be given in dialogue.',
      author: 'Elmore Leonard',
    },
    {
      quote: 'Everybody walks past a thousand story ideas every day. The good writers are the ones who see five or six of them. Most people don\'t see any.',
      author: 'Orson Scott Card',
    },
    {
      quote: 'All the words I use in my stories can be found in the dictionary—it\'s just a matter of arranging them into the right sentences.',
      author: 'Somerset Maugham',
    },
    {
      quote: 'If you write one story, it may be bad; if you write a hundred, you have the odds in your favor.',
      author: 'Edgar Rice Burroughs',
    },
    {
      quote: 'Finishing a book is just like you took a child out in the back yard and shot it.',
      author: 'Truman Capote',
    },
  ];

  const randomNumber = randomNumberInRange(0, quotesList.length);
  return quotesList[randomNumber];
};

export default getRandomQuote;
