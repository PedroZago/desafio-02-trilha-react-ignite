import { GenreResponseProps } from '../interfaces';

interface ContentProps {
  selectedGenre: GenreResponseProps;
}

export function Header({ selectedGenre }: ContentProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  );
}