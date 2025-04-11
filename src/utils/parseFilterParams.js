const parseType = (type) => {
  if (typeof type !== 'string') return;

  const normalized = type.trim().toLowerCase();
  const allowedTypes = ['work', 'home', 'personal'];

  if (allowedTypes.includes(normalized)) return normalized;
  return;
};

const parseFavourite = (value) => {
  if (value === 'true') return true;
  if (value === 'false') return false;
  return;
};

export const parseFilterParams = (query) => {
  const parsedType = parseType(query.type);
  const parsedFavourite = parseFavourite(query.isFavourite);

  return {
    type: parsedType,
    isFavourite: parsedFavourite,
  };
};
