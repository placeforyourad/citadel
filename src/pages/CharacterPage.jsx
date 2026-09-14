import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import CharacterDetails from '../components/CharacterDetails/CharacterDetails';
import { fetchCharacter, selectCharacterState } from '../redux/slices/characterSlice';

export default function CharacterPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { item, loading, error, notFound } = useSelector(selectCharacterState);

  useEffect(() => {
    dispatch(fetchCharacter(id));
  }, [dispatch, id]);

  if (notFound) return <Navigate to="/404" replace />;

  return (
    <main className="page page--narrow">
      <button type="button" className="btn" onClick={() => navigate(-1)}>
        ← Назад
      </button>

      <CharacterDetails
        character={item}
        loading={loading}
        error={error}
        onRetry={() => dispatch(fetchCharacter(id))}
      />
    </main>
  );
}
