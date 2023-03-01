import { MdSearch } from 'react-icons/md';
import { useContext } from 'react';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { cartContext } from '../../../providers/cartContext';

const SearchForm = () => {
  const { search, setSearch } = useContext(cartContext);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <StyledSearchForm>
      <input
        type='text'
        placeholder='Digite sua pesquisa'
        value={search}
        onChange={handleSearch}
      />
      <StyledButton type='button' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
